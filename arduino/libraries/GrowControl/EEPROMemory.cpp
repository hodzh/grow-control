#include "EEPROMemory.h"
#include "Struct.h"
#include "SerialLog.h"
#include "TimeUtil.h"

EEPROMemory::EEPROMemory() {
}

template<typename T> void EEPROM_get(int address, T& data) {
    for(int i = 0; i < sizeof(T); ++i) {
        reinterpret_cast<uint8_t*>(&data)[i] = EEPROM.read(address + i);
    }
}

template<typename T> void EEPROM_put(int address, T& data) {
    for(int i = 0; i < sizeof(T); ++i) {
        EEPROM.write(address + i, reinterpret_cast<uint8_t*>(&data)[i]);
    }
}

void getDefaultCompoteDaily(CompoteDaily& compote) {
    compote.days = 1;
    compote.schedule = 0;
    compote.volume = 100;
    compote.washVolume = 50;
    for(int i = 0; i < DOSE_COUNT; ++i) {
        compote.dose[i] = 10;
    }
    return compote;
}

Compote getDefaultCompote() {
//    Compote compote;
//    for(int i = 0; i < COMPOTE_DAILY_COUNT; ++i) {
//        compote.daily[i] = getDefaultCompoteDaily();
//    }
//    return compote;
}

Program getDefaultProgram() {
    Program program;
    for(int i = 0; i < VALVE_COUNT / 8; ++i) {
        program.valves[i] = 0;
    }
    program.valves[0] = 0xFF;
    program.compote = 0;
    program.start;
    program.start.wday = 1;
    program.start.day = 30;
    program.start.month = 10;
    program.start.year = 2020;
    return program;
}

Schedule getDefaultSchedule() {
    Schedule schedule;
    schedule.enable = 0;
    schedule.deviceId = 0;
    schedule.startTime.hour = 0;
    schedule.startTime.minute = 0;
    schedule.startTime.second = 0;
    schedule.endTime.hour = 0;
    schedule.endTime.minute = 0;
    schedule.endTime.second = 0;
    return schedule;
}

Timer getDefaultTimer() {
    Timer timer;
    timer.enable = 0;
    timer.program = 0;
    timer.weekDays = 0;
    timer.time.hour = 21;
    timer.time.minute = 30;
    timer.time.second = 0;
    return timer;
}

Pump getDefaultPump() {
    Pump pump;
    pump.minFlow = 100;
    pump.startingTime = 3000;
    pump.pwmFlow = 0;
    pump.pwm = 0;
    pump.rate = 5880; // sensorIn end liters of water output (pulses per litre);
    return pump;
}

Mixer getDefaultMixer() {
    Mixer mixer;
    mixer.seconds = 5;
    mixer.washSeconds = 5;
    mixer.pwmSensor = 0;
    mixer.pwm = 0;
    return mixer;
}

Dose getDefaultDose() {
    Dose dose;
    dose.rate = 1000UL;
    dose.seconds = 10;
    dose.pwmSensor = 0;
    dose.pwm = 0;
    return dose;
}

LevelSensor getDefaultLevelSensor() {
    LevelSensor levelSensor;
    levelSensor.enable = 0;
    levelSensor.seconds = 5;
    return levelSensor;
}

void getDefaultPinAssignment(PinAssignment& pinAssignment) {
    uint8_t pin = 2;
    for(int i = 0; i < PUMP_COUNT; ++i) {
        pinAssignment.pump[i] = pin++;
    }
    for(int i = 0; i < PUMP_COUNT; ++i) {
        pinAssignment.flowSensor[i] = pin++;
    }
    for(int i = 0; i < LEVEL_SENSOR_COUNT; ++i) {
        pinAssignment.levelSensor[i] = pin++;
    }
    for(int i = 0; i < MIXER_COUNT; ++i) {
        pinAssignment.mixer[i] = pin++;
    }
    for(int i = 0; i < DOSE_COUNT; ++i) {
        pinAssignment.dose[i] = pin++;
    }
    for(int i = 0; i < DOSE_COUNT; ++i) {
        pinAssignment.doseMixer[i] = pin++;
    }
    for(int i = 0; i < VALVE_COUNT; ++i) {
        pinAssignment.valve[i] = pin++;
    }
    for(int i = 0; i < BEEPER_COUNT; ++i) {
        pinAssignment.beeper[i] = pin++;
    }
    return pinAssignment;
}

