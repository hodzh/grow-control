#include "SerialControl.h"
#include "SerialLog.h"
#include "GrowControl.h"
#include "EEPROMemory.h"
#include "TimeUtil.h"
#include "DS3232RTC.h"

#define SERIAL_CONTROL Serial3
//#define SERIAL_CONTROL_BAUD_RATE 9600
#define SERIAL_CONTROL_BAUD_RATE 38400
#define NO_CMD 0xFFFF

SerialControl::SerialControl() {
}

void SerialControl::setup() {
    SERIAL_CONTROL.begin(SERIAL_CONTROL_BAUD_RATE);
    _type = 0;
    _count = 0;
    _length = NO_CMD;
}

// main program loop

bool SerialControl::loop() {
    bool hasCommand = false;
    while (SERIAL_CONTROL.available() > 0) {
        uint8_t incoming = static_cast<uint8_t>(SERIAL_CONTROL.read());
#ifdef TRACE_SERIAL_CONTROL
        SERIAL_PWRITE("receive ");
        SERIAL_WRITELN(incoming);
#endif
        uint8_t mode = incoming & IOMARKER_MASK;
        if (mode) {
            uint8_t cmd = incoming & IOMARKER_CMD_MASK;
            if (cmd) {
                // end message
#ifdef TRACE_SERIAL_CONTROL
                SERIAL_PWRITE("received [");
                for (uint16_t i = 0; i < _length / 8; i++) {
                    SERIAL_WRITE(reinterpret_cast<uint8_t *>(&_buffer)[i]);
                    SERIAL_PWRITE(", ");
                }
                SERIAL_PWRITELN("]");
#endif
                uint8_t crc = SerialControl::crc6(reinterpret_cast<uint8_t *>(&_buffer), _length);
                if (crc != (incoming & IOMARKER_CMD_PAYLOAD_MASK)) {
#ifdef TRACE_SERIAL_CONTROL
                    SERIAL_PWRITE("crc error ");
                    SERIAL_WRITE(incoming & IOMARKER_CMD_PAYLOAD_MASK);
                    SERIAL_PWRITE(" != ");
                    SERIAL_WRITELN(crc);
#endif
//                    ResponseError error;
//                    error.code = ERROR_IO;
//                    responseError(error);
                    _length = NO_CMD;
                    continue;
                }
                hasCommand = true;
                _length = NO_CMD;
#ifdef TRACE_SERIAL_CONTROL
                SERIAL_PWRITELN("received command");
#endif
                break;
            }
            // begin message
            _type = incoming & IOMARKER_CMD_PAYLOAD_MASK;
            _length = getRequestSize(_type) * 8;
            if (_length > sizeof(Request) * 8) {
#ifdef TRACE_SERIAL_CONTROL
                SERIAL_PWRITE("request type error ");
                SERIAL_WRITELN(_type);
#endif
                _length = NO_CMD;
                continue;
            }
            _count = 0;
#ifdef TRACE_SERIAL_CONTROL
            SERIAL_PWRITE("request ");
            SERIAL_WRITE(_type);
            SERIAL_PWRITE(" ");
            SERIAL_WRITELN(_length);
#endif
            for (uint8_t i = 0; i < sizeof(Request); i++) {
                reinterpret_cast<uint8_t *>(&_buffer)[i] = 0;
            }
            continue;
        }
        // message body
        if (_length == NO_CMD) {
#ifdef TRACE_SERIAL_CONTROL
            SERIAL_PWRITELN("begin marker error");
#endif
//            ResponseError error;
//            error.code = ERROR_IO;
//            responseError(error);
            continue;
        }
        if (_count >= _length) {
#ifdef TRACE_SERIAL_CONTROL
            SERIAL_PWRITELN("request length error");
#endif
//            ResponseError error;
//            error.code = ERROR_IO;
//            responseError(error);
            _length = NO_CMD;
            continue;
        }
        uint16_t *b = reinterpret_cast<uint16_t *>(reinterpret_cast<uint8_t *>(&_buffer) + (_count / 8));
        uint16_t w = static_cast<uint16_t>(incoming & IOMARKER_PAYLOAD_MASK) << (_count % 8);
        *b = *b | w;
#ifdef TRACE_SERIAL_CONTROL
//        SERIAL_PWRITE("payload ");
//        SERIAL_WRITE(_count / 8);
//        SERIAL_PWRITE(" ");
//        SERIAL_WRITE(_count % 8);
//        SERIAL_PWRITE(" ");
//        SERIAL_WRITE(*b);
//        SERIAL_PWRITE(" ");
//        SERIAL_WRITELN(w);
#endif
        _count += 7;
    }
    return hasCommand;
}

