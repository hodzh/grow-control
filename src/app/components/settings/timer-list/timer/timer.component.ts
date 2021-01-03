import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Timer} from '../../../../auto/struct';
import {Program} from '../../../../auto/struct';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerComponent {
  @Input() timer: Timer;
  @Output() timerChange = new EventEmitter<Timer>();
  @Input() name: string;
  @Output() nameChange = new EventEmitter<string>();
  @Input() programs: Program[];

  constructor() {
  }

  onChange(changes) {
    this.timerChange.next({...this.timer, ...changes});
  }

  onNameChange(name) {
    this.nameChange.next(name);
  }
}