void EEPROMemory::setup() {
    uint16_t version;
    EEPROM_get(0, version);
    SERIAL_PWRITE("version ");
    SERIAL_WRITE(version);
    SERIAL_PWRITELN("");
    const uint16_t currentVersion = EEPROM_VERSION;
    if (currentVersion != version) {
        SERIAL_PWRITE("current version ");
        SERIAL_WRITE(currentVersion);
        SERIAL_PWRITELN("");
        resetAll();
    }
    trace();
}

void EEPROMemory::getProgram(uint8_t id, struct Program& program) {
    EEPROM_get(offsetof(EEPROMLayout, settings) + offsetof(Settings, program) + id * sizeof(Program), program);
}

void EEPROMemory::setProgram(uint8_t id, struct Program& program) {
    EEPROM_put(offsetof(EEPROMLayout, settings) + offsetof(Settings, program) + id * sizeof(Program), program);
}

void EEPROMemory::setSchedule(uint8_t id, struct Schedule& value) {
    EEPROM_put(offsetof(EEPROMLayout, settings) + offsetof(Settings, schedule) + id * sizeof(Schedule), value);
}

void EEPROMemory::getSchedule(uint8_t id, struct Schedule& value) {
    EEPROM_get(offsetof(EEPROMLayout, settings) + offsetof(Settings, schedule) + id * sizeof(Schedule), value);
}

void EEPROMemory::getCompoteDaily(uint8_t id, uint8_t dailyId, struct CompoteDaily& compote) {
    EEPROM_get(offsetof(EEPROMLayout, settings) + offsetof(Settings, compote)
               + id * sizeof(Compote) + dailyId * sizeof(CompoteDaily), compote);
}

void EEPROMemory::setCompoteDaily(uint8_t id, uint8_t dailyId, struct CompoteDaily& compote) {
    int offset = offsetof(EEPROMLayout, settings) + offsetof(Settings, compote);
    offset += static_cast<int>(id) * sizeof(Compote);
    offset += static_cast<int>(dailyId) * sizeof(CompoteDaily);
//    SERIAL_PWRITE("offset ");
//    SERIAL_WRITELN(offset);
    EEPROM_put(offset, compote);
}

void EEPROMemory::getCompote(uint8_t id, struct Compote& compote) {
    EEPROM_get(offsetof(EEPROMLayout, settings) + offsetof(Settings, compote) + id * sizeof(Compote), compote);
}

void EEPROMemory::setCompote(uint8_t id, struct Compote& compote) {
    EEPROM_put(offsetof(EEPROMLayout, settings) + offsetof(Settings, compote) + id * sizeof(Compote), compote);
}

void EEPROMemory::setTimer(uint8_t id, struct Timer& value) {
    EEPROM_put(offsetof(EEPROMLayout, settings) + offsetof(Settings, timer) + id * sizeof(Timer), value);
}

void EEPROMemory::getTimer(uint8_t id, struct Timer& value) {
    EEPROM_get(offsetof(EEPROMLayout, settings) + offsetof(Settings, timer) + id * sizeof(Timer), value);
}

void EEPROMemory::setPump(uint8_t id, struct Pump& value) {
    EEPROM_put(offsetof(EEPROMLayout, settings) + offsetof(Settings, pump) + id * sizeof(Pump), value);
}

void EEPROMemory::getPump(uint8_t id, struct Pump& value) {
    EEPROM_get(offsetof(EEPROMLayout, settings) + offsetof(Settings, pump) + id * sizeof(Pump), value);
}

