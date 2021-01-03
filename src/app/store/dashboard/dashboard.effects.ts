import { Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { concat, EMPTY, from, merge, Observable, of, timer } from 'rxjs';
import { filter, map, mergeMap, switchMap, take } from 'rxjs/operators';
import {
  ActionDashboardSyncTime,
  ActionDashboardUpdateStatus,
  ActionDashboardUpdateTemp,
  ActionDashboardUpdateTime,
  DashboardActionTypes,
} from './dashboard.reducer';
import { DeviceRequestType } from '../../model/device-request-type';
import { DeviceResponseType } from '../../model/device-response-type';
import { DbService } from '../../services/storage/db.service';
import { ActionConnectRequest, ActionConnectResponse, ConnectActionTypes } from '../connect/connect.reducer';
import { dateToDateTime } from '../../model/date-time';
import { DeviceState, FertigateState } from '../../model/device-status';
import { selectorMonitorConfig } from '../config/config.reducer';
import { DeviceResponseTemp, DeviceResponseTime } from '../../auto/device-response';
import { DeviceRequestSetTime } from '../../auto/device-request';

@Injectable()
export class DashboardEffects {
  constructor(
    private actions$: Actions<Action>,
    private store: Store<any>,
    private db: DbService,
  ) {
  }

  @Effect({ dispatch: true })
  init(): Observable<Action> {
    return this.actions$.pipe(ofType(DashboardActionTypes.INIT))
      .pipe(switchMap(() => this.store.pipe(select(selectorMonitorConfig))))
      .pipe(switchMap((monitorConfig) => merge(
        monitorConfig.time.enable ? timer(0, monitorConfig.time.interval)
          .pipe(switchMap(() => this.getTime())) : EMPTY,
        monitorConfig.temp.enable ? timer(0, monitorConfig.temp.interval)
          .pipe(switchMap(() => this.getTemp())) : EMPTY,
        monitorConfig.status.enable ? timer(0, monitorConfig.status.interval)
          .pipe(switchMap(() => this.getStatus())) : EMPTY,
      )))
      ;
  }

  @Effect({ dispatch: false })
  updateTemp(): Observable<any> {
    return this.actions$
      .pipe(ofType<ActionDashboardUpdateTemp>(DashboardActionTypes.UPDATE_TEMP))
      .pipe(mergeMap(action => from(this.db.logTemp(action.payload))))
      ;
  }

  @Effect({ dispatch: false })
  updateStatus(): Observable<any> {
    return this.actions$
      .pipe(ofType<ActionDashboardUpdateStatus>(DashboardActionTypes.UPDATE_STATUS))
      .pipe(filter(action => action.payload.state === DeviceState.fertigate &&
        action.payload.cmdState === FertigateState.irrigate))
      .pipe(mergeMap(action => from(this.db.logFlow(action.payload.flow))))
      ;
  }

  @Effect({ dispatch: true })
  syncTime(): Observable<Action> {
    return this.actions$
      .pipe(ofType<ActionDashboardSyncTime>(DashboardActionTypes.SYNC_TIME))
      .pipe(map(action => new ActionConnectRequest<DeviceRequestSetTime>({
        type: DeviceRequestType.setTime,
        payload: {
          ...dateToDateTime(new Date()),
        },
      })))
      ;
  }

  private getTime(): Observable<Action> {
    return concat(
      of(new ActionConnectRequest({ type: DeviceRequestType.getTime, payload: { fake: 0 } })),
      this.actions$
        .pipe(ofType<ActionConnectResponse>(ConnectActionTypes.RESPONSE))
        .pipe(filter(action => action.payload.type === DeviceResponseType.time))
        .pipe(take(1))
        .pipe(map((action: ActionConnectResponse<DeviceResponseTime>) =>
          new ActionDashboardUpdateTime(action.payload.payload))),
    );
  }

  private getTemp(): Observable<Action> {
    return concat(
      of(new ActionConnectRequest({ type: DeviceRequestType.getTemp, payload: { fake: 0 } })),
      this.actions$
        .pipe(ofType<ActionConnectResponse>(ConnectActionTypes.RESPONSE))
        .pipe(filter(action => action.payload.type === DeviceResponseType.temp))
        .pipe(take(1))
        .pipe(map((action: ActionConnectResponse<DeviceResponseTemp>) =>
          new ActionDashboardUpdateTemp(action.payload.payload.value))),
    );
  }

  private getStatus(): Observable<Action> {
    return concat(
      of(new ActionConnectRequest({ type: DeviceRequestType.getStatus, payload: { fake: 0 } })),
      this.actions$
        .pipe(ofType<ActionConnectResponse>(ConnectActionTypes.RESPONSE))
        .pipe(filter(action => action.payload.type === DeviceResponseType.status))
        .pipe(take(1))
        .pipe(map(action => new ActionDashboardUpdateStatus(action.payload.payload as any))),
    );
  }
}
