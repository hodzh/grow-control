import { DateDay } from '../auto/struct';

export interface DateTime {
  minute: number;
  second: number;
  hour: number;
  // day of week, sunday is day 1
  wday: number;
  day: number;
  month: number;
  // offset from 1970
  year: number;
}

export function dateToDateTime(date: Date): DateTime {
  return {
    minute: date.getMinutes(),
    second: date.getSeconds(),
    hour: date.getHours(),
    wday: date.getDay(),
    day: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear() - 1970,
  };
}

export function dateToDateDay(date: Date): DateDay {
  return {
    wday: date.getDay(),
    day: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear() - 1970,
  };
}

export function dateDayToDate(date: DateDay): Date {
  return new Date(
    date.year + 1970,
    date.month,
    date.day,
  );
}
