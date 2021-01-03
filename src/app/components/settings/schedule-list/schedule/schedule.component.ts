import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Schedule} from '../../../../auto/struct';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScheduleComponent implements OnInit {
  @Input() schedule: Schedule;
  @Output() scheduleChange = new EventEmitter<Schedule>();
  @Input() name: string;
  @Output() nameChange = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  onChange(changes) {
    this.scheduleChange.next({...this.schedule, ...changes});
  }

  onNameChange(name) {
    this.nameChange.next(name);
  }
}