void EEPROMemory::setMixer(uint8_t id, struct Mixer& value) {
    EEPROM_put(offsetof(EEPROMLayout, settings) + offsetof(Settings, mixer) + id * sizeof(Mixer), value);
}

void EEPROMemory::getMixer(uint8_t id, struct Mixer& value) {
    EEPROM_get(offsetof(EEPROMLayout, settings) + offsetof(Settings, mixer) + id * sizeof(Mixer), value);
}

void EEPROMemory::setDose(uint8_t id, struct Dose& value) {
    EEPROM_put(offsetof(EEPROMLayout, settings) + offsetof(Settings, dose) + id * sizeof(Dose), value);
}

void EEPROMemory::getDose(uint8_t id, struct Dose& value) {
    EEPROM_get(offsetof(EEPROMLayout, settings) + offsetof(Settings, dose) + id * sizeof(Dose), value);
}

void EEPROMemory::setLevelSensor(uint8_t id, struct LevelSensor& value) {
    EEPROM_put(offsetof(EEPROMLayout, settings) + offsetof(Settings, levelSensor) + id * sizeof(LevelSensor), value);
}

void EEPROMemory::getLevelSensor(uint8_t id, struct LevelSensor& value) {
    EEPROM_get(offsetof(EEPROMLayout, settings) + offsetof(Settings, levelSensor) + id * sizeof(LevelSensor), value);
}

uint8_t EEPROMemory::getPinPump(uint8_t id) {
    return EEPROM.read(offsetof(EEPROMLayout, pinAssignment) + offsetof(PinAssignment, pump) + id);
}

void EEPROMemory::setPinPump(uint8_t id, uint8_t pin) {
    EEPROM.write(offsetof(EEPROMLayout, pinAssignment) + offsetof(PinAssignment, pump) + id, pin);
}

uint8_t EEPROMemory::getPinFlowSensor(uint8_t id) {
    return EEPROM.read(offsetof(EEPROMLayout, pinAssignment) + offsetof(PinAssignment, flowSensor) + id);
}

void EEPROMemory::setPinFlowSensor(uint8_t id, uint8_t pin) {
    EEPROM.write(offsetof(EEPROMLayout, pinAssignment) + offsetof(PinAssignment, flowSensor) + id, pin);
}

uint8_t EEPROMemory::getPinLevelSensor(uint8_t id) {
    return EEPROM.read(offsetof(EEPROMLayout, pinAssignment) + offsetof(PinAssignment, levelSensor) + id);
}

void EEPROMemory::setPinLevelSensor(uint8_t id, uint8_t pin) {
    EEPROM.write(offsetof(EEPROMLayout, pinAssignment) + offsetof(PinAssignment, levelSensor) + id, pin);
}

uint8_t EEPROMemory::getPinMixer(uint8_t id) {
    return EEPROM.read(offsetof(EEPROMLayout, pinAssignment) + offsetof(PinAssignment, mixer) + id);
}

void EEPROMemory::setPinMixer(uint8_t id, uint8_t pin) {
    EEPROM.write(offsetof(EEPROMLayout, pinAssignment) + offsetof(PinAssignment, mixer) + id, pin);
}

uint8_t EEPROMemory::getPinDose(uint8_t id) {
    return EEPROM.read(offsetof(EEPROMLayout, pinAssignment) + offsetof(PinAssignment, dose) + id);
}

void EEPROMemory::setPinDose(uint8_t id, uint8_t pin) {
    EEPROM.write(offsetof(EEPROMLayout, pinAssignment) + offsetof(PinAssignment, dose) + id, pin);
}

uint8_t EEPROMemory::getPinDoseMixer(uint8_t id) {
    return EEPROM.read(offsetof(EEPROMLayout, pinAssignment) + offsetof(PinAssignment, doseMixer) + id);
}

void EEPROMemory::setPinDoseMixer(uint8_t id, uint8_t pin) {
    EEPROM.write(offsetof(EEPROMLayout, pinAssignment) + offsetof(PinAssignment, doseMixer) + id, pin);
}

