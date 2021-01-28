#include "GrowControl.h"
#include "TimeUtil.h"
#include "SerialLog.h"
#include "EEPROMemory.h"
#include "ProgramTimerControl.h"
#include "ScheduleControl.h"

#if RTC_COUNT == 1
#include "DS3232RTC.h"
#endif

extern GrowControl growControl;

template<typename T>
struct TState {
    T state;
    CmdLoopCallback loopCallback;
    CmdStopCallback stopCallback;
    uint8_t size;
};

GrowControl::GrowControl(void) {
}

void GrowControl::setup(void) {
    // init log output
    SERIAL_BEGIN(38400);
    SERIAL_PWRITELN("begin setup");
    // init state
    _status.state = CMD_IDLE;
    _errorCode = 0;
    _stackCount = 0;
    _lowLevelSensorState = 0;
    _highLevelSensorState = 0;
    resetStatus();
    // check settings
    EEPROMemory::setup();
    // init communication port
    _control.setup();
    // init outputs
    for (uint8_t i = 0; i < PUMP_COUNT; i++) {
        pinMode(EEPROMemory::getPinPump(i), OUTPUT);
    }
    for (uint8_t i = 0; i < VALVE_COUNT; i++) {
        pinMode(EEPROMemory::getPinValve(i), OUTPUT);
    }
    for (uint8_t i = 0; i < MIXER_COUNT; i++) {
        pinMode(EEPROMemory::getPinMixer(i), OUTPUT);
    }
    for (uint8_t i = 0; i < DOSE_MIXER_COUNT; i++) {
        pinMode(EEPROMemory::getPinDoseMixer(i), OUTPUT);
    }
    for (uint8_t i = 0; i < DOSE_COUNT; i++) {
        pinMode(EEPROMemory::getPinDose(i), OUTPUT);
    }
    for (uint8_t i = 0; i < BEEPER_COUNT; i++) {
        pinMode(EEPROMemory::getPinBeeper(i), OUTPUT);
    }
    // set everything off
    allOff();
    // init inputs
    for (uint8_t i = 0; i < FLOW_SENSOR_COUNT; i++) {
        pinMode(EEPROMemory::getPinFlowSensor(i), INPUT_PULLUP);
    }
    for (uint8_t i = 0; i < LEVEL_SENSOR_COUNT; i++) {
        pinMode(EEPROMemory::getPinLevelSensor(i), INPUT);
    }
#if RTC_COUNT == 1
    // init real time control module
    // setSyncProvider() causes the TimeUtil library to synchronize with the
    // external RTC by calling RTC.get() every five minutes by default.
    setSyncProvider(RTC.get);
#endif
    // init display
    // GrowControlMenu::setup();
    // init other stuff
#if RTC_COUNT == 1
    _schedule.setup();
    _timer.setup();
#endif
#ifdef TEST_EMU
    RTC.squareWave(SQWAVE_1024_HZ);
#endif
    // initialization is done
    SERIAL_PWRITELN("ready");
}

void GrowControl::loop(void) {
//    GrowControlMenu::loop();
    if (_control.loop()) {
        handleCommand();
    }
    if (_stackCount) {
        invokeLoop();
    }
#if RTC_COUNT == 1
    checkTimers();
    checkSchedules();
#endif
}

CmdLoopCallback &GrowControl::getLoop(void) {
    return *reinterpret_cast<CmdLoopCallback *>(
        _stack + (_stackCount - sizeof(uint8_t) - sizeof(CmdStopCallback) - sizeof(CmdLoopCallback)));
}

CmdStopCallback &GrowControl::getStop(void) {
    return *reinterpret_cast<CmdStopCallback *>(
        _stack + (_stackCount - sizeof(uint8_t) - sizeof(CmdStopCallback)));
}

uint8_t &GrowControl::getSize(void) {
    return _stack[_stackCount - sizeof(uint8_t)];
}

template<typename T>
void GrowControl::startState(CmdLoopCallback lcb, CmdStopCallback scb) {
    _stackCount += sizeof(TState<T>);
    getLoop() = lcb;
    getStop() = scb;
    getSize() = sizeof(TState<T>);
    SERIAL_PWRITE("state start ");
    SERIAL_WRITE(getSize());
    SERIAL_PWRITE(" ");
    SERIAL_WRITE(sizeof(TState<T>));
    SERIAL_PWRITE(" ");
    SERIAL_WRITELN(_stackCount);
}

void GrowControl::invokeLoop(void) {
    if (!_stackCount) {
        return;
    }
    CmdLoopCallback lcb = getLoop();
    if (!lcb) {
        return;
    }
    (this->*lcb)();
}

void GrowControl::invokeStop(uint8_t errorCode) {
    CmdStopCallback scb = getStop();
    uint8_t size = getSize();
    _stackCount -= size;
    if (scb) {
        (this->*scb)(errorCode);
    }
    if (!_stackCount && _status.state != CMD_ERROR) {
        resetStatus();
        allOff();
    }
}

void GrowControl::fatalError(uint8_t errorCode) {
    _status.state = CMD_ERROR;
    _errorCode = errorCode;
    _stackCount = 0;
    allOff();
}

void GrowControl::checkLevels() {
    uint8_t state = digitalRead(EEPROMemory::getPinLevelSensor(LEVEL_SENSOR_LOW));
    if (state != _lowLevelSensorState) {
        _lowLevelSensorState = state;
        if (!_lowLevelSensorState) {
            // tank is empty
        }
    }
    state = digitalRead(EEPROMemory::getPinLevelSensor(LEVEL_SENSOR_HIGH));
    if (state != _highLevelSensorState) {
        _highLevelSensorState = state;
        if (_lowLevelSensorState) {
            // tank is full
        }
    }
}

void GrowControl::fertigateStart(uint8_t programId, CmdStopCallback scb) {
    SERIAL_PWRITE("fertigate command ");
    SERIAL_WRITELN(programId);
    startState<FertigateState>(&GrowControl::fertigateLoop, scb);
    FertigateState &state = getState<FertigateState>();
    state.programId = programId;
    Program program;
    EEPROMemory::getProgram(programId, program);
    state.compoteId = program.compote;
    state.compoteDailyId = getCompoteDaily(program);
    _status.state = CMD_FERTIGATE;
    _status.cmdState = 0;
}

