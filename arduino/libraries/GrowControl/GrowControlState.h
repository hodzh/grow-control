#pragma once

#include <Arduino.h>
#include "GrowControlConfig.h"
#include "EEPROMemory.h"
#include "SerialLog.h"

enum IrrigateMode: uint8_t {
    IRRIGATE_MODE_DEFAULT = 0,
    IRRIGATE_MODE_STOP_ON_ERROR = 1,
    IRRIGATE_MODE_STOP_IF_COMPLETE = 2,
};

struct IrrigateState {
    uint8_t valves[VALVE_COUNT / 8];
    uint16_t volume;
    uint8_t mode;
};

struct DoseState {
    uint8_t compoteId;
    uint8_t compoteDailyId;
};

struct MixerState {
    uint8_t fake;
};

struct TimerState {
    unsigned long start;
    unsigned long ms;
};

// current state of fertigation command
struct FertigateState {
    uint8_t programId;
    uint8_t compoteId;
    uint8_t compoteDailyId;
};