uint8_t EEPROMemory::getPinValve(uint8_t id) {
    return EEPROM.read(offsetof(EEPROMLayout, pinAssignment) + offsetof(PinAssignment, valve) + id);
}

void EEPROMemory::setPinValve(uint8_t id, uint8_t pin) {
    EEPROM_put(offsetof(EEPROMLayout, pinAssignment) + offsetof(PinAssignment, valve) + id, pin);
}

uint8_t EEPROMemory::getPinBeeper(uint8_t id) {
    return EEPROM.read(offsetof(EEPROMLayout, pinAssignment) + offsetof(PinAssignment, beeper) + id);
}

void EEPROMemory::setPinBeeper(uint8_t id, uint8_t pin) {
    EEPROM_put(offsetof(EEPROMLayout, pinAssignment) + offsetof(PinAssignment, beeper) + id, pin);
}

void EEPROMemory::resetCompote() {
//    Compote compote = getDefaultCompote();
//    for (uint8_t i = 0; i < COMPOTE_COUNT; i++) {
//        setCompote(i, compote);
//    }
    for (uint8_t i = 0; i < COMPOTE_COUNT; i++) {
        for (uint8_t j = 0; j < COMPOTE_DAILY_COUNT; j++) {
            CompoteDaily compote;
            getDefaultCompoteDaily(compote);
            setCompoteDaily(i, j, compote);
        }
    }
}

void EEPROMemory::resetProgram() {
    Program program = getDefaultProgram();
    for (uint8_t i = 0; i < PROGRAM_COUNT; i++) {
        setProgram(i, program);
    }
}

void EEPROMemory::resetSchedule() {
    Schedule schedule = getDefaultSchedule();
    for (uint8_t i = 0; i < SCHEDULE_COUNT; ++i) {
        setSchedule(i, schedule);
    }
}

void EEPROMemory::resetTimer() {
    Timer timer = getDefaultTimer();
    for (uint8_t i = 0; i < TIMER_COUNT; ++i) {
        setTimer(i, timer);
    }
}

void EEPROMemory::resetPump() {
    Pump value = getDefaultPump();
    for (uint8_t i = 0; i < PUMP_COUNT; ++i) {
        setPump(i, value);
    }
}

void EEPROMemory::resetMixer() {
    Mixer value = getDefaultMixer();
    for (uint8_t i = 0; i < MIXER_COUNT; ++i) {
        setMixer(i, value);
    }
}

void EEPROMemory::resetDose() {
    Dose value = getDefaultDose();
    for (uint8_t i = 0; i < DOSE_COUNT; ++i) {
        setDose(i, value);
    }
}

void EEPROMemory::resetLevelSensor() {
    LevelSensor value = getDefaultLevelSensor();
    for (uint8_t i = 0; i < LEVEL_SENSOR_COUNT; ++i) {
        setLevelSensor(i, value);
    }
}

void EEPROMemory::resetPinAssignment() {
    PinAssignment value;
    getDefaultPinAssignment(value);
    EEPROM_put(offsetof(EEPROMLayout, pinAssignment), value);
}

void EEPROMemory::resetAll() {
    resetCompote();
    resetProgram();
    resetSchedule();
    resetTimer();
    resetPump();
    resetMixer();
    resetDose();
    resetLevelSensor();
    resetPinAssignment();
    const uint16_t version = EEPROM_VERSION;
    EEPROM.put(0, version);
}

void EEPROMemory::trace() {
    traceCompote();
    traceProgram();
    traceSchedule();
    traceTimer();
    tracePump();
    traceMixer();
    traceDose();
    traceLevelSensor();
    tracePinAssignment();
}

void EEPROMemory::traceCompote() {
    for (uint8_t i = 0; i < COMPOTE_COUNT; i++) {
        SERIAL_PWRITE("compote ");
        SERIAL_WRITELN(i);
        traceCompoteDaily(i);
    }
}

