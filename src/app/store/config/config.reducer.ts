import { Action } from '@ngrx/store';
import { DeviceConnect } from '../../model/device-connect';
import { AccessControlConfig } from '../../model/access-control-config';

export enum ConfigActionTypes {
  INIT = '[Config] Init',
  UPDATE = '[Config] Update',
  UPDATE_DATABASE_SIZES = '[Config] Update size',
  SET_DEVICE = '[Config] Set device',
  SET_DATABASE_SIZES = '[Config] Set database sizes',
  CHANGE = '[Config] Change',
  CLEAR_DATABASE = '[Config] Clear database',
}

export class ActionConfigInit implements Action {
  readonly type = ConfigActionTypes.INIT;

  constructor() {
  }
}

export class ActionConfigUpdate implements Action {
  readonly type = ConfigActionTypes.UPDATE;

  constructor(public readonly payload?: ConfigState) {
  }
}

export class ActionConfigUpdateDatabaseSize implements Action {
  readonly type = ConfigActionTypes.UPDATE_DATABASE_SIZES;

  constructor() {
  }
}

export class ActionConfigSetDevice implements Action {
  readonly type = ConfigActionTypes.SET_DEVICE;

  constructor(public readonly payload: DeviceConnect) {
  }
}

export class ActionConfigSetDatabaseSizes implements Action {
  readonly type = ConfigActionTypes.SET_DATABASE_SIZES;

  constructor(public readonly payload: DatabaseSize[]) {
  }
}

export class ActionConfigChange implements Action {
  readonly type = ConfigActionTypes.CHANGE;

  constructor(public readonly payload: Partial<ConfigState>) {
  }
}

export class ActionConfigClearDatabase implements Action {
  readonly type = ConfigActionTypes.CLEAR_DATABASE;

  constructor(public readonly payload: string[]) {
  }
}

export type ConfigActions =
  | ActionConfigInit
  | ActionConfigUpdate
  | ActionConfigUpdateDatabaseSize
  | ActionConfigSetDevice
  | ActionConfigSetDatabaseSizes
  | ActionConfigChange
  | ActionConfigClearDatabase
  ;

export interface DatabaseSize {
  name: string;
  size: number;
  count: number;
}

export interface DeviceMonitor {
  enable: boolean;
  interval: number;
}

export interface MonitorConfig {
  time: DeviceMonitor;
  temp: DeviceMonitor;
  status: DeviceMonitor;
}

export interface ConfigState {
  device: DeviceConnect;
  databaseSizes: DatabaseSize[];
  updateDatabaseSizes: boolean;
  monitor: MonitorConfig;
  accessControl: AccessControlConfig;
}

export const initialConfigState: ConfigState = {
  device: null,
  databaseSizes: [],
  updateDatabaseSizes: false,
  monitor: {
    time: {
      enable: true,
      interval: 5000,
    },
    temp: {
      enable: true,
      interval: 5000,
    },
    status: {
      enable: true,
      interval: 5000,
    },
  },
  accessControl: {
    enable: false,
    fps: 3,
  },
};

export const selectorConfig = state => state.config as ConfigState;
export const selectorBtDevice = state => (state.config as ConfigState).device;
export const selectorDatabaseSizes = state => (state.config as ConfigState).databaseSizes;
export const selectorUpdateDatabaseSizes = state => (state.config as ConfigState).updateDatabaseSizes;
export const selectorMonitorConfig = state => (state.config as ConfigState).monitor;
export const selectorConfigAccessControl = state => (state.config as ConfigState).accessControl;

export function configReducer(
  state: ConfigState = initialConfigState,
  action: ConfigActions,
): ConfigState {
  switch (action.type) {
    case ConfigActionTypes.UPDATE:
      return updateState(state, action.payload);
    case ConfigActionTypes.UPDATE_DATABASE_SIZES:
      return { ...state, updateDatabaseSizes: true };
    case ConfigActionTypes.SET_DEVICE:
      return setDevice(state, action.payload);
    case ConfigActionTypes.SET_DATABASE_SIZES:
      return setDatabaseSizes(state, action.payload);
    case ConfigActionTypes.CHANGE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

function updateState(state: ConfigState, newState: ConfigState): ConfigState {
  return newState || state;
}

function setDevice(state: ConfigState, device: DeviceConnect): ConfigState {
  return { ...state, device };
}

function setDatabaseSizes(state: ConfigState, databaseSizes: DatabaseSize[]): ConfigState {
  return { ...state, databaseSizes, updateDatabaseSizes: false };
}