void GrowControl::fertigateLoop(void) {
    FertigateState &state = getState<FertigateState>();
    SERIAL_PWRITE("fertigate loop ");
    SERIAL_WRITELN(_status.cmdState);
    switch (_status.cmdState) {
        case FERTIGATE_STATE_PUMP_IN:
            pumpStart(
                PUMP_IN,
                FLOW_SENSOR_IN,
                getTotalVolume(state.programId, state.compoteId, state.compoteDailyId),
                &GrowControl::fertigatePumpInStop
            );
            break;
        case FERTIGATE_STATE_MIX_DOSE:
            mixDoseStart(&GrowControl::fertigateStepStop);
            break;
        case FERTIGATE_STATE_DOSE:
            doseStart(state.programId, state.compoteId, state.compoteDailyId, &GrowControl::fertigateStepStop);
            break;
        case FERTIGATE_STATE_MIX:
            mixStart(0, &GrowControl::fertigateStepStop);
            break;
        case FERTIGATE_STATE_IRRIGATE:
            irrigateStart(state.programId, state.compoteId, state.compoteDailyId, 0,
                          IRRIGATE_MODE_DEFAULT, &GrowControl::fertigateStepStop);
            break;
        case FERTIGATE_STATE_IRRIGATE_FINISH:
            irrigateStart(state.programId, state.compoteId, state.compoteDailyId, 1,
                          IRRIGATE_MODE_STOP_IF_COMPLETE, &GrowControl::fertigateStepStop);
            break;
        case FERTIGATE_STATE_WASH_PUMP_IN:
            pumpStart(
                PUMP_IN,
                FLOW_SENSOR_IN,
                getTotalWashVolume(state.programId, state.compoteId, state.compoteDailyId),
                &GrowControl::fertigatePumpInStop
            );
            break;
        case FERTIGATE_STATE_WASH_MIX:
            mixStart(1, &GrowControl::fertigateStepStop);
            break;
        case FERTIGATE_STATE_WASH:
            irrigateStart(state.programId, state.compoteId, state.compoteDailyId, 1,
                          IRRIGATE_MODE_STOP_IF_COMPLETE, &GrowControl::fertigateStepStop);
            break;
        case FERTIGATE_STATE_DONE:
            SERIAL_PWRITE("fertigate stop");
            invokeStop(0);
            return;
        default:
            fatalError(ERROR_BAD_CMD_STATE);
            return;
    }
}

void GrowControl::fertigatePumpInStop(uint8_t errorCode) {
    if (errorCode) {
        fatalError(ERROR_PUMP_IN);
        return;
    }
    fertigateStepStop(0);
}

void GrowControl::fertigateStepStop(uint8_t errorCode) {
    _status.cmdState += 1;
}

void GrowControl::mixDoseStart(CmdStopCallback scb) {
    startState<MixerState>(&GrowControl::mixDoseLoop, scb);
    MixerState &state = getState<MixerState>();
    SERIAL_PWRITELN("mix dose start");
    Dose settings;
    EEPROMemory::getDose(0, settings);
    _status.mix = settings.seconds;
    setStateDoseMixer(0, 1);
    timerStart(1000UL, 0);
}

void GrowControl::mixDoseLoop(void) {
    MixerState &state = getState<MixerState>();
    _status.mix -= 1;
    if (_status.mix) {
        timerStart(1000UL, 0);
        return;
    }
    // end mix dose
    setStateDoseMixer(0, 0);
    SERIAL_PWRITELN("mix stop");
    invokeStop(0);
}

void GrowControl::doseStart(
    uint8_t programId,
    uint8_t compoteId,
    uint8_t compoteDailyId,
    CmdStopCallback scb
) {
    startState<DoseState>(&GrowControl::doseLoop, scb);
    DoseState &state = getState<DoseState>();
    Program program;
    EEPROMemory::getProgram(programId, program);
    _status.doseId = 0;
    state.compoteId = program.compote;
    state.compoteDailyId = getCompoteDaily(program);
    SERIAL_PWRITE("dose start ");
    SERIAL_WRITE(state.compoteId);
    SERIAL_PWRITE(" ");
    SERIAL_WRITELN(state.compoteDailyId);
}

void GrowControl::doseLoop(void) {
    if (_status.doseId >= DOSE_COUNT) {
        SERIAL_PWRITELN("dose stop");
        invokeStop(0);
        return;
    }
    DoseState &state = getState<DoseState>();
    SERIAL_PWRITE("dose loop ");
    SERIAL_WRITELN(_status.doseId);
    Dose settings;
    EEPROMemory::getDose(_status.doseId, settings);
    CompoteDaily compoteDaily;
    EEPROMemory::getCompoteDaily(state.compoteId, state.compoteDailyId, compoteDaily);
    uint16_t dose = compoteDaily.dose[_status.doseId];
    if (!dose) {
        SERIAL_PWRITELN("dose skip");
        _status.doseId += 1;
        return;
    }
    setStateDose(_status.doseId, 1);
    uint32_t timeout = dose;
    timeout *= settings.rate;
    timeout /= 10;
    timerStart(timeout, &GrowControl::doseStop);
}

void GrowControl::doseStop(uint8_t errorCode) {
    SERIAL_PWRITELN("dose timer stop");
    setStateDose(_status.doseId, 0);
    _status.doseId += 1;
}

void GrowControl::mixStart(uint8_t washing, CmdStopCallback scb) {
    startState<MixerState>(&GrowControl::mixLoop, scb);
    MixerState &state = getState<MixerState>();
    Mixer settings;
    EEPROMemory::getMixer(0, settings);
    _status.mix = washing ? settings.washSeconds : settings.seconds;
    if (!_status.mix) {
        SERIAL_PWRITELN("mix skip");
        invokeStop(0);
        return;
    }
    SERIAL_PWRITELN("mix start");
    setStateMixer(0, 1);
}

void GrowControl::mixLoop(void) {
    if (!_status.mix) {
        setStateMixer(0, 0);
        SERIAL_PWRITELN("mix stop");
        invokeStop(0);
    }
    SERIAL_PWRITE("mix loop ");
    SERIAL_WRITELN(_status.mix);
    _status.mix -= 1;
    timerStart(1000UL, 0);
}

void GrowControl::irrigateStart(
    uint8_t programId,
    uint8_t compoteId,
    uint8_t compoteDailyId,
    uint8_t washing,
    uint8_t mode,
    CmdStopCallback scb
) {
    Program program;
    EEPROMemory::getProgram(programId, program);
    if (!bitCount(program.valves, VALVE_COUNT / 8)) {
        SERIAL_PWRITELN("irrigate skip");
        return;
    }
    startState<IrrigateState>(&GrowControl::irrigateLoop, scb);
    CompoteDaily compoteDaily;
    EEPROMemory::getCompoteDaily(compoteId, compoteDailyId, compoteDaily);
    IrrigateState &state = getState<IrrigateState>();
    memcpy(state.valves, program.valves, VALVE_COUNT / 8);
    _status.valveId = 0xFF;
    resetErrorValves();
    state.volume = washing ? compoteDaily.washVolume : compoteDaily.volume;
    state.mode = mode;
    SERIAL_PWRITE("irrigate start ");
    for (uint8_t i = 0; i < VALVE_COUNT / 8; ++i) {
        SERIAL_WRITE(state.valves[i]);
        SERIAL_PWRITE(" ");
    }
    SERIAL_WRITELN(state.volume);
}