void EEPROMemory::traceCompoteDaily(uint8_t id) {
    CompoteDaily compote;
    for (uint8_t i = 0; i < COMPOTE_DAILY_COUNT; i++) {
        getCompoteDaily(id, i, compote);
        SERIAL_PWRITE("daily ");
        SERIAL_WRITELN(i);
        SERIAL_PWRITE(" days ");
        SERIAL_WRITELN(compote.days);
        SERIAL_PWRITE(" schedule ");
        SERIAL_WRITELN(compote.schedule);
        SERIAL_PWRITE(" volume ");
        SERIAL_WRITELN(compote.volume);
        SERIAL_PWRITE(" wash ");
        SERIAL_WRITELN(compote.washVolume);
        for (uint8_t j = 0; j < DOSE_COUNT; j++) {
            SERIAL_PWRITE("  dose ");
            SERIAL_WRITELN(compote.dose[j]);
        }
    }
}

void EEPROMemory::traceProgram() {
    Program program;
    for (uint8_t i = 0; i < PROGRAM_COUNT; i++) {
        getProgram(i, program);
        SERIAL_PWRITE("program ");
        SERIAL_WRITELN(i);
        SERIAL_PWRITE(" compote ");
        SERIAL_WRITELN(program.compote);
        SERIAL_PWRITE(" valves ");
        for (uint8_t j = 0; j < VALVE_COUNT; j++) {
            if (program.valves[j / 8] & ((uint8_t) 1 << (j % 8))) {
                SERIAL_WRITE(j);
                SERIAL_PWRITE(" ");
            }
        }
        SERIAL_PWRITELN(" ");
    }
}

void EEPROMemory::traceSchedule() {
    Schedule schedule;
    for (uint8_t i = 0; i < SCHEDULE_COUNT; ++i) {
        getSchedule(i, schedule);
        SERIAL_PWRITE("schedule ");
        SERIAL_WRITELN(i);
    }
}

void EEPROMemory::traceTimer() {
    Timer timer;
    for (uint8_t i = 0; i < TIMER_COUNT; ++i) {
        getTimer(i, timer);
        SERIAL_PWRITE("timer ");
        SERIAL_WRITELN(i);
        SERIAL_PWRITE(" enable ");
        SERIAL_WRITELN(timer.enable);
        SERIAL_PWRITE(" hour ");
        SERIAL_WRITELN(timer.time.hour);
        SERIAL_PWRITE(" minute ");
        SERIAL_WRITELN(timer.time.minute);
        SERIAL_PWRITE(" seconds ");
        SERIAL_WRITELN(timer.time.second);
    }
}

void EEPROMemory::tracePump() {
    Pump value;
    for (uint8_t i = 0; i < PUMP_COUNT; ++i) {
        getPump(i, value);
        SERIAL_PWRITE("pump ");
        SERIAL_WRITELN(i);
        SERIAL_PWRITE(" min flow ");
        SERIAL_WRITELN(value.minFlow);
        SERIAL_PWRITE(" startingTime ");
        SERIAL_WRITELN(value.startingTime);
        SERIAL_PWRITE(" pwmFlow ");
        SERIAL_WRITELN(value.pwmFlow);
        SERIAL_PWRITE(" pwm ");
        SERIAL_WRITELN(value.pwm);
        SERIAL_PWRITE(" rate ");
        SERIAL_WRITELN(value.rate);
    }
}

void EEPROMemory::traceMixer() {
    Mixer value;
    for (uint8_t i = 0; i < MIXER_COUNT; ++i) {
        getMixer(i, value);
        SERIAL_PWRITE("mixer");
        SERIAL_WRITELN(i);
        SERIAL_PWRITE(" seconds ");
        SERIAL_WRITELN(value.seconds);
    }
}

