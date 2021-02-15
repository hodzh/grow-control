#pragma once

#include <Arduino.h>
#include "GrowControlConfig.h"
#include "SoftwareSerial.h"

class ValvesControl {
public:
    ValvesControl();

    void setup();
    bool loop();

private:
    SoftwareSerial serial;
};
