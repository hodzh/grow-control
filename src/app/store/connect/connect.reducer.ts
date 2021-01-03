import { Action } from '@ngrx/store';
import { DeviceRequest } from '../../auto/device-request';
import { ConnectStatus } from '../../model/connect-status';
import { DeviceResponse } from '../../auto/device-response';

export enum ConnectActionTypes {
  CONNECT = '[Connect] Connect',
  DISCONNECT = '[Connect] Disconnect',
  SET_STATUS = '[Connect] Set status',
  REQUEST = '[Connect] Request',
  RESPONSE = '[Connect] Response',
  ERROR = '[Connect] Error',
}

export class ActionConnectConnect implements Action {
  readonly type = ConnectActionTypes.CONNECT;

  constructor() {
  }
}

export class ActionConnectDisconnect implements Action {
  readonly type = ConnectActionTypes.DISCONNECT;

  constructor() {
  }
}

export class ActionConnectSetStatus implements Action {
  readonly type = ConnectActionTypes.SET_STATUS;

  constructor(public readonly payload: ConnectStatus) {
  }
}

export class ActionConnectRequest<T extends DeviceRequest = DeviceRequest> implements Action {
  readonly type = ConnectActionTypes.REQUEST;

  constructor(public readonly payload: T) {
  }
}

export class ActionConnectResponse<T extends DeviceResponse = DeviceResponse> implements Action {
  readonly type = ConnectActionTypes.RESPONSE;

  constructor(public readonly payload: T) {
  }
}

export class ActionConnectError implements Action {
  readonly type = ConnectActionTypes.ERROR;

  constructor(public readonly payload: Error) {
  }
}

export type ConnectActions =
  | ActionConnectConnect
  | ActionConnectDisconnect
  | ActionConnectSetStatus
  | ActionConnectRequest
  | ActionConnectResponse
  | ActionConnectError
  ;

export interface ConnectState {
  status: ConnectStatus;
}

export const initialConnectState: ConnectState = {
  status: ConnectStatus.DISCONNECTED,
};

export const selectorConnect = state => state.connect as ConnectState;
export const selectorConnectStatus = state => (state.connect as ConnectState).status;

export function connectReducer(
  state: ConnectState = initialConnectState,
  action: ConnectActions,
): ConnectState {
  switch (action.type) {
    case ConnectActionTypes.CONNECT:
      return { ...state, status: ConnectStatus.CONNECTING };
    case ConnectActionTypes.DISCONNECT:
      return { ...state, status: ConnectStatus.DISCONNECTING };
    case ConnectActionTypes.SET_STATUS:
      return { ...state, status: action.payload };
    case ConnectActionTypes.REQUEST:
      return { ...state };
    case ConnectActionTypes.ERROR:
      return { ...state, status: ConnectStatus.DISCONNECTED };
    default:
      return state;
  }
}
