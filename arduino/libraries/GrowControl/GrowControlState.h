#pragma once

#include <Arduino.h>
#include "GrowControlConfig.h"
#include "EEPROMemory.h"
#include "SerialLog.h"

enum IrrigateMode {
    DEFAULT_MODE = 0,
    STOP_ON_ERROR = 1,
    STOP_IF_COMPLETE = 2,
};

struct IrrigateState {
    uint8_t valves[VALVE_COUNT / 8];
    uint16_t volume;
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
