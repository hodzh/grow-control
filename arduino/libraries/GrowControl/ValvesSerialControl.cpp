#include "ValvesSerialControl.h"
#include "SerialLog.h"
#include "GrowControl.h"
#include "EEPROMemory.h"
#include "TimeUtil.h"
#include "DS3232RTC.h"

#define VALVES_SERIAL_CONTROL_BAUD_RATE 9600
// #define VALVES_SERIAL_CONTROL_BAUD_RATE 38400
#define NO_CMD 0xFFFF

ValvesSerialControl::ValvesSerialControl(): serial(2, 3) {
}

void ValvesSerialControl::setup() {
    serial.begin(VALVES_SERIAL_CONTROL_BAUD_RATE);
    for (uint8_t i = 0; i < VALVE_COUNT / 8; i++) {
        valves[i] = 0;
    }
}

// main program loop

bool ValvesSerialControl::loop() {
}
