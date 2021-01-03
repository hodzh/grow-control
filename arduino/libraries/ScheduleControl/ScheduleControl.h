#pragma once

#include <Arduino.h>
#include "GrowControlConfig.h"

class ScheduleControl {
public:
	ScheduleControl();

	void setup(void);
	uint16_t check(void);

	struct DayTime _last;
};
