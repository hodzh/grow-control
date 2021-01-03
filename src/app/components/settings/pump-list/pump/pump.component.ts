import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Pump} from '../../../../auto/struct';

@Component({
  selector: 'app-pump',
  templateUrl: './pump.component.html',
  styleUrls: ['./pump.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PumpComponent {
  @Input() pump: Pump;
  @Output() pumpChange = new EventEmitter<Pump>();
  @Input() name: string;
  @Output() nameChange = new EventEmitter<string>();

  constructor() {
  }

  onChange(changes) {
    this.pumpChange.next({...this.pump, ...changes});
  }

  onNameChange(name) {
    this.nameChange.next(name);
  }
}
