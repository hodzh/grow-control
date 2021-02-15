#include "GrowControl.h"
#include "GrowControlMenu.h"
#include "EEPROMemory.h"
#include "Menu.h"
#include "Display.h"
#include "SerialLog.h"
#include "TimeUtil.h"
#include "DS3232RTC.h"

extern Display display;
extern GrowControl growControl;

GrowControlMenu::GrowControlMenu() {
}
// ============== MENU ========================================

const char MSG_INFO[] PROGMEM = "INFO";
const char MSG_SETTINGS[] PROGMEM = "SETTINGS";
const char MSG_CONTROL[] PROGMEM = "CONTROL";
const char MSG_TEST[] PROGMEM = "TEST";
const char MSG_COMPOTE[] PROGMEM = "COMPOTE";
const char MSG_PROGRAM[] PROGMEM = "PROGRAM";
const char MSG_CALIBRATE[] PROGMEM = "CALIBRATE";
const char MSG_SCHEDULE[] PROGMEM = "SCHEDULE";
const char MSG_TIMER[] PROGMEM = "TIMER";
const char MSG_VOLUME[] PROGMEM = "VOLUME";
const char MSG_WASH_VOL[] PROGMEM = "WASH VOL";
const char MSG_VALVES[] PROGMEM = "VALVES";
const char MSG_MIN_FLOW[] PROGMEM = "MIN FLOW";
const char MSG_P_START[] PROGMEM = "P. START";
const char MSG_RATE[] PROGMEM = "RATE";
const char MSG_ENABLE[] PROGMEM = "ENABLE";
const char MSG_DEVICE[] PROGMEM = "DEVICE";
const char MSG_FERTIGATE[] PROGMEM = "FERTIGATE";
const char MSG_IRRIGATE[] PROGMEM = "IRRIGATE";
const char MSG_WASH[] PROGMEM = "WASH";
const char MSG_WASH_COMPOTE[] PROGMEM = "WASH COMPOTE";
const char MSG_MIX[] PROGMEM = "MIX";
const char MSG_MIX_DOSE[] PROGMEM = "MIX DOSE";
const char MSG_DOSE[] PROGMEM = "DOSE";
const char MSG_PUMP[] PROGMEM = "PUMP";
const char MSG_RESET[] PROGMEM = "RESET";
const char MSG_PUMP_IN[] PROGMEM = "PUMP IN";
const char MSG_PUMP_OUT[] PROGMEM = "PUMP OUT";
const char MSG_YEAR[] PROGMEM = "YEAR";
const char MSG_MONTH[] PROGMEM = "MONTH";
const char MSG_DAY[] PROGMEM = "DAY";
const char MSG_HOUR[] PROGMEM = "HOUR";
const char MSG_MINUTE[] PROGMEM = "MINUTE";
const char MSG_SECONDS[] PROGMEM = "SECONDS";
const char MSG_TIME[] PROGMEM = "TIME";
const char MSG_SENSOR[] PROGMEM = "SENSOR";
const char MSG_PWM[] PROGMEM = "PWM";
const char MSG_PWM_SENSOR[] PROGMEM = "PWM SENS.";
const char MSG_DOSE_MIXER[] PROGMEM = "DOSE MIXER";
const char MSG_START[] PROGMEM = "START";
const char MSG_END[] PROGMEM = "END";
const char MSG_ALL[] PROGMEM = "ALL";

