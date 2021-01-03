#pragma once

#include <Arduino.h>
#include "GrowControlConfig.h"

class ProgramTimerControl {

public:

	ProgramTimerControl();

	void setup();
	uint16_t check();
    DayTime& getLast() { return _last; }
private:

	struct DayTime _last;
};
