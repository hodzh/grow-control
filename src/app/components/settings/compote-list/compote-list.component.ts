import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {
  ActionSettingsAddCompoteDaily,
  ActionSettingsChangeCompote, ActionSettingsChangeCompoteDaily,
  ActionSettingsChangeName, ActionSettingsLoadCompote, ActionSettingsLoadCompoteDaily,
  ActionSettingsRemoveCompote,
  selectorCompotes,
  selectorNames,
} from '../../../store/settings/settings.reducer';
import {Observable} from 'rxjs';
import {Compote} from '../../../auto/struct';

@Component({
  selector: 'app-compote-list',
  templateUrl: './compote-list.component.html',
  styleUrls: ['./compote-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompoteListComponent implements OnInit {
  compotes$: Observable<Compote[]>;
  soils$: Observable<string[]>;
  names$: Observable<string[]>;

  constructor(
    private readonly store: Store<any>,
  ) {
    this.compotes$ = this.store.pipe(select(selectorCompotes));
    this.soils$ = this.store.pipe(select(selectorNames('dose')));
    this.names$ = this.store.pipe(select(selectorNames('compote')));
  }

  ngOnInit() {
    this.store.dispatch(new ActionSettingsLoadCompote());
  }

  onNameChange(index, value) {
    this.store.dispatch(new ActionSettingsChangeName({key: 'compote', index, value}));
  }

  onChange(index, value) {
    this.store.dispatch(new ActionSettingsChangeCompote({index, value}));
  }

  onDailyChange(index, daily: {index, value}) {
    this.store.dispatch(new ActionSettingsChangeCompoteDaily({
      index, dailyIndex: daily.index, value: daily.value }));
  }

  onRemove(index) {
    this.store.dispatch(new ActionSettingsRemoveCompote(index));
  }

  onAddDaily(index) {
    this.store.dispatch(new ActionSettingsAddCompoteDaily(index));
  }

  trackByIndex(index, item) {
    return index;
  }
}
