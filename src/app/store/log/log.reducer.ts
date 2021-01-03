import { Action } from '@ngrx/store';
import { DeviceRequestType } from '../../model/device-request-type';
import { DeviceResponseType } from '../../model/device-response-type';
import { ErrorCode } from '../../model/device-status';
import { appConfig } from '../../app-config';

export enum LogActionTypes {
  INIT = '[Log] Init',
  ADD = '[Log] Add',
  RESET_FILTER = '[Log] Reset filter',
  SET_FILTER = '[Log] Set filter',
  TOGGLE_FILTER = '[Log] Toggle filter',
  TOGGLE_EXPAND_FILTER = '[Log] Toggle expand filter',
}

export class ActionLogInit implements Action {
  readonly type = LogActionTypes.INIT;

  constructor() {
  }
}

export class ActionLogAdd implements Action {
  readonly type = LogActionTypes.ADD;

  constructor(public readonly payload: LogItem) {
  }
}

export class ActionLogResetFilter implements Action {
  readonly type = LogActionTypes.RESET_FILTER;

  constructor() {
  }
}

export class ActionLogSetFilter implements Action {
  readonly type = LogActionTypes.SET_FILTER;

  constructor(public readonly payload: LogFilter[]) {
  }
}

export class ActionLogToggleFilter implements Action {
  readonly type = LogActionTypes.TOGGLE_FILTER;

  constructor(public readonly payload: LogFilter) {
  }
}

export class ActionLogToggleExpandFilter implements Action {
  readonly type = LogActionTypes.TOGGLE_EXPAND_FILTER;

  constructor(public readonly payload: LogFilter) {
  }
}

export type LogActions =
  | ActionLogInit
  | ActionLogAdd
  | ActionLogResetFilter
  | ActionLogSetFilter
  | ActionLogToggleFilter
  | ActionLogToggleExpandFilter
  ;

export enum LogItemType {
  connect,
  disconnect,
  response,
  request,
  error,
}

export interface LogItem {
  time: Date;
  icon: string;
  text: string;
  type: LogItemType;
  subType?: number;
}

export interface LogFilter {
  level: number;
  selected: boolean;
  title: string;
  expandable: boolean;
  expanded: boolean;
  visible: boolean;
  type: LogItemType;
  subType?: number;
}

export interface LogState {
  items: LogItem[];
  filteredItems: LogItem[];
  filter: LogFilter[];
  hasFilter: boolean;
}

export const initialLogState: LogState = {
  items: [],
  filteredItems: [],
  filter: getInitialFilter(),
  hasFilter: false,
};

export const selectorLog = state => state.log as LogState;
export const selectorLogItems = state => (state.log as LogState).items;
export const selectorLogFilter = state => (state.log as LogState).filter;
export const selectorLogHasFilter = state => (state.log as LogState).hasFilter;
export const selectorLogFilteredItems = state => (state.log as LogState).filteredItems;

export function logReducer(
  state: LogState = initialLogState,
  action: LogActions,
): LogState {
  switch (action.type) {
    case LogActionTypes.ADD:
      return addLog(state, action.payload);
    case LogActionTypes.RESET_FILTER:
      return resetFilter(state);
    case LogActionTypes.SET_FILTER:
      return setFilter(state, action.payload);
    case LogActionTypes.TOGGLE_FILTER:
      return toggleFilter(state, action.payload);
    case LogActionTypes.TOGGLE_EXPAND_FILTER:
      return toggleExpandFilter(state, action.payload);
    default:
      return state;
  }
}

function addLog(state: LogState, item: LogItem): LogState {
  const items = [item, ...state.items];
  const filteredItems = isFiltered(item, state.filter) ? [item, ...state.filteredItems] : state.filteredItems;
  if (items.length > appConfig.logMaxLength) {
    const last = items.pop();
    if (last === filteredItems[filteredItems.length - 1]) {
      filteredItems.pop();
    }
  }
  return { ...state, items, filteredItems };
}

function resetFilter(state: LogState): LogState {
  const filter = getInitialFilter();
  return {
    ...state,
    filter,
    hasFilter: false,
    filteredItems: getFilteredItems(state.items, filter),
  };
}

