import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { DayTime } from '../../auto/struct';

@Component({
  selector: 'app-day-time',
  templateUrl: './day-time.component.html',
  styleUrls: ['./day-time.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DayTimeComponent {
  @Input() time: DayTime;
  @Output() timeChange = new EventEmitter<DayTime>();
  hours = new Array(24).fill(0).map((v, i) => i);
  minutes = new Array(60).fill(0).map((v, i) => i);

  constructor() {
  }

  onChange(changes) {
    this.timeChange.next({ ...this.time, ...changes });
  }
}
