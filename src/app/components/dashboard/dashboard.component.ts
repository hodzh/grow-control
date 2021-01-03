import {ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {
  ActionDashboardSyncTime,
  ActionDashboardUpdateTemp,
  DashboardActionTypes,
  selectorMaxTemp,
  selectorMinTemp,
  selectorStatus,
  selectorTemp,
  selectorTime
} from '../../store/dashboard/dashboard.reducer';
import {DateTime} from '../../model/date-time';
import {DeviceStatus} from '../../model/device-status';
import {TimeChartComponent} from './time-chart/time-chart.component';
import {Actions, ofType} from '@ngrx/effects';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit, OnDestroy {
  time$: Observable<DateTime>;
  temp$: Observable<number>;
  minTemp$: Observable<number>;
  maxTemp$: Observable<number>;
  status$: Observable<DeviceStatus>;
  @ViewChild('chart', {static: true}) chart: TimeChartComponent;
  private destroy$ = new Subject();

  constructor(
    private readonly store: Store<any>,
    private readonly actions: Actions,
  ) {
    this.time$ = this.store.pipe(select(selectorTime));
    this.temp$ = this.store.pipe(select(selectorTemp));
    this.minTemp$ = this.store.pipe(select(selectorMinTemp));
    this.maxTemp$ = this.store.pipe(select(selectorMaxTemp));
    this.status$ = this.store.pipe(select(selectorStatus));
    this.actions
      .pipe(ofType<ActionDashboardUpdateTemp>(DashboardActionTypes.UPDATE_TEMP))
      .pipe(takeUntil(this.destroy$))
      .subscribe(action => {
        if (!this.chart) {
          return;
        }
        this.chart.add(action.payload);
      });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  onSyncTime() {
    this.store.dispatch(new ActionDashboardSyncTime());
  }
}
