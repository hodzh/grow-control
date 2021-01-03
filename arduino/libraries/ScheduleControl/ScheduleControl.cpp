#include "ScheduleControl.h"
#include "TimeUtil.h"
#include "EEPROMemory.h"

ScheduleControl::ScheduleControl() {
}

void ScheduleControl::setup() {
    time_t t = now();
    _last.hour = hour(t);
    _last.minute = minute(t);
    _last.second = second(t);
}

uint16_t ScheduleControl::check(void) {
	time_t t = now();
	DayTime ct;
	ct.hour = hour(t);
	ct.minute = minute(t);
	ct.second = second(t);
	if (ct.second == _last.second && ct.minute == _last.minute
			&& ct.hour == _last.hour) {
		return;
	}
	_last = ct;
	uint16_t onOff = 0;
	for (byte i = 0; i < SCHEDULE_COUNT; ++i) {
		Schedule schedule;
		EEPROMemory::getSchedule(i, schedule);
		if (!schedule.enable)
			continue;
		if (schedule.startTime > schedule.endTime) {
			if (_last < schedule.startTime
					&& _last > schedule.endTime) {
				//onOff &= ~(1<<schedule.devId);
			} else {
				onOff |= 1 << schedule.deviceId;
			}
		} else if (schedule.startTime < schedule.endTime) {
			if (_last < schedule.startTime
					|| _last > schedule.endTime) {
				//onOff &= ~(1<<schedule.devId);
			} else {
				onOff |= 1 << schedule.deviceId;
			}
		}
	}
	return onOff;
}
