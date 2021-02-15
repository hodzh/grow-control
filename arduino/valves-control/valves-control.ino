#include <EEPROM.h>
#include <SerialLog.h>
#include <ValvesControl.h>

ValvesControl valvesControl;

void setup() {
    valvesControl.setup();
}

void loop() {
    valvesControl.loop();
}
