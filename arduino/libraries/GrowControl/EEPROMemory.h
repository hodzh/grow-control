#pragma once

#include <Arduino.h>
#include <EEPROM.h>
#include "Struct.h"

#define EEPROM_VERSION 2

struct EEPROMLayout {
    uint16_t version;
    Settings settings;
    PinAssignment pinAssignment;
};

class EEPROMemory {
public:
	EEPROMemory();

	static void setup();

    static void getProgram(uint8_t id, struct Program& program);
    static void setProgram(uint8_t id, struct Program& program);
    static void getCompoteDaily(uint8_t id, uint8_t dailyId, struct CompoteDaily& compote);
    static void setCompoteDaily(uint8_t id, uint8_t dailyId, struct CompoteDaily& compote);
    static void getCompote(uint8_t id, struct Compote& compote);
    static void setCompote(uint8_t id, struct Compote& compote);
    static void setSchedule(uint8_t id, struct Schedule& value);
    static void getSchedule(uint8_t id, struct Schedule& value);
    static void setTimer(uint8_t id, struct Timer& value);
    static void getTimer(uint8_t id, struct Timer& value);
    static void setPump(uint8_t id, struct Pump& value);
    static void getPump(uint8_t id, struct Pump& value);
    static void setMixer(uint8_t id, struct Mixer& value);
    static void getMixer(uint8_t id, struct Mixer& value);
    static void setDose(uint8_t id, struct Dose& value);
    static void getDose(uint8_t id, struct Dose& value);
	static void setLevelSensor(uint8_t id, struct LevelSensor& value);
	static void getLevelSensor(uint8_t id, struct LevelSensor& value);

    static uint8_t getPinPump(uint8_t id);
    static void setPinPump(uint8_t id, uint8_t pin);
    static uint8_t getPinFlowSensor(uint8_t id);
    static void setPinFlowSensor(uint8_t id, uint8_t pin);
    static uint8_t getPinLevelSensor(uint8_t id);
    static void setPinLevelSensor(uint8_t id, uint8_t pin);
    static uint8_t getPinMixer(uint8_t id);
    static void setPinMixer(uint8_t id, uint8_t pin);
    static uint8_t getPinDose(uint8_t id);
    static void setPinDose(uint8_t id, uint8_t pin);
    static uint8_t getPinDoseMixer(uint8_t id);
    static void setPinDoseMixer(uint8_t id, uint8_t pin);
    static uint8_t getPinValve(uint8_t id);
    static void setPinValve(uint8_t id, uint8_t pin);
	static uint8_t getPinBeeper(uint8_t id);
	static void setPinBeeper(uint8_t id, uint8_t pin);

    static void resetAll();
    static void resetCompote();
    static void resetProgram();
    static void resetSchedule();
    static void resetTimer();
    static void resetPump();
    static void resetMixer();
    static void resetDose();
    static void resetLevelSensor();
    static void resetPinAssignment();

    static void trace();
    static void traceCompote();
    static void traceCompoteDaily(uint8_t id);
    static void traceProgram();
    static void traceSchedule();
    static void traceTimer();
    static void tracePump();
    static void traceMixer();
    static void traceDose();
    static void traceLevelSensor();
    static void tracePinAssignment();
};
