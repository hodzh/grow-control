#include <EEPROM.h>
#include <SerialLog.h>
#include <GrowControl.h>

GrowControl growControl;

void setup() {
    growControl.setup();
}

void loop() {
     growControl.loop();
}
