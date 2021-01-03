import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'memory',
  pure: true,
})
export class MemoryPipe implements PipeTransform {
  transform(value: number): string {
    const thresh = 1024;
    if (Math.abs(value) < thresh) {
      return `${value} B`;
    }
    const units = ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    let u = -1;
    do {
      value /= thresh;
      ++u;
    } while (Math.abs(value) >= thresh && u < units.length - 1);
    return `${value.toFixed(1)} ${units[u]}`;
  }
}
