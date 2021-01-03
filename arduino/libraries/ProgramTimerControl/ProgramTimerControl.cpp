#include "ProgramTimerControl.h"
#include "GrowControlConfig.h"
#include "SerialLog.h"
#include "EEPROMemory.h"
#include "TimeUtil.h"

ProgramTimerControl::ProgramTimerControl() {
}

void ProgramTimerControl::setup() {
	time_t t = now();
	_last.hour = hour(t);
	_last.minute = minute(t);
	_last.second = second(t);
}

uint16_t ProgramTimerControl::check(void) {
    time_t t = now();
    DayTime ct;
    ct.hour = hour(t);
    ct.minute = minute(t);
    ct.second = second(t);
    if (ct == _last) {
        return 0;
    }
    uint16_t onOff = 0;
    for (byte i = 0; i < TIMER_COUNT; ++i) {
        Timer timer;
        EEPROMemory::getTimer(i, timer);
        if (!timer.enable) {
            continue;
        }
        if (_last > ct) {
            if (_last < timer.time || timer.time <= ct) {
                onOff |= 1 << timer.program;
            }
        } else {
            if (_last < timer.time && timer.time <= ct) {
                onOff |= 1 << timer.program;
            }
        }
    }
    _last = ct;
    return onOff;
}