const uint16_t growControlMenu[] PROGMEM = {
        IMENU_ROOT(0),
        IMENU_COMMAND(0, MSG_INFO, GrowControlMenu::cmdInfo),
        IMENU_MENU(0, MSG_CONTROL),
        IMENU_COMMAND(TMENU_LIST, MSG_FERTIGATE, GrowControlMenu::cmdFertigate), PROGRAM_COUNT,
        IMENU_COMMAND(TMENU_LIST, MSG_IRRIGATE, GrowControlMenu::cmdIrrigate), PROGRAM_COUNT,
        IMENU_COMMAND(TMENU_LIST, MSG_WASH, GrowControlMenu::cmdWash), PROGRAM_COUNT,
        IMENU_COMMAND(TMENU_LIST, MSG_COMPOTE, GrowControlMenu::cmdCompote), PROGRAM_COUNT,
        IMENU_COMMAND(TMENU_LIST, MSG_WASH_COMPOTE, GrowControlMenu::cmdWashCompote), PROGRAM_COUNT,
        IMENU_COMMAND(0, MSG_MIX, GrowControlMenu::cmdMixCompote),
        IMENU_COMMAND(TMENU_LIST, MSG_MIX_DOSE, GrowControlMenu::cmdMixDose), DOSE_COUNT,
        IMENU_MENU(TMENU_LIST | TMENU_LAST, MSG_DOSE), PROGRAM_COUNT,
        IMENU_COMMAND(TMENU_LIST | TMENU_LAST, MSG_PROGRAM, GrowControlMenu::cmdDose), DOSE_COUNT,
        IMENU_EDITOR(0, MSG_SETTINGS, GrowControlMenu::editSettings),
        IMENU_STRUCT(TMENU_LIST, MSG_COMPOTE, offsetof(EEPROMLayout, settings) + offsetof(Settings, compote), sizeof(Compote)), COMPOTE_COUNT,
        IMENU_UINT32(0, MSG_VOLUME, offsetof(CompoteDaily, volume), 0xffff),
        IMENU_UINT32(0, MSG_WASH_VOL, offsetof(CompoteDaily, washVolume), 0xffff),
        IMENU_UINT16(TMENU_LIST | TMENU_LAST, MSG_DOSE, offsetof(CompoteDaily, dose), 0xffff), DOSE_COUNT,
        IMENU_STRUCT(TMENU_LIST, MSG_PROGRAM, offsetof(EEPROMLayout, settings) + offsetof(Settings, program), sizeof(Program)), PROGRAM_COUNT,
        IMENU_UINT1(TMENU_LIST, MSG_VALVES, 0, 0), VALVE_COUNT,
        IMENU_UINT8(TMENU_LAST, MSG_COMPOTE, offsetof(Program, compote), COMPOTE_COUNT),
        IMENU_EDITOR(0, MSG_CALIBRATE, GrowControlMenu::editCalibrate),
        IMENU_STRUCT(TMENU_LIST, MSG_PUMP, offsetof(Settings, pump), sizeof(Pump)), PUMP_COUNT,
        IMENU_UINT16(0, MSG_SENSOR, offsetof(Pump, rate), 0xffff),
        IMENU_UINT16(0, MSG_MIN_FLOW, offsetof(Pump, minFlow), 0xffff),
        IMENU_UINT16(0, MSG_P_START, offsetof(Pump, startingTime), 0xffff),
        IMENU_UINT16(0, MSG_PWM_SENSOR, offsetof(Pump, pwmFlow), 0xffff),
        IMENU_UINT8(TMENU_LAST, MSG_PWM, offsetof(Pump, pwm), 0xffff),
        IMENU_STRUCT(TMENU_LIST, MSG_MIX, offsetof(Settings, mixer), sizeof(Mixer)), MIXER_COUNT,
        IMENU_UINT16(0, MSG_SECONDS, offsetof(Mixer, seconds), 0xffff),
        IMENU_UINT16(0, MSG_PWM_SENSOR, offsetof(Mixer, pwmSensor), 0xffff),
        IMENU_UINT16(TMENU_LAST, MSG_PWM, offsetof(Mixer, pwm), 0xffff),
        IMENU_STRUCT(TMENU_LIST, MSG_DOSE, offsetof(Settings, dose), sizeof(Dose)), DOSE_COUNT,
        IMENU_UINT16( TMENU_LAST, MSG_RATE, offsetof(Dose, rate), 0xffff),
//        IMENU_STRUCT(TMENU_LAST | TMENU_LIST, MSG_DOSE_MIXER, offsetof(Settings, doseMixer), sizeof(Mixer)), DOSE_COUNT,
//        IMENU_UINT16(0, MSG_SECONDS, offsetof(Mixer, seconds), 0xffff),
//        IMENU_UINT16(0, MSG_PWM_SENSOR, offsetof(Mixer, pwmSensor), 0xffff),
//        IMENU_UINT16(TMENU_LAST, MSG_PWM, offsetof(Mixer, pwm), 0xffff),
        IMENU_STRUCT(TMENU_LIST, MSG_SCHEDULE, offsetof(EEPROMLayout, settings) + offsetof(Settings, schedule), sizeof(Schedule)), SCHEDULE_COUNT,
        IMENU_UINT1(0, MSG_ENABLE, offsetof(Schedule, enable), 0),
        IMENU_UINT8(0, MSG_DEVICE, offsetof(Schedule, deviceId), DEV_COUNT),
        IMENU_MENU(0, MSG_START),
        IMENU_UINT8(0, MSG_HOUR, offsetof(Schedule, startTime) + offsetof(DayTime, hour), 24),
        IMENU_UINT8(0, MSG_MINUTE, offsetof(Schedule, startTime) + offsetof(DayTime, minute), 60),
        IMENU_UINT8(TMENU_LAST, MSG_SECONDS, offsetof(Schedule, startTime) + offsetof(DayTime, second), 60),
        IMENU_MENU(TMENU_LAST, MSG_END),
        IMENU_UINT8(0, MSG_HOUR, offsetof(Schedule, endTime) + offsetof(DayTime, hour), 24),
        IMENU_UINT8(0, MSG_MINUTE, offsetof(Schedule, endTime) + offsetof(DayTime, minute), 60),
        IMENU_UINT8(TMENU_LAST, MSG_SECONDS, offsetof(Schedule, endTime) + offsetof(DayTime, second), 60),
        IMENU_STRUCT(TMENU_LIST, MSG_TIMER, offsetof(EEPROMLayout, settings) + offsetof(Settings, timer), sizeof(Timer)), TIMER_COUNT,
        IMENU_UINT1(0, MSG_ENABLE, offsetof(Timer, enable), 0),
        IMENU_UINT8(0, MSG_PROGRAM, offsetof(Timer, program), PROGRAM_COUNT),
        IMENU_UINT8(0, MSG_HOUR, offsetof(Timer, time) + offsetof(DayTime, hour), 24),
        IMENU_UINT8(0, MSG_MINUTE, offsetof(Timer, time) + offsetof(DayTime, minute), 60),
        IMENU_UINT8(TMENU_LAST, MSG_SECONDS, offsetof(Timer, time) + offsetof(DayTime, second), 60),
        IMENU_EDITOR(TMENU_LAST, MSG_TIME, GrowControlMenu::editTime),
        IMENU_UINT8(0, MSG_YEAR, offsetof(tmElements_t, Year), 0xffff),
        IMENU_UINT8(0, MSG_MONTH, offsetof(tmElements_t, Month), 12),
        IMENU_UINT8(0, MSG_DAY, offsetof(tmElements_t, Day), 31),
        IMENU_UINT8(0, MSG_HOUR, offsetof(tmElements_t, Hour), 24),
        IMENU_UINT8(0, MSG_MINUTE, offsetof(tmElements_t, Minute), 60),
        IMENU_UINT8(TMENU_LAST, MSG_SECONDS, offsetof(tmElements_t, Second), 60),
        IMENU_MENU(0, MSG_CALIBRATE),
        IMENU_COMMAND(0, MSG_PUMP_IN, GrowControlMenu::cmdCalibratePumpIn),
        IMENU_COMMAND(0, MSG_PUMP_OUT, GrowControlMenu::cmdCalibratePumpOut),
        IMENU_COMMAND(TMENU_LAST | TMENU_LIST, MSG_DOSE, GrowControlMenu::cmdCalibrateDose), DOSE_COUNT,
        IMENU_MENU(0, MSG_RESET),
        IMENU_COMMAND(0, MSG_COMPOTE, GrowControlMenu::cmdResetCompote),
        IMENU_COMMAND(0, MSG_PROGRAM, GrowControlMenu::cmdResetProgram),
        IMENU_COMMAND(0, MSG_CALIBRATE, GrowControlMenu::cmdResetCalibrate),
        IMENU_COMMAND(0, MSG_SCHEDULE, GrowControlMenu::cmdResetSchedule),
        IMENU_COMMAND(0, MSG_TIMER, GrowControlMenu::cmdResetTimer),
        IMENU_COMMAND(TMENU_LAST, MSG_ALL, GrowControlMenu::cmdResetAll),
        IMENU_EDITOR(TMENU_LAST, MSG_TEST, GrowControlMenu::testValves),
        IMENU_UINT1(TMENU_LIST, MSG_PUMP, 0, 0), PUMP_COUNT,
        IMENU_UINT1(TMENU_LIST, MSG_VALVES, 0, 0), VALVE_COUNT,
        IMENU_UINT1(TMENU_LIST, MSG_MIX, 0, 0), MIXER_COUNT,
        IMENU_UINT1(TMENU_LIST, MSG_DOSE, 0, 0), DOSE_COUNT,
        IMENU_UINT1(TMENU_LIST | TMENU_LAST, MSG_MIX_DOSE, 0, 0), DOSE_COUNT,
};

