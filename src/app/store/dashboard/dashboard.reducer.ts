import { Action } from '@ngrx/store';
import { DateTime, DeviceStatus } from '../../auto/struct';

export enum DashboardActionTypes {
  INIT = '[Dashboard] Init',
  UPDATE_TIME = '[Dashboard] Update time',
  UPDATE_TEMP = '[Dashboard] Update temp',
  UPDATE_STATUS = '[Dashboard] Update status',
  SYNC_TIME = '[Dashboard] Sync time',
}

export class ActionDashboardInit implements Action {
  readonly type = DashboardActionTypes.INIT;

  constructor() {
  }
}

export class ActionDashboardUpdateTime implements Action {
  readonly type = DashboardActionTypes.UPDATE_TIME;

  constructor(public readonly payload: DateTime) {
  }
}

export class ActionDashboardUpdateTemp implements Action {
  readonly type = DashboardActionTypes.UPDATE_TEMP;

  constructor(public readonly payload: number) {
  }
}

export class ActionDashboardUpdateStatus implements Action {
  readonly type = DashboardActionTypes.UPDATE_STATUS;

  constructor(public readonly payload: DeviceStatus) {
  }
}

export class ActionDashboardSyncTime implements Action {
  readonly type = DashboardActionTypes.SYNC_TIME;

  constructor() {
  }
}

export type DashboardActions =
  | ActionDashboardInit
  | ActionDashboardUpdateTime
  | ActionDashboardUpdateTemp
  | ActionDashboardUpdateStatus
  | ActionDashboardSyncTime
  ;

export interface DashboardState {
  time: DateTime;
  temp: number;
  minTemp: number;
  maxTemp: number;
  status: DeviceStatus;
}

export const initialDashboardState: DashboardState = {
  time: {
    minute: 0,
    second: 0,
    hour: 0,
    wday: 0,
    day: 0,
    month: 0,
    year: 0,
  },
  temp: 0,
  minTemp: -99,
  maxTemp: 99,
  status: {
    state: 0,
    cmdState: 0,
    valve: 0,
    flow: 0,
    volume: 0,
    totalVolume: 0,
    mix: 0,
    doseId: 0,
    valveId: 0,
  },
};

export const selectorDashboard = state => state.dashboard as DashboardState;
export const selectorTime = state => (state.dashboard as DashboardState).time;
export const selectorTemp = state => (state.dashboard as DashboardState).temp;
export const selectorMinTemp = state => (state.dashboard as DashboardState).minTemp;
export const selectorMaxTemp = state => (state.dashboard as DashboardState).maxTemp;
export const selectorStatus = state => (state.dashboard as DashboardState).status;

export function dashboardReducer(
  state: DashboardState = initialDashboardState,
  action: DashboardActions,
): DashboardState {
  switch (action.type) {
    case DashboardActionTypes.UPDATE_TIME:
      return updateTime(state, action.payload);
    case DashboardActionTypes.UPDATE_TEMP:
      return updateTemp(state, action.payload);
    case DashboardActionTypes.UPDATE_STATUS:
      return updateStatus(state, action.payload);
    default:
      return state;
  }
}

function updateTime(state: DashboardState, time: DateTime): DashboardState {
  return { ...state, time };
}

function updateTemp(state: DashboardState, temp: number): DashboardState {
  return { ...state, temp, minTemp: Math.min(temp, state.minTemp), maxTemp: Math.max(temp, state.maxTemp) };
}

function updateStatus(state: DashboardState, status: DeviceStatus): DashboardState {
  return { ...state, status };
}
