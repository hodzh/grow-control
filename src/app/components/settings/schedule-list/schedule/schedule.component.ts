import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Schedule} from '../../../../auto/struct';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScheduleComponent {
  @Input() schedule: Schedule;
  @Output() scheduleChange = new EventEmitter<Schedule>();
  @Input() name: string;
  @Output() nameChange = new EventEmitter<string>();

  constructor() {
  }

  onChange(changes) {
    this.scheduleChange.next({...this.schedule, ...changes});
  }

  onNameChange(name) {
    this.nameChange.next(name);
  }
}