function setFilter(state: LogState, filter: LogFilter[]): LogState {
  return {
    ...state,
    filter,
    hasFilter: hasFilter(filter),
    filteredItems: getFilteredItems(state.items, filter),
  };
}

function toggleFilter(state: LogState, filterRow: LogFilter): LogState {
  const filter = state.filter.slice(0);
  const index = filter.findIndex(f => f === filterRow);
  const selected = !filterRow.selected;
  let level = filterRow.level;
  filter[index] = { ...filterRow, selected };
  for (let i = index + 1; i < filter.length; i++) {
    const row = filter[i];
    if (row.level <= level) {
      break;
    }
    filter[i] = { ...row, selected };
  }
  if (level) {
    for (let i = index - 1; i >= 0 && level; i--) {
      const row = filter[i];
      if (row.level >= level) {
        continue;
      }
      let sel = filter[i + 1].selected;
      if (sel !== null) {
        for (let j = i + 2; j < filter.length; j++) {
          if (filter[j].level < level) {
            break;
          }
          if (sel !== filter[j].selected) {
            sel = null;
            break;
          }
        }
      }
      if (row.selected !== sel) {
        filter[i] = { ...row, selected: sel };
      }
      level--;
    }
  }
  return {
    ...state,
    filter,
    hasFilter: hasFilter(filter),
    filteredItems: getFilteredItems(state.items, filter),
  };
}

function toggleExpandFilter(state: LogState, filterRow: LogFilter): LogState {
  const filter = state.filter.slice(0);
  const index = filter.findIndex(f => f === filterRow);
  const expanded = !filterRow.expanded;
  const level = filterRow.level + 1;
  filter[index] = { ...filterRow, expanded };
  for (let i = index + 1; i < filter.length; i++) {
    const row = filter[i];
    if (row.level < level) {
      break;
    }
    filter[i] = { ...row, visible: expanded, expanded };
  }
  return {
    ...state,
    filter,
    hasFilter: hasFilter(filter),
    filteredItems: getFilteredItems(state.items, filter),
  };
}

function getFilteredItems(items: LogItem[], filter: LogFilter[]): LogItem[] {
  return items.filter(i => isFiltered(i, filter));
}

function isFiltered(item: LogItem, filter: LogFilter[]): boolean {
  const row = filter.find(f => f.type === item.type && f.subType === item.subType);
  return !row || row.selected;
}

function enumFilter(level, title, enumType, type): LogFilter[] {
  return [
    {
      level,
      title,
      selected: true,
      expandable: true,
      expanded: true,
      visible: true,
      type,
    },
    ...Object.keys(enumType)
      .filter(key => isNaN(+key))
      .map(key => ({
        level: level + 1,
        title: getFilterTitle(key),
        selected: true,
        expandable: false,
        expanded: true,
        visible: true,
        type,
        subType: enumType[key],
      })),
  ];
}

function getInitialFilter(): LogFilter[] {
  return [
    {
      level: 0,
      title: 'Bluetooth',
      selected: true,
      expandable: true,
      expanded: true,
      visible: true,
      type: LogItemType.connect,
    },
    {
      level: 1,
      title: 'Connect',
      selected: true,
      expandable: false,
      expanded: true,
      visible: true,
      type: LogItemType.connect,
    },
    {
      level: 1,
      title: 'Disconnect',
      selected: true,
      expandable: false,
      expanded: true,
      visible: true,
      type: LogItemType.disconnect,
    },
    ...enumFilter(1, 'Device Request', DeviceRequestType, LogItemType.request),
    ...enumFilter(1, 'Device Response', DeviceResponseType, LogItemType.response),
    ...enumFilter(0, 'Errors', ErrorCode, LogItemType.error),
  ];
}

function hasFilter(filter) {
  return !filter.every(f => f.selected);
}

function getFilterTitle(str) {
  return (str.slice(0, 1).toUpperCase() + str.slice(1))
    .split(/(?=[A-Z])/)
    .join(' ');
}