void GrowControl::irrigateLoop(void) {
    IrrigateState &state = getState<IrrigateState>();
    SERIAL_PWRITE("irrigate loop ");
    SERIAL_WRITELN(_status.valveId);
    setNextValve();
    if (_status.valveId >= VALVE_COUNT) {
        if (state.mode == IRRIGATE_MODE_DEFAULT) {
            SERIAL_PWRITELN("irrigate done");
            invokeStop(0);
            if (bitCount(_errorValves, VALVE_COUNT / 8)) {

            }
            return;
        }
        if (state.mode == IRRIGATE_MODE_STOP_IF_COMPLETE) {
            if (bitCount(state.valves, VALVE_COUNT / 8) ==
                    bitCount(_errorValves, VALVE_COUNT / 8)) {
                SERIAL_PWRITELN("wash done");
                invokeStop(0);
                return;
            }
        }
        setNextValve();
    }
    pumpStart(PUMP_OUT, FLOW_SENSOR_OUT, state.volume, &GrowControl::irrigateStop);
}

void GrowControl::irrigateStop(uint8_t errorCode) {
    if (!errorCode) {
        return;
    }
    _errorValves[_status.valveId / 8] |=
        _errorValves[_status.valveId / 8] | ((uint8_t) 1 << (_status.valveId % 8));
}

uint8_t GrowControl::bitCount(const uint8_t* bytes, uint8_t length) {
    uint8_t count = 0;
    for (uint8_t i = 0; i < length; ++i) {
        uint8_t b = bytes[i];
        while (b) {
            count += b & 1;
            b >>= 1;
        }
    }
    return count;
}

void GrowControl::resetErrorValves() {
    for (uint8_t i = 0; i < VALVE_COUNT / 8; ++i) {
        _errorValves[i] = 0;
    }
}

void GrowControl::pumpStart(
    uint8_t pumpId,
    uint8_t flowSensorId,
    uint32_t volume,
    CmdStopCallback scb
) {
    SERIAL_PWRITE("pump start ");
    SERIAL_WRITE(pumpId);
    SERIAL_PWRITE(" ");
    SERIAL_WRITE(flowSensorId);
    SERIAL_PWRITE(" ");
    SERIAL_WRITELN(volume);
    startState<PumpState>(&GrowControl::pumpLoop, scb);
    PumpState &state = getState<PumpState>();
    setStatePump(pumpId, 1);
    state.startPump(pumpId, flowSensorId, volume);
}

void GrowControl::pumpLoop(void) {
    PumpState &state = getState<PumpState>();
    uint8_t check = state.checkPump();
    if (check == PUMP_END) {
        pumpStop(0);
        return;
    }
    check = state.checkPumpFlow(_status);
    if (check != PUMP_OK) {
        pumpStop(check);
        return;
    }
    // continue
}

void GrowControl::pumpStop(uint8_t errorCode) {
    SERIAL_PWRITE("pump stop ");
    SERIAL_WRITELN(errorCode);
    PumpState &state = getState<PumpState>();
    setStatePump(state.pumpId, 0);
    invokeStop(errorCode);
}

void GrowControl::pumpInStop(uint8_t errorCode) {
    if (errorCode) {
        fatalError(ERROR_PUMP_IN);
        return;
    }
}

void GrowControl::timerStart(unsigned long ms, CmdStopCallback scb) {
    SERIAL_PWRITE("timer start ");
    SERIAL_WRITELN(ms);
    startState<TimerState>(&GrowControl::timerLoop, scb);
    TimerState &state = getState<TimerState>();
    state.start = millis();
    state.ms = ms;
}

void GrowControl::timerLoop(void) {
    TimerState &state = getState<TimerState>();
    if (millis() - state.start < state.ms) {
        // continue
        return;
    }
    SERIAL_PWRITELN("timer stop");
    invokeStop(0);
}

void GrowControl::checkState(void) {
    allOff();
    if (_status.state == CMD_ERROR) {
        SERIAL_PWRITELN("fatal error!");
        return;
    }
    if (_status.state == CMD_IDLE) {
        SERIAL_PWRITELN("idle state!");
        return;
    }
}

uint8_t GrowControl::getStatePump(uint8_t id) {
    uint8_t pin = EEPROMemory::getPinPump(id);
    return digitalRead(pin);
}

void GrowControl::setStatePump(uint8_t id, uint8_t value) {
    SERIAL_PWRITE("set pump state ");
    SERIAL_WRITE(id);
    SERIAL_PWRITE(" ");
    SERIAL_WRITELN(value);
    uint8_t pin = EEPROMemory::getPinPump(id);
    digitalWrite(pin, value);
}

uint8_t GrowControl::getStateValve(uint8_t id) {
    uint8_t pin = EEPROMemory::getPinValve(id);
    return digitalRead(pin);
}

void GrowControl::setStateValve(uint8_t id, uint8_t value) {
    SERIAL_PWRITE("set valve state ");
    SERIAL_WRITE(id);
    SERIAL_PWRITE(" ");
    SERIAL_WRITELN(value);
    uint8_t pin = EEPROMemory::getPinValve(id);
    digitalWrite(pin, value);
}

uint8_t GrowControl::getStateMixer(uint8_t id) {
    uint8_t pin = EEPROMemory::getPinMixer(id);
    return digitalRead(pin);
}

void GrowControl::setStateMixer(uint8_t id, uint8_t value) {
    SERIAL_PWRITE("set mixer state ");
    SERIAL_WRITE(id);
    SERIAL_PWRITE(" ");
    SERIAL_WRITELN(value);
    uint8_t pin = EEPROMemory::getPinMixer(id);
    digitalWrite(pin, value);
}

uint8_t GrowControl::getStateDoseMixer(uint8_t id) {
    uint8_t pin = EEPROMemory::getPinDoseMixer(id);
    return digitalRead(pin);
}

void GrowControl::setStateDoseMixer(uint8_t id, uint8_t value) {
    SERIAL_PWRITE("set dose mixer state ");
    SERIAL_WRITE(id);
    SERIAL_PWRITE(" ");
    SERIAL_WRITELN(value);
    uint8_t pin = EEPROMemory::getPinDoseMixer(id);
    digitalWrite(pin, value);
}

