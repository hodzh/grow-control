import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Actions} from '@ngrx/effects';
import {Observable, Subject} from 'rxjs';
import {LogFilterComponent} from './log-filter/log-filter.component';
import {
  ActionLogResetFilter,
  ActionLogSetFilter,
  LogItem,
  selectorLogFilteredItems,
  selectorLogHasFilter
} from '../../store/log/log.reducer';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogComponent implements OnInit, OnDestroy {
  log$: Observable<LogItem[]>;
  hasFilter$: Observable<boolean>;
  private destroy$ = new Subject<void>();

  constructor(
    private readonly store: Store<any>,
    private readonly actions: Actions,
    private readonly dialog: MatDialog,
  ) {
  }

  ngOnInit() {
    this.log$ = this.store.pipe(select(selectorLogFilteredItems));
    this.hasFilter$ = this.store.pipe(select(selectorLogHasFilter));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  onFilter() {
    const dialogRef = this.dialog.open(LogFilterComponent);
    dialogRef.afterClosed().subscribe(filter => {
      if (filter) {
        this.store.dispatch(new ActionLogSetFilter(filter));
      }
    });
  }

  onFilterReset() {
    this.store.dispatch(new ActionLogResetFilter());
  }
}
