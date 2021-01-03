import { Action } from '@ngrx/store';
import { DbAccessControlCamshot, DbAccessControlEpisode } from '../../services/storage/db.service';

export enum AccessControlActionTypes {
  INIT = '[AccessControl] Init',
  ADD = '[AccessControl] Add',
  UPDATE = '[AccessControl] Update',
}

export class ActionAccessControlInit implements Action {
  readonly type = AccessControlActionTypes.INIT;

  constructor() {
  }
}

export class ActionAccessControlAdd implements Action {
  readonly type = AccessControlActionTypes.ADD;

  constructor(public readonly payload: DbAccessControlCamshot) {
  }
}

export class ActionAccessControlUpdate implements Action {
  readonly type = AccessControlActionTypes.UPDATE;

  constructor(public readonly payload: DbAccessControlEpisode[]) {
  }
}

export type AccessControlActions =
  | ActionAccessControlInit
  | ActionAccessControlAdd
  | ActionAccessControlUpdate
  ;

export interface AccessControlState {
  items: DbAccessControlEpisode[];
}

export const initialAccessControlState: AccessControlState = {
  items: [],
};

export const selectorAccessControl = state => state.accessControl as AccessControlState;
export const selectorAccessControlItems = state => (state.accessControl as AccessControlState).items;
export const selectorAccessControlLastEpisode = state => (state.accessControl as AccessControlState).items[0];

export function accessControlReducer(
  state: AccessControlState = initialAccessControlState,
  action: AccessControlActions,
): AccessControlState {
  switch (action.type) {
    case AccessControlActionTypes.ADD:
      return addAccessControl(state, action.payload);
    case AccessControlActionTypes.UPDATE:
      return { ...state, items: action.payload };
    default:
      return state;
  }
}

function addAccessControl(state: AccessControlState, camshot: DbAccessControlCamshot): AccessControlState {
  const newEpisode = !state.items.length || camshot.key - state.items[0].value.lastKey > 60000;
  let episode;
  let items;
  if (newEpisode) {
    episode = { key: camshot.key, value: { lastKey: camshot.key } };
    items = [episode, ...state.items];
    return { ...state, items };
  }
  episode = { ...state.items[0], value: { lastKey: camshot.key } };
  items = state.items.slice(0);
  items[0] = episode;
  return { ...state, items };
}
