import { Pipe, PipeTransform } from '@angular/core';
import {dateDayToDate} from '../../../../model/date-time';

@Pipe({
  name: 'dateDay'
})
export class DateDayPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return dateDayToDate(value);
  }

}
