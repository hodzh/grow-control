import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {
  ActionSettingsChangeName,
  ActionSettingsChangeSchedule, ActionSettingsLoadProgram, ActionSettingsLoadSchedule,
  ActionSettingsRemoveSchedule,
  selectorNames,
  selectorSchedules,
} from '../../../store/settings/settings.reducer';
import {Observable} from 'rxjs';
import {Schedule} from '../../../auto/struct';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScheduleListComponent implements OnInit {
  schedules$: Observable<Schedule[]>;
  names$: Observable<string[]>;

  constructor(
    private readonly store: Store<any>,
  ) {
    this.schedules$ = this.store.pipe(select(selectorSchedules));
    this.names$ = this.store.pipe(select(selectorNames('schedule')));
  }

  ngOnInit() {
    this.store.dispatch(new ActionSettingsLoadSchedule());
  }

  onNameChange(index, value) {
    this.store.dispatch(new ActionSettingsChangeName({key: 'schedule', index, value}));
  }

  onChange(index, value) {
    this.store.dispatch(new ActionSettingsChangeSchedule({index, value}));
  }

  onRemove(index) {
    this.store.dispatch(new ActionSettingsRemoveSchedule(index));
  }

  trackByIndex(index, item) {
    return index;
  }
}