uint8_t GrowControl::getStateDose(uint8_t id) {
    uint8_t pin = EEPROMemory::getPinDose(id);
    return digitalRead(pin);
}

void GrowControl::setStateDose(uint8_t id, uint8_t value) {
    SERIAL_PWRITE("set dose state ");
    SERIAL_WRITE(id);
    SERIAL_PWRITE(" ");
    SERIAL_WRITELN(value);
    uint8_t pin = EEPROMemory::getPinDose(id);
    digitalWrite(pin, value);
}

void GrowControl::checkTimers(void) {
#if RTC_COUNT == 1
    uint16_t onOff = _timer.check();
    if (!onOff) {
        return;
    }
    for (uint8_t i = 0; i < PROGRAM_COUNT; ++i) {
        if (onOff & (1 << i)) {
            SERIAL_PWRITE("timer ");
            SERIAL_WRITE(i);
            SERIAL_PWRITE(" ");
            SERIAL_WRITE(_timer.getLast().hour);
            SERIAL_PWRITE(":");
            SERIAL_WRITE(_timer.getLast().minute);
            SERIAL_PWRITE(":");
            SERIAL_WRITE(_timer.getLast().second);
            SERIAL_PWRITELN("");
            // start program on timer
            fertigateStart(i, 0);
            break;
        }
    }
#endif
}

void GrowControl::checkSchedules(void) {
#if RTC_COUNT == 1
//    uint16_t onOff = _schedule.check();
//    if (!onOff) {
//        return;
//    }
//    for (uint8_t i = 0; i < DEV_COUNT; ++i) {
//        if (onOff & (1 << i)) {
//            devOnOff(i, 1);
//        } else {
//            devOnOff(i, 0);
//        }
//    }
#endif
}

void GrowControl::setNextValve(void) {
    IrrigateState &state = getState<IrrigateState>();
    if (_status.valveId < VALVE_COUNT) {
        setStateValve(_status.valveId, 0);
        _status.valveId += 1;
    } else {
        _status.valveId = 0;
    }
    for (uint8_t i = _status.valveId; i < VALVE_COUNT; ++i) {
        if (state.valves[i / 8] & ((uint8_t) 1 << (i % 8))) {
            _status.valveId = i;
            setStateValve(_status.valveId, 1);
            return;
        }
    }
    _status.valveId = 255;
}

uint8_t GrowControl::getCompoteDaily(const Program &program) {
    if (program.compote >= COMPOTE_COUNT) {
        SERIAL_PWRITELN("compote load error");
        return 0xff;
    }
    // EEPROMemory::getCompoteDaily(program.compote, 0, compote);
    return 0;
}

uint16_t GrowControl::getTotalVolume(
    uint8_t programId,
    uint8_t compoteId,
    uint8_t compoteDailyId
) {
    Program program;
    EEPROMemory::getProgram(programId, program);
    CompoteDaily compoteDaily;
    EEPROMemory::getCompoteDaily(compoteId, compoteDailyId, compoteDaily);
    uint16_t totalVolume = 0;
    for (uint8_t i = 0; i < VALVE_COUNT; ++i) {
        if (program.valves[i / 8] & ((uint8_t) 1 << (i % 8))) {
            totalVolume += compoteDaily.volume;
        }
    }
    return totalVolume;
}

uint16_t GrowControl::getTotalWashVolume(
    uint8_t programId,
    uint8_t compoteId,
    uint8_t compoteDailyId
) {
    Program program;
    EEPROMemory::getProgram(programId, program);
    CompoteDaily compoteDaily;
    EEPROMemory::getCompoteDaily(compoteId, compoteDailyId, compoteDaily);
    uint16_t totalWashVolume = 0;
    for (uint8_t i = 0; i < VALVE_COUNT; ++i) {
        if (program.valves[i / 8] & ((uint8_t) 1 << (i % 8))) {
            totalWashVolume += compoteDaily.washVolume;
        }
    }
    return totalWashVolume;
}

void GrowControl::allPumpOff(void) {
    for (uint8_t i = 0; i < PUMP_COUNT; i++) {
        setStatePump(i, 0);
    }
}

void GrowControl::allValveOff(void) {
    for (uint8_t i = 0; i < VALVE_COUNT; i++) {
        setStateValve(i, 0);
    }
}

void GrowControl::allMixerOff(void) {
    for (uint8_t i = 0; i < MIXER_COUNT; i++) {
        setStateMixer(i, 0);
    }
}

void GrowControl::allDoseOff(void) {
    for (uint8_t i = 0; i < DOSE_COUNT; i++) {
        setStateDose(i, 0);
    }
}

void GrowControl::allDoseMixerOff(void) {
    for (uint8_t i = 0; i < DOSE_MIXER_COUNT; i++) {
        setStateDoseMixer(i, 0);
    }
}

void GrowControl::allOff(void) {
    allPumpOff();
    allValveOff();
    allMixerOff();
    allDoseOff();
    allDoseMixerOff();
}

void GrowControl::resetStatus(void) {
    _status.state = 0;
    _status.cmdState = 0;
    _status.valve = 0;
    _status.flow = 0;
    _status.volume = 0;
    _status.totalVolume = 0;
    _status.mix = 0;
}

