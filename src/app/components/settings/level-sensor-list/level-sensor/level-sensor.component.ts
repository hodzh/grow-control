import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {LevelSensor} from '../../../../auto/struct';
import {Program} from '../../../../auto/struct';

@Component({
  selector: 'app-level-sensor',
  templateUrl: './level-sensor.component.html',
  styleUrls: ['./level-sensor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LevelSensorComponent {
  @Input() levelSensor: LevelSensor;
  @Output() levelSensorChange = new EventEmitter<LevelSensor>();
  @Input() name: string;
  @Output() nameChange = new EventEmitter<string>();

  constructor() {
  }

  onChange(changes) {
    this.levelSensorChange.next({...this.levelSensor, ...changes});
  }

  onNameChange(name) {
    this.nameChange.next(name);
  }
}
