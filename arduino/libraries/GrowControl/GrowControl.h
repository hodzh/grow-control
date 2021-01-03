#pragma once

#include <Arduino.h>
#include "GrowControlConfig.h"
#include "SerialControl.h"
#include "GrowControlMenu.h"
#include "ScheduleControl.h"
#include "ProgramTimerControl.h"
#include "GrowControlState.h"

// asynchronous callback of non blocking operation
class GrowControl;
typedef void (GrowControl::*CmdCompleteCallback)(uint8_t errorCode);
typedef void (GrowControl::*CmdStopCallback)(uint8_t errorCode);
typedef void (GrowControl::*CmdLoopCallback)(void);

class GrowControl {
public:

    GrowControl(void);

    void setup(void);
    void loop(void);

    template<typename T> T& getState(void) {
        return *reinterpret_cast<T *>(_stack + (_stackCount - getSize()));
    }
    CmdLoopCallback& getLoop(void);
    CmdStopCallback& getStop(void);
    uint8_t& getSize(void);
    template<typename T>
    void startState(CmdLoopCallback lcb, CmdStopCallback scb);
    void invokeLoop(void);
    void invokeStop(uint8_t errorCode);
    void fatalError(uint8_t errorCode);

    void fertigateStart(uint8_t programId, CmdStopCallback scb);
    void fertigateLoop(void);

    void mixDoseStart(CmdStopCallback scb);
    void mixDoseLoop(void);

    void doseStart(
        uint8_t programId,
        uint8_t compoteId,
        uint8_t compoteDailyId,
        CmdStopCallback scb
    );
    void doseLoop(void);
    void doseStop(uint8_t errorCode);

    void mixStart(uint8_t mode, CmdStopCallback scb);
    void mixLoop(void);

    void irrigateStart(
        uint8_t programId,
        uint8_t compoteId,
        uint8_t compoteDailyId,
        uint8_t mode,
        CmdStopCallback scb
    );
    void irrigateLoop(void);
    void irrigateStop(uint8_t errorCode);

    void pumpStart(
        uint8_t pumpId,
        uint8_t flowSensorId,
        uint32_t volume,
        CmdStopCallback scb
    );
    void pumpLoop(void);
    void pumpStop(uint8_t errorCode);
    void pumpInStop(uint8_t errorCode);

    void timerStart(unsigned long ms, CmdStopCallback scb);
    void timerLoop(void);
    void timerStop(uint8_t errorCode);

    void checkState(void);
    // check program timers
    void checkTimers(void);
    // check schedules
    void checkSchedules(void);
    // switch off each pump
    void allPumpOff(void);
    // switch off each valve
    void allValveOff(void);
    // switch off each mixer
    void allMixerOff(void);
    // switch off each dose mixer
    void allDoseMixerOff(void);
    // switch off each dose
    void allDoseOff(void);
    // switch off everything
    void allOff(void);
    // returns 1 if a pump with specified id is off, 0 otherwise
    uint8_t getStatePump(uint8_t id);
    // on or off a pump with specified id
    void setStatePump(uint8_t id, uint8_t value);
    // returns 1 if valve with specified id is off, 0 otherwise
    uint8_t getStateValve(uint8_t id);
    // on or off a valve with specified id
    void setStateValve(uint8_t id, uint8_t value);
    // returns 1 if mixer with specified id is off, 0 otherwise
    uint8_t getStateMixer(uint8_t id);
    // on or off a mixer with specified id
    void setStateMixer(uint8_t id, uint8_t value);
    // returns 1 if dose mixer with specified id is off, 0 otherwise
    uint8_t getStateDoseMixer(uint8_t id);
    // on or off a dose mixer with specified id
    void setStateDoseMixer(uint8_t id, uint8_t value);
    // returns 1 if dose mixer with specified id is off, 0 otherwise
    uint8_t getStateDose(uint8_t id);
    // on or off a dose mixer with specified id
    void setStateDose(uint8_t id, uint8_t value);
    ResponseStatus getStatus(void);
    uint8_t getCompoteDaily(const Program& program);
    uint16_t getTotalWashVolume(
        uint8_t programId,
        uint8_t compoteId,
        uint8_t compoteDailyId
    );
    uint16_t getTotalVolume(
        uint8_t programId,
        uint8_t compoteId,
        uint8_t compoteDailyId
    );
    void setNextValve(void);
    void resetStatus(void);

    void handleCommand(void);
    void cmdGetValve(void);
    void cmdSetValve(void);
    void cmdGetPumpState(void);
    void cmdSetPumpState(void);
    void cmdGetValveState(void);
    void cmdSetValveState(void);
    void cmdGetProgram(void);
    void cmdSetProgram(void);
    void cmdGetCompoteDaily(void);
    void cmdSetCompoteDaily(void);
    void cmdSetTimer(void);
    void cmdGetTimer(void);
    void cmdGetSchedule(void);
    void cmdSetSchedule(void);
    void cmdGetPump(void);
    void cmdSetPump(void);
    void cmdGetMixer(void);
    void cmdSetMixer(void);
    void cmdGetDose(void);
    void cmdSetDose(void);
    void cmdGetPinPump(void);
    void cmdSetPinPump(void);
    void cmdGetPinFlowSensor(void);
    void cmdSetPinFlowSensor(void);
    void cmdGetPinLevelSensor(void);
    void cmdSetPinLevelSensor(void);
    void cmdGetPinMixer(void);
    void cmdSetPinMixer(void);
    void cmdGetPinDose(void);
    void cmdSetPinDose(void);
    void cmdGetPinDoseMixer(void);
    void cmdSetPinDoseMixer(void);
    void cmdGetPinValve(void);
    void cmdSetPinValve(void);
    void cmdSetTime(void);
    void cmdGetTime(void);
    void cmdGetTemp(void);
    void cmdGetStatus(void);
    void cmdResetError(void);
    void cmdPumpIn(void);
    void cmdIrrigate(void);
    void cmdWash(void);
    void cmdMix(void);
    void cmdDoseMix(void);
    void cmdDose(void);

    ResponseStatus _status;
    uint8_t _errorCode;
    uint8_t _stack[MAX_STATE_STACK];
    uint8_t _stackCount;
    SerialControl _control;
    GrowControlMenu _menu;
#if RTC_COUNT == 1
    ProgramTimerControl _timer;
    ScheduleControl _schedule;
#endif
};