void GrowControl::handleCommand(void) {
    uint8_t type = _control.getType();
    switch (type) {
        case REQUEST_GET_TIME:
            cmdGetTime();
            return;
        case REQUEST_GET_TEMP:
            cmdGetTemp();
            return;
        case REQUEST_GET_STATUS:
            cmdGetStatus();
            return;
        case REQUEST_RESET_ERROR:
            cmdResetError();
            return;
        case REQUEST_GET_STATE_VALVE:
//            cmdGetValves();
            return;
        case REQUEST_GET_STATE_PUMP:
//            cmdGetPump();
            return;
        case REQUEST_GET_PROGRAM:
            cmdGetProgram();
            return;
        case REQUEST_GET_COMPOTE_DAILY:
            cmdGetCompoteDaily();
            return;
        case REQUEST_GET_SCHEDULE:
            cmdGetSchedule();
            return;
        case REQUEST_GET_TIMER:
            cmdGetTimer();
            return;
        case REQUEST_GET_PUMP:
            cmdGetPump();
            return;
        case REQUEST_GET_MIXER:
            cmdGetMixer();
            return;
        case REQUEST_GET_DOSE:
            cmdGetDose();
            return;
        case REQUEST_GET_LEVEL_SENSOR:
            cmdGetDose();
            return;
        case REQUEST_GET_PIN:
            cmdGetPin();
            return;
    }
    if (_status.state != CMD_IDLE) {
        SERIAL_PWRITELN("can't start command");
        return;
    }
    Request payload = _control.getBuffer();
    switch (type) {
        case REQUEST_IRRIGATE:
            cmdIrrigate();
            return;
        case REQUEST_WASH:
            cmdWash();
            return;
        case REQUEST_PUMP_IN:
            cmdPumpIn();
            return;
        case REQUEST_COMPOTE:
//            cmdCompote();
            return;
        case REQUEST_WASH_COMPOTE:
            mixDoseStart(0);
            return;
        case REQUEST_MIX:
            cmdMix();
            return;
        case REQUEST_MIX_DOSE:
            cmdDoseMix();
            return;
        case REQUEST_DOSE:
            cmdDose();
            return;
        case REQUEST_FERTIGATE:
            fertigateStart(payload.fertigate.programId, 0);
            return;
        case REQUEST_SET_PROGRAM:
            cmdSetProgram();
            return;
        case REQUEST_SET_COMPOTE_DAILY:
            cmdSetCompoteDaily();
            return;
        case REQUEST_SET_SCHEDULE:
            cmdSetSchedule();
            return;
        case REQUEST_SET_TIMER:
            cmdSetTimer();
            return;
        case REQUEST_SET_PUMP:
            cmdSetPump();
            return;
        case REQUEST_SET_MIXER:
            cmdSetMixer();
            return;
        case REQUEST_SET_DOSE:
            cmdSetDose();
            return;
        case REQUEST_SET_LEVEL_SENSOR:
            cmdSetLevelSensor();
            return;
        case REQUEST_SET_PIN:
            cmdSetPin();
            return;
        case REQUEST_SET_TIME:
            cmdSetTime();
            return;
        case REQUEST_SET_STATE_VALVE:
            cmdSetValveState();
            return;
        case REQUEST_SET_STATE_PUMP:
            cmdSetPumpState();
            return;
        case REQUEST_SET_STATE_DOSE:
            cmdSetDoseState();
            return;
        case REQUEST_SET_STATE_MIXER:
            cmdSetMixerState();
            return;
        default:
            SERIAL_PWRITELN("unknown command");
            return;
    }
}

void GrowControl::cmdGetValve(void) {
    SERIAL_PWRITE("GetValve command ");
    SERIAL_WRITE(_control.getBuffer().getStateValve.index);
    uint8_t pin = EEPROMemory::getPinValve(_control.getBuffer().getStateValve.index);
    uint8_t state = digitalRead(pin);
    SERIAL_PWRITE(" state ");
    SERIAL_WRITELN(state);
    ResponseStateValve response;
    _control.write(
        RESPONSE_STATE_VALVE,
        reinterpret_cast<uint8_t *>(&response),
        sizeof(ResponseStateValve)
    );
}

void GrowControl::cmdSetValve(void) {
    SERIAL_PWRITE("SetValve command ");
    SERIAL_WRITE(_control.getBuffer().setStateValve.index);
    SERIAL_PWRITE(" state ");
    SERIAL_WRITELN(_control.getBuffer().setStateValve.value);
    setStateValve(
        _control.getBuffer().setStateValve.index,
        _control.getBuffer().setStateValve.value
    );
}

void GrowControl::cmdGetPumpState(void) {
    SERIAL_PWRITE("GetPump command ");
    SERIAL_WRITELN(_control.getBuffer().getStatePump.index);
    uint8_t pin = EEPROMemory::getPinPump(_control.getBuffer().getStatePump.index);
    uint8_t state = digitalRead(pin);
    SERIAL_PWRITE("state ");
    SERIAL_WRITELN(state);
    ResponseStatePump response;
    _control.write(
        RESPONSE_STATE_PUMP,
        reinterpret_cast<uint8_t *>(&response),
        sizeof(ResponseStatePump)
    );
}

void GrowControl::cmdSetPumpState(void) {
    SERIAL_PWRITE("SetPump command ");
    SERIAL_WRITE(_control.getBuffer().setStatePump.index);
    SERIAL_PWRITE(" state ");
    SERIAL_WRITELN(_control.getBuffer().setStatePump.value);
    setStatePump(
        _control.getBuffer().setStatePump.index,
        _control.getBuffer().setStatePump.value
    );
}

void GrowControl::cmdGetValveState(void) {
    SERIAL_PWRITE("GetValve command ");
    SERIAL_WRITELN(_control.getBuffer().getStateValve.index);
    uint8_t pin = EEPROMemory::getPinValve(_control.getBuffer().getStateValve.index);
    uint8_t state = digitalRead(pin);
    SERIAL_PWRITE("state ");
    SERIAL_WRITELN(state);
    ResponseStateValve response;
    _control.write(
        RESPONSE_STATE_VALVE,
        reinterpret_cast<uint8_t *>(&response),
        sizeof(ResponseStateValve)
    );
}

void GrowControl::cmdSetValveState(void) {
    SERIAL_PWRITE("SetValve command ");
    SERIAL_WRITE(_control.getBuffer().setStateValve.index);
    SERIAL_PWRITE(" state ");
    SERIAL_WRITELN(_control.getBuffer().setStateValve.value);
    setStateValve(
        _control.getBuffer().setStateValve.index,
        _control.getBuffer().setStateValve.value
    );
}

void GrowControl::cmdGetMixerState(void) {
    SERIAL_PWRITE("GetMixer command ");
    SERIAL_WRITELN(_control.getBuffer().getStateMixer.index);
    uint8_t pin = EEPROMemory::getPinMixer(_control.getBuffer().getStateMixer.index);
    uint8_t state = digitalRead(pin);
    SERIAL_PWRITE("state ");
    SERIAL_WRITELN(state);
    ResponseStateMixer response;
    _control.write(
            RESPONSE_STATE_MIXER,
            reinterpret_cast<uint8_t *>(&response),
            sizeof(ResponseStateMixer)
    );
}

void GrowControl::cmdSetMixerState(void) {
    SERIAL_PWRITE("SetMixer command ");
    SERIAL_WRITE(_control.getBuffer().setStateMixer.index);
    SERIAL_PWRITE(" state ");
    SERIAL_WRITELN(_control.getBuffer().setStateMixer.value);
    setStateMixer(
            _control.getBuffer().setStateMixer.index,
            _control.getBuffer().setStateMixer.value
    );
}

void GrowControl::cmdGetDoseState(void) {
    SERIAL_PWRITE("GetDose command ");
    SERIAL_WRITELN(_control.getBuffer().getStateDose.index);
    uint8_t pin = EEPROMemory::getPinDose(_control.getBuffer().getStateDose.index);
    uint8_t state = digitalRead(pin);
    SERIAL_PWRITE("state ");
    SERIAL_WRITELN(state);
    ResponseStateDose response;
    _control.write(
            RESPONSE_STATE_DOSE,
            reinterpret_cast<uint8_t *>(&response),
            sizeof(ResponseStateDose)
    );
}