void GrowControlMenu::setup() {
    menu.setup((uint8_t*)growControlMenu);
}

void GrowControlMenu::loop() {
    menu.loop();
}

void GrowControlMenu::cmdInfo(){
    SERIAL_PWRITELN("INFO");
}
void GrowControlMenu::cmdIrrigate(){;
    SERIAL_PWRITE("irrigate ");
    SERIAL_WRITELN(growControl._menu.menu._index);
//    growControl.irrigate(growControl._menu.menu._index);
}
void GrowControlMenu::cmdWash(){
    SERIAL_PWRITE("wash ");
    SERIAL_WRITELN(growControl._menu.menu._index);
//    growControl.wash(growControl._menu.menu._index);
}
void GrowControlMenu::cmdCompote(){
    SERIAL_PWRITE("compote ");
    SERIAL_WRITELN(growControl._menu.menu._index);
//    growControl.compote(growControl._menu.menu._index);
}
void GrowControlMenu::cmdWashCompote(){
    SERIAL_PWRITE("wash compote ");
    SERIAL_WRITELN(growControl._menu.menu._index);
//    growControl.washCompote(growControl._menu.menu._index);
}
void GrowControlMenu::cmdMixCompote(){
    SERIAL_PWRITELN("mix compote");
//    growControl.mixCompote();
}
void GrowControlMenu::cmdMixDose(){
    SERIAL_PWRITELN("mix dose");
//    growControl.mixDose();
}
void GrowControlMenu::cmdDose(){
    SERIAL_PWRITE("dose ");
    SERIAL_WRITE(growControl._menu.menu._index);
    SERIAL_PWRITE(", ");
    SERIAL_WRITELN(growControl._menu.menu._index);
//    growControl.makeDose(growControl._menu.menu._list[0], growControl._menu.menu._index);
}
void GrowControlMenu::cmdFertigate(){
    SERIAL_PWRITE("fertigate ");
    SERIAL_WRITELN(growControl._menu.menu._index);
//    growControl.fertigate(growControl._menu.menu._index);
}

