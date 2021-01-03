#pragma once

#include <Arduino.h>

// Log out activity using serial port
#define USE_SERIAL_LOG
#define LOG_STRING_MAX_SIZE 32

class SerialLog {
public:
	SerialLog();

    static void println_p(const char* str);
    static void print_p(const char* str);
};

#ifdef USE_SERIAL_LOG
#define SERIAL_BEGIN(rate) Serial.begin(rate)
#define SERIAL_WRITE(data) Serial.print(data)
#define SERIAL_WRITELN(data) Serial.println(data)
#define SERIAL_PWRITE(data) SerialLog::print_p(PSTR(data))
#define SERIAL_PWRITELN(data) SerialLog::println_p(PSTR(data))
#else
#define SERIAL_BEGIN(rate)
#define SERIAL_WRITE(data)
#define SERIAL_WRITELN(data)
#define SERIAL_PWRITE(data)
#define SERIAL_PWRITELN(data)
#endif