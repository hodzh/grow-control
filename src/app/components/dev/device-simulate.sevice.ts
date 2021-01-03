import {Injectable} from '@angular/core';
import {DeviceResponseType} from '../../model/device-response-type';
import {DeviceRequestType} from '../../model/device-request-type';
import {Action, Store} from '@ngrx/store';
import {Actions, ofType} from '@ngrx/effects';
import {ActionConnectRequest, ActionConnectResponse, ConnectActionTypes} from '../../store/connect/connect.reducer';
import {delay, filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {DeviceState, FertigateState} from '../../model/device-status';
import {BehaviorSubject, EMPTY, of} from 'rxjs';
import { DeviceResponseStatus, DeviceResponseTemp } from '../../auto/device-response';

@Injectable({
  providedIn: 'root',
})
export class DeviceSimulateService {
  private enableSubject = new BehaviorSubject<boolean>(false);

  constructor(
    private readonly store: Store<any>,
    private readonly actions: Actions<Action>,
  ) {
  }

  init() {
    this.actions.pipe(ofType<ActionConnectRequest>(ConnectActionTypes.REQUEST))
      .pipe(withLatestFrom(this.enableSubject.asObservable()))
      .pipe(filter(([request, enable]) => enable))
      .pipe(map(([request, enable]) => request.payload))
      .pipe(mergeMap(request => {
        if (request.type === DeviceRequestType.getTemp) {
          return of(new ActionConnectResponse<DeviceResponseTemp>({
            type: DeviceResponseType.temp,
            payload: {value: Math.random() * 50},
          })).pipe(delay(1000));
        } else if (request.type === DeviceRequestType.getStatus) {
          return of(new ActionConnectResponse<DeviceResponseStatus>({
            type: DeviceResponseType.status,
            payload: {
              state: DeviceState.fertigate,
              cmdState: FertigateState.irrigate,
              valve: 0,
              flow: Math.random() * 1200,
              volume: 0,
              totalVolume: 0,
              mix: 0,
              // dose: 0,
            }
          })).pipe(delay(1000));
        }
        return EMPTY;
      }))
      .subscribe(response => {
        this.store.dispatch(response);
      });
  }

  enable(value) {
    this.enableSubject.next(value);
  }

  get enabled() {
    return this.enableSubject.value;
  }
}