void GrowControlMenu::cmdCalibratePumpIn(){
}
void GrowControlMenu::cmdCalibratePumpOut(){
}
void GrowControlMenu::cmdCalibrateDose(){
}

void GrowControlMenu::cmdResetCompote(){
    EEPROMemory::resetCompote();
}
void GrowControlMenu::cmdResetProgram(){
    EEPROMemory::resetProgram();
}
void GrowControlMenu::cmdResetCalibrate(){
//    EEPROMemory::resetCalibrate();
}
void GrowControlMenu::cmdResetSchedule(){
    EEPROMemory::resetSchedule();
}
void GrowControlMenu::cmdResetTimer(){
    EEPROMemory::resetTimer();
}
void GrowControlMenu::cmdResetAll(){
    EEPROMemory::resetAll();
}
void GrowControlMenu::testValves(uint8_t* data, uint8_t save, uint16_t offset, uint8_t size) {
    if (save) {
        growControl.setStateValve(offset,
                                         (uint8_t)(*data) ? 0 : 1);
    } else {
        *data = growControl.getStateValve(offset);
    }
}
void GrowControlMenu::testPump(uint8_t* data, uint8_t save, uint16_t offset, uint8_t size) {
    if (save) {
        growControl.setStatePump(offset,
                                        (uint8_t)(*data) ? 0 : 1);
    } else {
        *data = growControl.getStatePump(offset);
    }
}
void GrowControlMenu::editSettings(uint8_t* data, uint8_t save, uint16_t offset, uint8_t size) {
    editEEPROM(data, save,
               0,
               offset,
               size);
}
void GrowControlMenu::editCalibrate(uint8_t* data, uint8_t save, uint16_t offset, uint8_t size){
//    struct Settings s;
//    growControl.getSettings(&s);
//    editRAM(data, save,
//            (uint8_t*)&s,
//            offset,
//            size);
//    if (save) {
//        growControl.setSettings(&s);
//    }
}
void GrowControlMenu::editRAM(uint8_t* data, uint8_t save, uint8_t* dest, uint16_t offset, uint8_t size) {
    if (size == 0) {
        dest += (offset >> 3);
        uint8_t mask = (uint8_t)(1 << (offset & 7));
        uint8_t val = *dest;
        if (save) {
            if (data[0] & 1) {
                val |= mask;
            } else {
                val &= ~mask;
            }
            *dest = val;
        } else {
            *data = val & mask ? 1 : 0;
        }
        return;
    }
    dest += offset;
    for (uint8_t i = 0; i < size; ++i, ++dest, ++data) {
        if (save) {
            *dest = *data;
        } else {
            *data = *dest;
        }
    }
}
void GrowControlMenu::editEEPROM(uint8_t* data, uint8_t save, uint8_t* dest, uint16_t offset, uint8_t size) {
    SERIAL_PWRITE("EEPROM ");
    SERIAL_WRITE(save);
    SERIAL_PWRITE(" ");
    SERIAL_WRITE(offset);
    SERIAL_PWRITE(" ");
    SERIAL_WRITE(size);
    SERIAL_PWRITE(" ");
    if (size == 0) {
        dest += (offset >> 3);
        uint8_t mask = (uint8_t)(1 << (offset & 7));
        uint8_t val = (uint8_t)EEPROM.read((int)dest);
        if (save) {
            if (data[0] & 1) {
                val |= mask;
            } else {
                val &= ~mask;
            }
            EEPROM.write((int)dest, val);
        } else {
            *data = val & mask ? 1 : 0;
        }
    } else {
        dest += offset;
        for (uint8_t i = 0; i < size; ++i, ++dest) {
            if (save) {
                EEPROM.write((int)dest, data[i]);
            } else {
                data[i] = (uint8_t)EEPROM.read((int)dest);
            }
        }
    }
    switch (size) {
        case 0: SERIAL_WRITE(*data); break;
        case 1: SERIAL_WRITE(*data); break;
        case 2: SERIAL_WRITE(*((uint16_t*)data)); break;
        case 4: SERIAL_WRITE(*((uint32_t*)data)); break;
    }
    SERIAL_PWRITELN(" ");

}
void GrowControlMenu::editTime(uint8_t* data, uint8_t save, uint16_t offset, uint8_t size){
    time_t currentDate = now();
    tmElements_t tm;
    breakTime(currentDate, tm);
    if (save) {
        ((uint8_t*)&tm)[offset] = *data;
        time_t t = makeTime(tm);
        RTC.set(t);
        setTime(t);
    } else {
        *data = ((uint8_t*)(&tm))[offset];
    }
}