void EEPROMemory::traceDose() {
    Dose value;
    for (uint8_t i = 0; i < DOSE_COUNT; ++i) {
        getDose(i, value);
        SERIAL_PWRITE("dose ");
        SERIAL_WRITELN(i);
        SERIAL_PWRITE(" rate ");
        SERIAL_WRITELN(value.rate);
        SERIAL_PWRITE(" seconds ");
        SERIAL_WRITELN(value.seconds);
    }
}

void EEPROMemory::traceLevelSensor() {
    LevelSensor value;
    for (uint8_t i = 0; i < LEVEL_SENSOR_COUNT; ++i) {
        getLevelSensor(i, value);
        SERIAL_PWRITE("level sensor ");
        SERIAL_WRITELN(i);
        SERIAL_PWRITE(" enable ");
        SERIAL_WRITELN(value.enable);
        SERIAL_PWRITE(" seconds ");
        SERIAL_WRITELN(value.seconds);
    }
}

void EEPROMemory::tracePinAssignment() {
    SERIAL_PWRITELN("pump pins");
    for (uint8_t i = 0; i < PUMP_COUNT; ++i) {
        uint8_t pin = getPinPump(i);
        SERIAL_PWRITE(" ");
        SERIAL_WRITELN(pin);
    }
    SERIAL_PWRITELN("flow sensor pins");
    for (uint8_t i = 0; i < PUMP_COUNT; ++i) {
        uint8_t pin = getPinFlowSensor(i);
        SERIAL_PWRITE(" ");
        SERIAL_WRITELN(pin);
    }
    SERIAL_PWRITELN("level sensor pins");
    for (uint8_t i = 0; i < LEVEL_SENSOR_COUNT; ++i) {
        uint8_t pin = getPinLevelSensor(i);
        SERIAL_PWRITE(" ");
        SERIAL_WRITELN(pin);
    }
    SERIAL_PWRITELN("mixer pins");
    for (uint8_t i = 0; i < MIXER_COUNT; ++i) {
        uint8_t pin = getPinMixer(i);
        SERIAL_PWRITE(" ");
        SERIAL_WRITELN(pin);
    }
    SERIAL_PWRITELN("dose pins");
    for (uint8_t i = 0; i < DOSE_COUNT; ++i) {
        uint8_t pin = getPinDose(i);
        SERIAL_PWRITE("  ");
        SERIAL_WRITELN(pin);
    }
    SERIAL_PWRITELN("dose mixer pins");
    for (uint8_t i = 0; i < DOSE_COUNT; ++i) {
        uint8_t pin = getPinDoseMixer(i);
        SERIAL_PWRITE("  ");
        SERIAL_WRITELN(pin);
    }
    SERIAL_PWRITELN("valve pins");
    for (uint8_t i = 0; i < VALVE_COUNT; ++i) {
        uint8_t pin = getPinValve(i);
        SERIAL_PWRITE("  ");
        SERIAL_WRITELN(pin);
    }
    SERIAL_PWRITELN("beeper pins");
    for (uint8_t i = 0; i < BEEPER_COUNT; ++i) {
        uint8_t pin = getPinBeeper(i);
        SERIAL_PWRITE("  ");
        SERIAL_WRITELN(pin);
    }
}

bool getCompoteDaily(struct Program& program, struct CompoteDaily& compote) {
    tmElements_t tm;
    tm.Second = 0;
    tm.Minute = 0;
    tm.Hour = 0;
    tm.Wday = program.start.wday;
    tm.Day = program.start.day;
    tm.Month = program.start.month;
    tm.Year = program.start.year;
    int elapsed = static_cast<int>(elapsedDays(now())) -
                  static_cast<int>(elapsedDays(makeTime(tm)));
    if (elapsed < 0) {
        return false;
    }
    for (uint8_t i = 0; i < COMPOTE_DAILY_COUNT; ++i) {
        EEPROMemory::getCompoteDaily(program.compote, i, compote);
        if (compote.days == 0) {
            break;
        }
        if (elapsed <= compote.days) {
            break;
        }
        elapsed -= compote.days;
    }
    return true;
}
