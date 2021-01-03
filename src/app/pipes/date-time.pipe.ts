import { Pipe, PipeTransform } from '@angular/core';
import { DateTime } from '../model/date-time';

@Pipe({
  name: 'dateTime',
  pure: true,
})
export class DateTimePipe implements PipeTransform {

  transform(value: DateTime, ...args: any[]): string {
    return `${1970 + value.year}-${('0' + value.month).slice(-2)}-${
      ('0' + value.day).slice(-2)} ${('0' + value.hour).slice(-2)}:${
      ('0' + value.minute).slice(-2)}:${('0' + value.second).slice(-2)}`;
  }
}
