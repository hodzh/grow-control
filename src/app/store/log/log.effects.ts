import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { merge, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ActionLogAdd, LogActionTypes, LogItemType } from './log.reducer';
import {
  ActionConnectConnect,
  ActionConnectDisconnect,
  ActionConnectRequest,
  ActionConnectResponse,
  ConnectActionTypes,
} from '../connect/connect.reducer';
import { requestToString, responseToString } from '../../services/connect/message-to-string';

@Injectable()
export class LogEffects {
  constructor(
    private readonly actions$: Actions<Action>,
    private readonly store: Store<any>,
  ) {
  }

  @Effect({ dispatch: true })
  init(): Observable<Action> {
    return this.actions$.pipe(ofType(LogActionTypes.INIT))
      .pipe(switchMap(() => merge(
        this.actions$
          .pipe(ofType<ActionConnectConnect>(ConnectActionTypes.CONNECT))
          .pipe(map(action => ({
            time: new Date(),
            icon: 'bluetooth',
            text: 'bluetooth connect',
            type: LogItemType.connect,
          }))),
        this.actions$
          .pipe(ofType<ActionConnectDisconnect>(ConnectActionTypes.DISCONNECT))
          .pipe(map(action => ({
            time: new Date(),
            icon: 'bluetooth-off',
            text: 'bluetooth disconnect',
            type: LogItemType.disconnect,
          }))),
        this.actions$
          .pipe(ofType<ActionConnectRequest>(ConnectActionTypes.REQUEST))
          .pipe(map(action => ({
            time: new Date(),
            icon: 'chevron-right',
            text: requestToString(action.payload),
            type: LogItemType.request,
            subType: action.payload.type,
          }))),
        this.actions$
          .pipe(ofType<ActionConnectResponse>(ConnectActionTypes.RESPONSE))
          .pipe(map(action => ({
            time: new Date(),
            icon: 'chevron-left',
            text: responseToString(action.payload),
            type: LogItemType.response,
            subType: action.payload.type,
          }))),
        this.actions$
          .pipe(ofType<ActionConnectResponse>(ConnectActionTypes.ERROR))
          .pipe(map(action => ({
            time: new Date(),
            icon: 'alert-circle-outline',
            text: 'connect error',
            type: LogItemType.error,
          }))),
        )
          .pipe(map(item => new ActionLogAdd(item))),
      ))
      ;
  }
}
