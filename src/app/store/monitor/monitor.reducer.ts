import { Action } from '@ngrx/store';

export enum MonitorActionTypes {
  INIT = '[Monitor] Init',
  UPDATE_TEMP = '[Monitor] Update temp',
  UPDATE_FLOW = '[Monitor] Update flow',
}

export class ActionMonitorInit implements Action {
  readonly type = MonitorActionTypes.INIT;

  constructor() {
  }
}

export class ActionMonitorUpdateTemp implements Action {
  readonly type = MonitorActionTypes.UPDATE_TEMP;

  constructor(public readonly payload: ChartData) {
  }
}

export class ActionMonitorUpdateFlow implements Action {
  readonly type = MonitorActionTypes.UPDATE_FLOW;

  constructor(public readonly payload: ChartData) {
  }
}

export type MonitorActions =
  | ActionMonitorInit
  | ActionMonitorUpdateTemp
  | ActionMonitorUpdateFlow
  ;

export interface ChartData {
  xData: string[];
  yData: number[];
}

export interface MonitorState {
  temp: ChartData;
  flow: ChartData;
}

export const initialMonitorState: MonitorState = {
  temp: {
    xData: [],
    yData: [],
  },
  flow: {
    xData: [],
    yData: [],
  },
};

export const selectorMonitor = state => state.monitor as MonitorState;
export const selectorMonitorTemp = state => (state.monitor as MonitorState).temp;
export const selectorMonitorFlow = state => (state.monitor as MonitorState).flow;

export function monitorReducer(
  state: MonitorState = initialMonitorState,
  action: MonitorActions,
): MonitorState {
  switch (action.type) {
    case MonitorActionTypes.UPDATE_TEMP:
      return updateTemp(state, action.payload);
    case MonitorActionTypes.UPDATE_FLOW:
      return updateFlow(state, action.payload);
    default:
      return state;
  }
}

function updateTemp(state: MonitorState, temp: ChartData): MonitorState {
  return { ...state, temp };
}

function updateFlow(state: MonitorState, flow: ChartData): MonitorState {
  return { ...state, flow };
}
