import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'bits',
  pure: true,
})
export class BitsPipe implements PipeTransform {
  transform(value: number[]): number[] {
    const bits: number[] = [];
    for (let i = 0; i < value.length; i++) {
      let num = value[i];
      for (let j = 0; j < 8; j++) {
        // tslint:disable-next-line:no-bitwise
        if (num & 1) {
          bits.push(i * 8 + j + 1);
        }
        // tslint:disable-next-line:no-bitwise
        num >>= 1;
      }
    }
    return bits;
  }
}
