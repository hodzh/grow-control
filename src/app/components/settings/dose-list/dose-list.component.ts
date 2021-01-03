import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {
  ActionSettingsChangeDose,
  ActionSettingsChangeName, ActionSettingsLoadDose, ActionSettingsLoadSchedule,
  ActionSettingsRemoveDose,
  selectorDoses,
  selectorNames,
} from '../../../store/settings/settings.reducer';
import {Observable} from 'rxjs';
import {Dose} from '../../../auto/struct';

@Component({
  selector: 'app-dose-list',
  templateUrl: './dose-list.component.html',
  styleUrls: ['./dose-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoseListComponent implements OnInit {
  doses$: Observable<Dose[]>;
  names$: Observable<string[]>;

  constructor(
    private readonly store: Store<any>,
  ) {
    this.doses$ = this.store.pipe(select(selectorDoses));
    this.names$ = this.store.pipe(select(selectorNames('dose')));
  }

  ngOnInit() {
    this.store.dispatch(new ActionSettingsLoadDose());
  }

  onNameChange(index, value) {
    this.store.dispatch(new ActionSettingsChangeName({key: 'dose', index, value}));
  }

  onChange(index, value) {
    this.store.dispatch(new ActionSettingsChangeDose({index, value}));
  }

  onRemove(index) {
    this.store.dispatch(new ActionSettingsRemoveDose(index));
  }

  trackByIndex(index, item) {
    return index;
  }
}
