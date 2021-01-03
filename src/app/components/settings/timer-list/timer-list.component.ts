import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {
  ActionSettingsChangeName,
  ActionSettingsChangeTimer, ActionSettingsLoadProgram, ActionSettingsLoadTimer,
  ActionSettingsRemoveTimer,
  selectorNames,
  selectorTimers,
} from '../../../store/settings/settings.reducer';
import {Observable} from 'rxjs';
import {Timer} from '../../../auto/struct';
import {Program} from '../../../auto/struct';

@Component({
  selector: 'app-timer-list',
  templateUrl: './timer-list.component.html',
  styleUrls: ['./timer-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerListComponent implements OnInit {
  timers$: Observable<Timer[]>;
  names$: Observable<string[]>;
  programs$: Observable<Program[]>;

  constructor(
    private readonly store: Store<any>,
  ) {
    this.timers$ = this.store.pipe(select(selectorTimers));
    this.names$ = this.store.pipe(select(selectorNames('timer')));
    this.programs$ = this.store.pipe(select(selectorNames('program')));
  }

  ngOnInit() {
    this.store.dispatch(new ActionSettingsLoadTimer());
  }

  onNameChange(index, value) {
    this.store.dispatch(new ActionSettingsChangeName({key: 'timer', index, value}));
  }

  onChange(index, value) {
    this.store.dispatch(new ActionSettingsChangeTimer({index, value}));
  }

  onRemove(index) {
    this.store.dispatch(new ActionSettingsRemoveTimer(index));
  }

  trackByIndex(index, item) {
    return index;
  }
}