void GrowControl::cmdSetDoseState(void) {
    SERIAL_PWRITE("SetDose command ");
    SERIAL_WRITE(_control.getBuffer().setStateDose.index);
    SERIAL_PWRITE(" state ");
    SERIAL_WRITELN(_control.getBuffer().setStateDose.value);
    setStateDose(
            _control.getBuffer().setStateDose.index,
            _control.getBuffer().setStateDose.value
    );
}


void GrowControl::cmdGetDoseMixerState(void) {
    SERIAL_PWRITE("GetDoseMixer command ");
    SERIAL_WRITELN(_control.getBuffer().getStateDoseMixer.index);
    uint8_t pin = EEPROMemory::getPinDoseMixer(_control.getBuffer().getStateDoseMixer.index);
    uint8_t state = digitalRead(pin);
    SERIAL_PWRITE("state ");
    SERIAL_WRITELN(state);
    ResponseStateDoseMixer response;
    _control.write(
            RESPONSE_STATE_DOSE_MIXER,
            reinterpret_cast<uint8_t *>(&response),
            sizeof(ResponseStateDoseMixer)
    );
}

void GrowControl::cmdSetDoseMixerState(void) {
    SERIAL_PWRITE("SetDoseMixer command ");
    SERIAL_WRITE(_control.getBuffer().setStateDoseMixer.index);
    SERIAL_PWRITE(" state ");
    SERIAL_WRITELN(_control.getBuffer().setStateDoseMixer.value);
    setStateDoseMixer(
            _control.getBuffer().setStateDoseMixer.index,
            _control.getBuffer().setStateDoseMixer.value
    );
}

void GrowControl::cmdSetTime(void) {
    SERIAL_PWRITE("SetTime command ");
    Request _buffer = _control.getBuffer();
    SERIAL_WRITE(_buffer.setTime.year);
    SERIAL_PWRITE("/");
    SERIAL_WRITE(_buffer.setTime.month);
    SERIAL_PWRITE("/");
    SERIAL_WRITE(_buffer.setTime.day);
    SERIAL_PWRITE(" ");
    SERIAL_WRITE(_buffer.setTime.hour);
    SERIAL_PWRITE(":");
    SERIAL_WRITE(_buffer.setTime.minute);
    SERIAL_PWRITE(":");
    SERIAL_WRITELN(_buffer.setTime.second);
    tmElements_t tm;
    tm.Second = _buffer.setTime.second;
    tm.Minute = _buffer.setTime.minute;
    tm.Hour = _buffer.setTime.hour;
    tm.Wday = _buffer.setTime.wday;
    tm.Day = _buffer.setTime.day;
    tm.Month = _buffer.setTime.month;
    tm.Year = _buffer.setTime.year;
    time_t t = makeTime(tm);
#if RTC_COUNT == 1
    RTC.set(t);
#endif
    setTime(t);
}

void GrowControl::cmdGetTime(void) {
    SERIAL_PWRITELN("time");
    time_t t = now();
    ResponseTime response;
    response.second = second(t);
    response.minute = minute(t);
    response.hour = hour(t);
    response.wday = weekday(t);
    response.day = day(t);
    response.month = month(t);
    response.year = year(t) - 1970;
    _control.write(
        RESPONSE_TIME,
        reinterpret_cast<uint8_t *>(&response),
        sizeof(ResponseTime)
    );
    SERIAL_WRITE(response.year);
    SERIAL_PWRITE("/");
    SERIAL_WRITE(response.month);
    SERIAL_PWRITE("/");
    SERIAL_WRITE(response.day);
    SERIAL_PWRITE(" ");
    SERIAL_WRITE(response.hour);
    SERIAL_PWRITE(":");
    SERIAL_WRITE(response.minute);
    SERIAL_PWRITE(":");
    SERIAL_WRITELN(response.second);
}

// C = RTC.temperature() / 4.; F = C * 9. / 5. + 32.;
void GrowControl::cmdGetTemp(void) {
    SERIAL_PWRITELN("temp");
    ResponseTemp response;
#if RTC_COUNT == 1
    response.value = RTC.temperature();
#else
    response.value = 0;
#endif
    SERIAL_WRITELN(response.value);
    _control.write(
        RESPONSE_TEMP,
        reinterpret_cast<uint8_t *>(&response),
        sizeof(ResponseTemp)
    );
}

void GrowControl::cmdGetProgram(void) {
    SERIAL_PWRITE("get program ");
    SERIAL_WRITELN(_control.getBuffer().getProgram.index);
    ResponseProgram response;
    response.index = _control.getBuffer().getProgram.index;
    EEPROMemory::getProgram(_control.getBuffer().getProgram.index, response.value);
    _control.write(
        RESPONSE_PROGRAM,
        reinterpret_cast<uint8_t *>(&response),
        sizeof(ResponseProgram));
}

void GrowControl::cmdSetProgram(void) {
    SERIAL_PWRITE("set program ");
    SERIAL_WRITELN(_control.getBuffer().setProgram.index);
    EEPROMemory::setProgram(
        _control.getBuffer().setProgram.index,
        _control.getBuffer().setProgram.value
    );
}

void GrowControl::cmdGetCompoteDaily(void) {
    SERIAL_PWRITE("get compote ");
    SERIAL_WRITELN(_control.getBuffer().getCompoteDaily.index);
    SERIAL_WRITELN(_control.getBuffer().getCompoteDaily.dailyIndex);
    ResponseCompoteDaily response;
    response.index = _control.getBuffer().getCompoteDaily.index;
    response.dailyIndex = _control.getBuffer().getCompoteDaily.dailyIndex;
    EEPROMemory::getCompoteDaily(
        _control.getBuffer().getCompoteDaily.index,
        _control.getBuffer().getCompoteDaily.dailyIndex,
        response.value);
    _control.write(
        RESPONSE_COMPOTE_DAILY,
        reinterpret_cast<uint8_t *>(&response),
        sizeof(ResponseCompoteDaily));
}

void GrowControl::cmdSetCompoteDaily(void) {
    SERIAL_PWRITE("set compote ");
    SERIAL_WRITE(_control.getBuffer().setCompoteDaily.index);
    SERIAL_WRITELN(_control.getBuffer().setCompoteDaily.dailyIndex);
    EEPROMemory::setCompoteDaily(
        _control.getBuffer().setCompoteDaily.index,
        _control.getBuffer().setCompoteDaily.dailyIndex,
        _control.getBuffer().setCompoteDaily.value
    );
}

