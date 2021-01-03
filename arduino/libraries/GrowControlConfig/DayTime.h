/*
 * DayTime.h
 *
 *  Created on: Jun 8, 2016
 *      Author: eugene
 */

#ifndef DAYTIME_H_
#define DAYTIME_H_

#include "Arduino.h"
#include "Struct.h"

bool operator < (const struct DayTime& left, const struct DayTime& right);
bool operator > (const struct DayTime& left, const struct DayTime& right);
bool operator <= (const struct DayTime& left, const struct DayTime& right);
bool operator >= (const struct DayTime& left, const struct DayTime& right);
bool operator == (const struct DayTime& left, const struct DayTime& right);

#endif /* DAYTIME_H_ */
