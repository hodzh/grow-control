import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'times',
  pure: true,
})
export class TimesPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return {
      * [Symbol.iterator]() {
        for (let i = 0; i < value; i++) {
          yield i;
        }
      },
    };
  }
}