void GrowControl::cmdGetTimer(void) {
    SERIAL_PWRITE("get timer ");
    SERIAL_WRITELN(_control.getBuffer().getTimer.index);
    ResponseTimer response;
    response.index = _control.getBuffer().getTimer.index;
    EEPROMemory::getTimer(_control.getBuffer().getTimer.index, response.value);
    _control.write(
        RESPONSE_TIMER,
        reinterpret_cast<uint8_t *>(&response),
        sizeof(ResponseTimer)
    );
}

void GrowControl::cmdSetTimer(void) {
    SERIAL_PWRITE("set timer ");
    SERIAL_WRITELN(_control.getBuffer().setTimer.index);
    EEPROMemory::setTimer(
        _control.getBuffer().setTimer.index,
        _control.getBuffer().setTimer.value
    );
}

void GrowControl::cmdGetSchedule(void) {
    SERIAL_PWRITE("get schedule ");
    SERIAL_WRITELN(_control.getBuffer().getSchedule.index);
    ResponseSchedule response;
    response.index = _control.getBuffer().getSchedule.index;
    EEPROMemory::getSchedule(_control.getBuffer().getSchedule.index, response.value);
    _control.write(
        RESPONSE_SCHEDULE,
        reinterpret_cast<uint8_t *>(&response),
        sizeof(ResponseSchedule)
    );
}

void GrowControl::cmdSetSchedule(void) {
    SERIAL_PWRITE("set schedule ");
    SERIAL_WRITELN(_control.getBuffer().setSchedule.index);
    EEPROMemory::setSchedule(
        _control.getBuffer().setSchedule.index,
        _control.getBuffer().setSchedule.value
    );
}

void GrowControl::cmdGetPump(void) {
    SERIAL_PWRITE("get pump ");
    SERIAL_WRITELN(_control.getBuffer().getPump.index);
    ResponsePump response;
    response.index = _control.getBuffer().getPump.index;
    EEPROMemory::getPump(_control.getBuffer().getPump.index, response.value);
    _control.write(
        RESPONSE_PUMP,
        reinterpret_cast<uint8_t *>(&response),
        sizeof(ResponsePump)
    );
}

void GrowControl::cmdSetPump(void) {
    SERIAL_PWRITE("set pump ");
    SERIAL_WRITELN(_control.getBuffer().setPump.index);
    EEPROMemory::setPump(
        _control.getBuffer().setPump.index,
        _control.getBuffer().setPump.value
    );
}

void GrowControl::cmdGetMixer(void) {
    SERIAL_PWRITE("get mixer ");
    SERIAL_WRITELN(_control.getBuffer().getMixer.index);
    ResponseMixer response;
    response.index = _control.getBuffer().getMixer.index;
    EEPROMemory::getMixer(_control.getBuffer().getMixer.index, response.value);
    _control.write(
        RESPONSE_MIXER,
        reinterpret_cast<uint8_t *>(&response),
        sizeof(ResponseMixer)
    );
}

void GrowControl::cmdSetMixer(void) {
    SERIAL_PWRITE("set mixer ");
    SERIAL_WRITELN(_control.getBuffer().setMixer.index);
    EEPROMemory::setMixer(
        _control.getBuffer().setMixer.index,
        _control.getBuffer().setMixer.value
    );
}

void GrowControl::cmdGetDose(void) {
    SERIAL_PWRITE("get dose ");
    SERIAL_WRITELN(_control.getBuffer().getDose.index);
    ResponseDose response;
    response.index = _control.getBuffer().getDose.index;
    EEPROMemory::getDose(_control.getBuffer().getDose.index, response.value);
    _control.write(
        RESPONSE_DOSE,
        reinterpret_cast<uint8_t *>(&response),
        sizeof(ResponseDose)
    );
}

void GrowControl::cmdSetDose(void) {
    SERIAL_PWRITE("set dose ");
    SERIAL_WRITELN(_control.getBuffer().setDose.index);
    EEPROMemory::setDose(
        _control.getBuffer().setDose.index,
        _control.getBuffer().setDose.value
    );
}


void GrowControl::cmdGetLevelSensor(void) {
    SERIAL_PWRITE("get level sensor ");
    SERIAL_WRITELN(_control.getBuffer().getLevelSensor.index);
    ResponseLevelSensor response;
    response.index = _control.getBuffer().getLevelSensor.index;
    EEPROMemory::getLevelSensor(_control.getBuffer().getLevelSensor.index, response.value);
    _control.write(
            RESPONSE_LEVEL_SENSOR,
            reinterpret_cast<uint8_t *>(&response),
            sizeof(ResponseLevelSensor)
    );
}

void GrowControl::cmdSetLevelSensor(void) {
    SERIAL_PWRITE("set dose ");
    SERIAL_WRITELN(_control.getBuffer().setLevelSensor.index);
    EEPROMemory::setLevelSensor(
            _control.getBuffer().setLevelSensor.index,
            _control.getBuffer().setLevelSensor.value
    );
}

void GrowControl::cmdGetPin(void) {
    SERIAL_PWRITE("get pin ");
    SERIAL_WRITE(_control.getBuffer().getPin.index);
    SERIAL_PWRITE(" ");
    SERIAL_WRITELN(_control.getBuffer().getPin.index);
    ResponsePin response;
    response.type = _control.getBuffer().getPin.type;
    response.index = _control.getBuffer().getPin.index;
    switch(_control.getBuffer().setPin.type) {
        case PIN_TYPE_PUMP:
            response.value = EEPROMemory::getPinPump(_control.getBuffer().getPin.index);
            break;
        case PIN_TYPE_VALVE:
            response.value = EEPROMemory::getPinValve(_control.getBuffer().getPin.index);
            break;
        case PIN_TYPE_MIXER:
            response.value = EEPROMemory::getPinMixer(_control.getBuffer().getPin.index);
            break;
        case PIN_TYPE_DOSE:
            response.value = EEPROMemory::getPinDose(_control.getBuffer().getPin.index);
            break;
        case PIN_TYPE_DOSE_MIXER:
            response.value = EEPROMemory::getPinDoseMixer(_control.getBuffer().getPin.index);
            break;
        case PIN_TYPE_FLOW_SENSOR:
            response.value = EEPROMemory::getPinFlowSensor(_control.getBuffer().getPin.index);
            break;
        case PIN_TYPE_LEVEL_SENSOR:
            response.value = EEPROMemory::getPinLevelSensor(_control.getBuffer().getPin.index);
            break;
        case PIN_TYPE_RTC:
            break;
        case PIN_TYPE_DISPLAY:
            break;
        case PIN_TYPE_BUTTON:
            break;
        case PIN_TYPE_BEEPER:
            response.value = EEPROMemory::getPinBeeper(_control.getBuffer().getPin.index);
            break;
    }
    _control.write(
            RESPONSE_PIN,
            reinterpret_cast<uint8_t *>(&response),
            sizeof(ResponsePin)
    );
}