void SerialControl::write(uint8_t type, uint8_t *data, uint16_t length) {
    SERIAL_PWRITE("write ");
    SERIAL_WRITE(type);
    SERIAL_PWRITE(" ");
    SERIAL_WRITELN(length);
#ifdef TRACE_SERIAL_CONTROL
    SERIAL_PWRITE("send [");
    for (uint16_t i = 0; i < length; i++) {
        SERIAL_WRITE(data[i]);
        SERIAL_PWRITE(", ");
    }
    SERIAL_PWRITELN("]");
#endif
    SERIAL_CONTROL.write(type | IOMARKER_BEGIN_MESSAGE);
#ifdef TRACE_SERIAL_CONTROL
    SERIAL_PWRITE("type ");
    SERIAL_WRITELN(type | IOMARKER_BEGIN_MESSAGE);
#endif
    uint16_t length7 = static_cast<uint16_t>((static_cast<uint16_t>(length) *
        static_cast<uint16_t>(8) + 6) / static_cast<uint16_t>(7));
    SERIAL_PWRITE("length ");
    SERIAL_WRITELN(length7);
#ifdef TRACE_SERIAL_CONTROL
    SERIAL_PWRITE("write [");
#endif
    for (uint16_t i = 0; i < length7; i++) {
        uint16_t index = static_cast<uint16_t>((static_cast<uint16_t>(i) *
            static_cast<uint16_t>(7)) >> static_cast<uint16_t>(3));
#ifdef TRACE_SERIAL_CONTROL
//        SERIAL_PWRITE("index ");
//        SERIAL_WRITELN(index);
#endif
        uint16_t value = *reinterpret_cast<uint16_t*>(data + index);
        value >>= (8 - (i % 8)) % 8;
#ifdef TRACE_SERIAL_CONTROL
//        SERIAL_PWRITE("value ");
//        SERIAL_WRITELN(value);
#endif
        uint8_t toWrite = (*reinterpret_cast<uint8_t*>(&value)) & IOMARKER_PAYLOAD_MASK;
        SERIAL_CONTROL.write(toWrite);
#ifdef TRACE_SERIAL_CONTROL
        SERIAL_WRITE(toWrite);
        SERIAL_PWRITE(", ");
#endif
    }
#ifdef TRACE_SERIAL_CONTROL
    SERIAL_PWRITELN("]");
#endif
    uint8_t crc = SerialControl::crc6(data, length * 8);
    SERIAL_CONTROL.write(static_cast<uint8_t>(crc | IOMARKER_END_MESSAGE));
#ifdef TRACE_SERIAL_CONTROL
    SERIAL_PWRITE("end ");
    SERIAL_WRITELN(crc | IOMARKER_END_MESSAGE);
#endif
}

uint8_t SerialControl::crc6(uint8_t *msg, uint16_t bits) {
    uint8_t i = 0;
    uint8_t crc = 0xfc;
    while (bits--) {
        if (!i--) {
            i = 7;
            crc ^= *msg++;
        }
        crc = crc << 1 ^ (crc & 0x80 ? 0x9c : 0);
    }
    return crc >> 2 & 0x3f;
}

void SerialControl::responseError(ResponseError& response) {
    write(RESPONSE_ERROR, reinterpret_cast<uint8_t*>(&response), sizeof(ResponseError));
}