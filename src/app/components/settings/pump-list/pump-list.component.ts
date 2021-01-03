import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {
  ActionSettingsChangeName,
  ActionSettingsChangePump, ActionSettingsLoadProgram, ActionSettingsLoadPump,
  ActionSettingsRemovePump,
  selectorNames,
  selectorPumps,
} from '../../../store/settings/settings.reducer';
import {Observable} from 'rxjs';
import {Pump} from '../../../auto/struct';

@Component({
  selector: 'app-pump-list',
  templateUrl: './pump-list.component.html',
  styleUrls: ['./pump-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PumpListComponent implements OnInit {
  pumps$: Observable<Pump[]>;
  names$: Observable<string[]>;

  constructor(
    private readonly store: Store<any>,
  ) {
    this.pumps$ = this.store.pipe(select(selectorPumps));
    this.names$ = this.store.pipe(select(selectorNames('pump')));
  }

  ngOnInit() {
    this.store.dispatch(new ActionSettingsLoadPump());
  }

  onNameChange(index, value) {
    this.store.dispatch(new ActionSettingsChangeName({key: 'pump', index, value}));
  }

  onChange(index, value) {
    this.store.dispatch(new ActionSettingsChangePump({index, value}));
  }

  onRemove(index) {
    this.store.dispatch(new ActionSettingsRemovePump(index));
  }

  trackByIndex(index, item) {
    return index;
  }
}
