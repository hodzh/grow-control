import { Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { concat, EMPTY, from, Observable, of } from 'rxjs';
import {
  catchError,
  concatMap,
  filter,
  ignoreElements,
  map,
  mergeMap,
  switchMap,
  withLatestFrom,
} from 'rxjs/operators';
import {
  ActionConnectError,
  ActionConnectRequest,
  ActionConnectResponse,
  ActionConnectSetStatus,
  ConnectActionTypes,
  selectorConnectStatus,
} from './connect.reducer';
import { ConnectService } from '../../services/connect/connect.service';
import { selectorBtDevice } from '../config/config.reducer';
import { ConnectStatus } from '../../model/connect-status';
import { DeviceConnect } from '../../model/device-connect';
import { DeviceResponseType } from '../../model/device-response-type';
import {
  ActionSettingsUpdate, ActionSettingsUpdateCompoteDaily, ActionSettingsUpdateDose, ActionSettingsUpdateMixer,
  ActionSettingsUpdatePinAssignment, ActionSettingsUpdateProgram,
  ActionSettingsUpdatePump, ActionSettingsUpdateSchedule, ActionSettingsUpdateTimer,
} from '../settings/settings.reducer';

@Injectable()
export class ConnectEffects {
  constructor(
    private readonly actions$: Actions<Action>,
    private readonly store: Store<any>,
    private readonly connectBt: ConnectService,
  ) {
  }

  @Effect({ dispatch: true })
  connect(): Observable<Action> {
    return this.actions$.pipe(ofType(ConnectActionTypes.CONNECT))
      .pipe(withLatestFrom(this.store.pipe(select(selectorBtDevice))))
      .pipe(switchMap(([action, device]) => device ?
        from(this.connectBt.connect(device)) :
        from(this.connectBt.discover())
          .pipe(switchMap((device: DeviceConnect[]) => from(this.connectBt.connect(device[0])))),
      ))
      .pipe(mergeMap(() => of(new ActionConnectSetStatus(ConnectStatus.CONNECTED))))
      .pipe(catchError(error => of(new ActionConnectError(error))))
      ;
  }

  @Effect({ dispatch: true })
  disconnect(): Observable<Action> {
    return this.actions$.pipe(ofType(ConnectActionTypes.DISCONNECT))
      .pipe(switchMap(() => from(this.connectBt.disconnect())
        .pipe(mergeMap(() => of(new ActionConnectSetStatus(ConnectStatus.DISCONNECTED))))))
      .pipe(catchError(error => of(new ActionConnectError(error))))
      ;
  }

  @Effect({ dispatch: true })
  request(): Observable<Action> {
    return this.actions$
      .pipe(ofType<ActionConnectRequest>(ConnectActionTypes.REQUEST))
      .pipe(withLatestFrom(this.store.select(selectorConnectStatus)))
      .pipe(filter(([a, status]) => status === ConnectStatus.CONNECTED ||
        status === ConnectStatus.TRANSFER))
      .pipe(concatMap(([action, status]) => concat(
        of(new ActionConnectSetStatus(ConnectStatus.TRANSFER)),
        from(this.connectBt.send(action.payload)).pipe(ignoreElements()),
        of(new ActionConnectSetStatus(ConnectStatus.CONNECTED)),
      )))
      .pipe(catchError(error => of(new ActionConnectError(error))))
      ;
  }

  @Effect({ dispatch: true })
  response(): Observable<Action> {
    return this.connectBt.response$
      .pipe(map((response) => new ActionConnectResponse(response)));
  }

  @Effect({ dispatch: true })
  responseProcess(): Observable<Action> {
    return this.actions$.pipe(ofType<ActionConnectResponse>(ConnectActionTypes.RESPONSE))
      .pipe(switchMap(({ payload }) => {
        switch (payload.type) {
          case DeviceResponseType.pump:
            return of(new ActionSettingsUpdatePump({
              index: payload.payload.index,
              value: payload.payload.value,
            }));
          case DeviceResponseType.mixer:
            return of(new ActionSettingsUpdateMixer({
              index: payload.payload.index,
              value: payload.payload.value,
            }));
          case DeviceResponseType.dose:
            return of(new ActionSettingsUpdateDose({
              index: payload.payload.index,
              value: payload.payload.value,
            }));
          case DeviceResponseType.program:
            return of(new ActionSettingsUpdateProgram({
              index: payload.payload.index,
              value: payload.payload.value,
            }));
          case DeviceResponseType.timer:
            return of(new ActionSettingsUpdateTimer({
              index: payload.payload.index,
              value: payload.payload.value,
            }));
          case DeviceResponseType.schedule:
            return of(new ActionSettingsUpdateSchedule({
              index: payload.payload.index,
              value: payload.payload.value,
            }));
          case DeviceResponseType.compoteDaily:
            return of(new ActionSettingsUpdateCompoteDaily({
              index: payload.payload.index,
              dailyIndex: payload.payload.dailyIndex,
              value: payload.payload.value,
            }));
          case DeviceResponseType.pin:
            return of(new ActionSettingsUpdatePinAssignment({
              type: payload.payload.type,
              index: payload.payload.index,
              value: payload.payload.value,
            }));
        }
        return EMPTY;
      }));
  }
}
