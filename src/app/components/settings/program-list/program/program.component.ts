import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Program} from '../../../../auto/struct';
import {Compote} from '../../../../auto/struct';
import {deviceConfig} from '../../../../model/device-config';
import {dateToDateDay} from '../../../../model/date-time';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgramComponent {
  @Input() program: Program;
  @Output() programChange = new EventEmitter<Program>();
  @Input() name: string;
  @Output() nameChange = new EventEmitter<string>();
  @Input() compotes: Compote[];
  @Input() valves: number[];

  constructor() {
  }

  onChange(changes) {
    this.programChange.next({...this.program, ...changes});
  }

  onChangeDate(date) {
    this.programChange.next({...this.program, start: dateToDateDay(date)});
  }

  onChangeValves(changes) {
    const valves = new Array(Math.ceil(deviceConfig.valveCount / 8)).fill(0);
    for (const pin of changes) {
      const offset = pin - 1;
      const index = Math.trunc(offset / 8);
      // tslint:disable-next-line:no-bitwise
      valves[index] |= 1 << (offset % 8);
    }
    this.programChange.next({...this.program, valves});
  }

  onNameChange(name) {
    this.nameChange.next(name);
  }
}
