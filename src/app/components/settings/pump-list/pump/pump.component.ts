import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pump} from '../../../../auto/struct';

@Component({
  selector: 'app-pump',
  templateUrl: './pump.component.html',
  styleUrls: ['./pump.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PumpComponent implements OnInit {
  @Input() pump: Pump;
  @Output() pumpChange = new EventEmitter<Pump>();
  @Input() name: string;
  @Output() nameChange = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  onChange(changes) {
    this.pumpChange.next({...this.pump, ...changes});
  }

  onNameChange(name) {
    this.nameChange.next(name);
  }
}
