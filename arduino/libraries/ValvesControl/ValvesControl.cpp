#include "ValvesControl.h"
#include "SerialLog.h"
#include "GrowControl.h"
#include "EEPROMemory.h"
#include "TimeUtil.h"
#include "DS3232RTC.h"

#define VALVES_SERIAL_CONTROL serial
#define VALVES_SERIAL_CONTROL_BAUD_RATE 9600
// #define VALVES_SERIAL_CONTROL_BAUD_RATE 38400
#define NO_CMD 0xFFFF

ValvesControl::ValvesControl(): serial(2, 3) {
}

void ValvesControl::setup() {
    VALVES_SERIAL_CONTROL.begin(VALVES_SERIAL_CONTROL_BAUD_RATE);
    pinMode(0, OUTPUT);
    pinMode(1, OUTPUT);
    for(uint8_t i = 4; i <= 19; i++) {
        pinMode(i, OUTPUT);
        digitalWrite(i, 0);
    }
}

// main program loop

bool ValvesControl::loop() {
    if (VALVES_SERIAL_CONTROL.available() > 0) {
        uint8_t pin = VALVES_SERIAL_CONTROL.read();
        if (pin & 128) {
            pin = pin & 127;
            digitalWrite(pin, 1);
        } else {
            digitalWrite(pin, 0);
        }
    }
}
