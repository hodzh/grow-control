import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {
  ActionSettingsChangeName,
  ActionSettingsChangeLevelSensor, ActionSettingsLoadProgram, ActionSettingsLoadLevelSensor,
  ActionSettingsRemoveLevelSensor,
  selectorNames,
  selectorLevelSensors,
} from '../../../store/settings/settings.reducer';
import {Observable} from 'rxjs';
import {LevelSensor} from '../../../auto/struct';
import {Program} from '../../../auto/struct';

@Component({
  selector: 'app-level-sensor-list',
  templateUrl: './level-sensor-list.component.html',
  styleUrls: ['./level-sensor-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LevelSensorListComponent implements OnInit {
  levelSensors$: Observable<LevelSensor[]>;
  names$: Observable<string[]>;
  programs$: Observable<Program[]>;

  constructor(
    private readonly store: Store<any>,
  ) {
    this.levelSensors$ = this.store.pipe(select(selectorLevelSensors));
    this.names$ = this.store.pipe(select(selectorNames('levelSensor')));
    this.programs$ = this.store.pipe(select(selectorNames('program')));
  }

  ngOnInit() {
    this.store.dispatch(new ActionSettingsLoadLevelSensor());
  }

  onNameChange(index, value) {
    this.store.dispatch(new ActionSettingsChangeName({key: 'levelSensor', index, value}));
  }

  onChange(index, value) {
    this.store.dispatch(new ActionSettingsChangeLevelSensor({index, value}));
  }

  onRemove(index) {
    this.store.dispatch(new ActionSettingsRemoveLevelSensor(index));
  }

  trackByIndex(index, item) {
    return index;
  }
}
