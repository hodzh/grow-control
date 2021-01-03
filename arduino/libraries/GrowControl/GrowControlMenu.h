#pragma once

#include <Arduino.h>
#include <Menu.h>
#include "GrowControlConfig.h"

class GrowControlMenu {
public:
    GrowControlMenu();

    Menu menu;

    void setup();
    void loop();

    static void cmdInfo();
    static void cmdIrrigate();
    static void cmdWash();
    static void cmdCompote();
    static void cmdWashCompote();
    static void cmdMixCompote();
    static void cmdMixDose();
    static void cmdDose();
    static void cmdFertigate();

    static void cmdCalibratePumpIn();
    static void cmdCalibratePumpOut();
    static void cmdCalibrateDose();

    static void cmdResetCompote();
    static void cmdResetProgram();
    static void cmdResetCalibrate();
    static void cmdResetSchedule();
    static void cmdResetTimer();
    static void cmdResetAll();

    static void testValves(uint8_t* data, uint8_t save, uint16_t offset, uint8_t size);
    static void testPump(uint8_t* data, uint8_t save, uint16_t offset, uint8_t size);

    static void editSettings(uint8_t* data, uint8_t save, uint16_t offset, uint8_t size);
    static void editTime(uint8_t* data, uint8_t save, uint16_t offset, uint8_t size);
    static void editCalibrate(uint8_t* data, uint8_t save, uint16_t offset, uint8_t size);

    static void editEEPROM(uint8_t* data, uint8_t save, uint8_t* dest, uint16_t offset, uint8_t size);
    static void editRAM(uint8_t* data, uint8_t save, uint8_t* dest, uint16_t offset, uint8_t size);
};
