#pragma once

#include <Arduino.h>
#include "GrowControlConfig.h"
#include "EEPROMemory.h"
#include "SerialLog.h"

enum CheckPumpResult: uint8_t {
    PUMP_OK,
    PUMP_END,
    PUMP_MIN_FLOW_ERROR,
};

// current state of pumping process
struct PumpState {
    uint16_t rate;
    uint16_t minFlow;
    uint8_t flowSensorPin;
    uint8_t pumpId;
    uint8_t flowPinState;
    uint32_t flowCounter;
    uint32_t flowLastCounter;
    unsigned long flowLastUpdate;
    unsigned long pumpStart;
    uint32_t flowPulses;

    void startPump(uint8_t cpumpId, uint8_t flowSensorId, uint32_t volume) {
        pumpId = cpumpId;
        Pump settings;
        EEPROMemory::getPump(pumpId, settings);
        rate = settings.rate;
        minFlow = settings.minFlow;
        pumpStart = settings.startingTime * 1000UL;
        flowSensorPin = EEPROMemory::getPinFlowSensor(flowSensorId);
        flowPinState = digitalRead(flowSensorPin);
        const uint64_t rateToMili = 1000UL >> 1;
        flowPulses =
            static_cast<uint32_t>((static_cast<uint64_t>(volume) *
            static_cast<uint64_t>(settings.rate)) / rateToMili);
        flowCounter = 0;
//        SERIAL_PWRITE("start pump ");
//        SERIAL_WRITELN(flowSensorPin);
        flowLastUpdate = micros();
    }

    uint8_t checkPumpFlow(ResponseStatus& status) {
        unsigned long time = micros();
        if (pumpStart) {
            if (time - flowLastUpdate < pumpStart) {
                return PUMP_OK;
            }
            pumpStart = 0;
        } else if (time - flowLastUpdate < 1000000UL) {
            return PUMP_OK;
        }
        uint64_t timeDiff = time - flowLastUpdate;
        uint64_t cflow = flowCounter - flowLastCounter;
        flowLastUpdate = time;
        flowLastCounter = flowCounter;
        const uint64_t minToMicro = 60000000UL;
        const uint64_t rateToMili = 1000UL >> 1;
        timeDiff *= rate;
        cflow *= minToMicro;
        cflow *= rateToMili;
        cflow /= timeDiff;
        uint64_t cpumpTotal = flowCounter;
        cpumpTotal *= rateToMili;
        cpumpTotal /= rate;
        status.totalVolume = static_cast<uint16_t>(cpumpTotal);
        status.flow = static_cast<uint16_t>(cflow);
        SERIAL_WRITE("total ");
        SERIAL_WRITELN(status.totalVolume);
        SERIAL_WRITE("flow ");
        SERIAL_WRITELN(status.flow);
        if (status.flow > minFlow) {
            // flow value is OK
            return PUMP_OK;
        }
        // min flow error
        SERIAL_PWRITELN("min flow error");
        return PUMP_MIN_FLOW_ERROR;
    }

    uint8_t checkPump() {
        uint8_t flowState = digitalRead(flowSensorPin);
        if (flowPinState == flowState) {
            // no changes on sensor pin
            return PUMP_OK;
        }
        flowPinState = flowState;
        flowCounter++;
        if (flowCounter < flowPulses) {
            // continue until flowCounter reach flowPulses
            return PUMP_OK;
        }
        return PUMP_END;
    }
};

enum IrrigateMode {
    DEFAULT_MODE = 0,
    STOP_ON_ERROR = 1,
    STOP_IF_COMPLETE = 2,
};

struct IrrigateState {
    uint8_t valveId;
    uint8_t valves[VALVE_COUNT / 8];
    uint16_t volume;
};

struct DoseState {
    uint8_t doseId;
    uint8_t compoteId;
    uint8_t compoteDailyId;
};

struct MixerState {
    uint8_t seconds;
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
    uint8_t step;
};
