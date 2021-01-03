/*
 * DayTime.cpp
 *
 *  Created on: Jun 8, 2016
 *      Author: eugene
 */

#include "DayTime.h"

bool operator < (const struct DayTime& left, const struct DayTime& right)
{
	return left.hour < right.hour ||
		(left.hour == right.hour &&
		(left.minute < right.minute ||
		(left.minute == right.minute && left.second < right.second)));
}
bool operator > (const struct DayTime& left, const struct DayTime& right)
{
	return left.hour > right.hour ||
		(left.hour == right.hour &&
		(left.minute > right.minute ||
		(left.minute == right.minute && left.second > right.second)));
}
bool operator <= (const struct DayTime& left, const struct DayTime& right)
{
	return left.hour < right.hour ||
		(left.hour == right.hour &&
		(left.minute < right.minute ||
		(left.minute == right.minute && left.second <= right.second)));
}
bool operator >= (const struct DayTime& left, const struct DayTime& right)
{
	return left.hour > right.hour ||
		(left.hour == right.hour &&
		(left.minute > right.minute ||
		(left.minute == right.minute && left.second >= right.second)));
}
bool operator == (const struct DayTime& left, const struct DayTime& right)
{
	return left.second == right.second &&
        left.minute == right.minute &&
        left.hour == right.hour;
}
