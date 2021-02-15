#pragma once

#include <Arduino.h>
#include "GrowControlConfig.h"
#include "SoftwareSerial.h"

class ValvesSerialControl {
public:
    ValvesSerialControl();

    void setup();
    bool loop();

    uint8_t getType() { return _type; };
    Request& getBuffer() { return _buffer; };
    void write(uint8_t type, uint8_t* data, uint16_t length);

private:
public:

    void responseError(ResponseError& response);
    static uint8_t crc6(uint8_t* msg, uint16_t bits);

    union {
        Request _buffer;
        uint8_t _arr[sizeof(Request) + 1];
    };
    uint16_t _count;
    uint16_t _length;
    uint8_t _type;
    SoftwareSerial serial;
    uint8_t valves[VALVE_COUNT / 8];
};