void GrowControl::cmdSetPin(void) {
    SERIAL_PWRITE("set pin ");
    SERIAL_WRITE(_control.getBuffer().setPin.type);
    SERIAL_PWRITE(" ");
    SERIAL_WRITE(_control.getBuffer().setPin.index);
    SERIAL_PWRITE(" ");
    SERIAL_WRITELN(_control.getBuffer().setPin.value);
    switch(_control.getBuffer().setPin.type) {
        case PIN_TYPE_PUMP:
            EEPROMemory::setPinPump(
                    _control.getBuffer().setPin.index,
                    _control.getBuffer().setPin.value
            );
            break;
        case PIN_TYPE_VALVE:
            EEPROMemory::setPinValve(
                    _control.getBuffer().setPin.index,
                    _control.getBuffer().setPin.value
            );
            break;
        case PIN_TYPE_MIXER:
            EEPROMemory::setPinMixer(
                    _control.getBuffer().setPin.index,
                    _control.getBuffer().setPin.value
            );
            break;
        case PIN_TYPE_DOSE:
            EEPROMemory::setPinDose(
                    _control.getBuffer().setPin.index,
                    _control.getBuffer().setPin.value
            );
            break;
        case PIN_TYPE_DOSE_MIXER:
            EEPROMemory::setPinDoseMixer(
                    _control.getBuffer().setPin.index,
                    _control.getBuffer().setPin.value
            );
            break;
        case PIN_TYPE_FLOW_SENSOR:
            EEPROMemory::setPinFlowSensor(
                    _control.getBuffer().setPin.index,
                    _control.getBuffer().setPin.value
            );
            break;
        case PIN_TYPE_LEVEL_SENSOR:
            EEPROMemory::setPinLevelSensor(
                    _control.getBuffer().setPin.index,
                    _control.getBuffer().setPin.value
            );
            break;
        case PIN_TYPE_RTC:
            break;
        case PIN_TYPE_DISPLAY:
            break;
        case PIN_TYPE_BUTTON:
            break;
        case PIN_TYPE_BEEPER:
            EEPROMemory::setPinBeeper(
                    _control.getBuffer().setPin.index,
                    _control.getBuffer().setPin.value
            );
            break;
    }
}

void GrowControl::cmdGetStatus(void) {
    SERIAL_PWRITELN("get status");
    _control.write(RESPONSE_STATUS, reinterpret_cast<uint8_t *>(&_status), sizeof(ResponseStatus));
}

void GrowControl::cmdResetError(void) {
    SERIAL_PWRITELN("reset error");
    if (_status.state != CMD_ERROR) {
        SERIAL_PWRITELN("no error");
        return;
    }
    _status.state = CMD_IDLE;
    _errorCode = 0;
    _stackCount = 0;
}

void GrowControl::cmdPumpIn(void) {
    SERIAL_PWRITELN("pump in ");
    SERIAL_WRITELN(_control.getBuffer().pumpIn.programId);
    Program program;
    EEPROMemory::getProgram(_control.getBuffer().pumpIn.programId, program);
    uint8_t compoteId = program.compote;
    uint8_t compoteDailyId = getCompoteDaily(program);
    _status.state = CMD_PUMP_IN;
    pumpStart(
        PUMP_IN,
        FLOW_SENSOR_IN,
        getTotalVolume(
            _control.getBuffer().pumpIn.programId,
            compoteId,
            compoteDailyId
        ),
        0
    );
}

void GrowControl::cmdIrrigate(void) {
    SERIAL_PWRITELN("irrigate ");
    SERIAL_WRITELN(_control.getBuffer().irrigate.programId);
    Program program;
    EEPROMemory::getProgram(_control.getBuffer().irrigate.programId, program);
    uint8_t compoteId = program.compote;
    uint8_t compoteDailyId = getCompoteDaily(program);
    _status.state = CMD_IRRIGATE;
    irrigateStart(
        _control.getBuffer().irrigate.programId,
        compoteId,
        compoteDailyId,
        0,
        IRRIGATE_MODE_DEFAULT,
        0
    );
}

void GrowControl::cmdWash(void) {
    SERIAL_PWRITELN("wash ");
    SERIAL_WRITELN(_control.getBuffer().wash.programId);
    Program program;
    EEPROMemory::getProgram(_control.getBuffer().wash.programId, program);
    uint8_t compoteId = program.compote;
    uint8_t compoteDailyId = getCompoteDaily(program);
    _status.state = CMD_WASH;
    irrigateStart(
        _control.getBuffer().wash.programId,
        compoteId,
        compoteDailyId,
        1,
        IRRIGATE_MODE_STOP_IF_COMPLETE,
        0
    );
}

void GrowControl::cmdMix(void) {
    SERIAL_PWRITELN("mix ");
    SERIAL_WRITELN(_control.getBuffer().mix.mixerId);
    _status.state = CMD_MIXER;
    mixStart(0, 0);
}

void GrowControl::cmdDoseMix(void) {
    SERIAL_PWRITELN("dose mix ");
    SERIAL_WRITELN(_control.getBuffer().mixDose.mixerId);
    _status.state = CMD_DOSE_MIXER;
    mixDoseStart(0);
}

void GrowControl::cmdDose(void) {
    SERIAL_PWRITE("dose ");
    SERIAL_WRITE(_control.getBuffer().dose.programId);
    SERIAL_PWRITE(" ");
    SERIAL_WRITELN(_control.getBuffer().dose.doseId);
    Program program;
    EEPROMemory::getProgram(_control.getBuffer().wash.programId, program);
    uint8_t compoteId = program.compote;
    uint8_t compoteDailyId = getCompoteDaily(program);
    _status.doseId = _control.getBuffer().dose.doseId;
    CompoteDaily compoteDaily;
    EEPROMemory::getCompoteDaily(compoteId, compoteDailyId, compoteDaily);
    uint16_t dose = compoteDaily.dose[_status.doseId];
    if (!dose) {
        SERIAL_PWRITELN("dose skip");
        return;
    }
    _status.state = CMD_DOSE;
    Dose settings;
    EEPROMemory::getDose(_status.doseId, settings);
    setStateDose(_status.doseId, 1);
    uint32_t timeout = dose;
    timeout *= settings.rate;
    timeout /= 10;
    timerStart(timeout, &GrowControl::cmdDoseStop);
}

void GrowControl::cmdDoseStop(uint8_t errorCode) {
    setStateDose(_status.doseId, 0);
}
