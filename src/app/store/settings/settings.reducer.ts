import { Action } from '@ngrx/store';
import {
  Compote,
  CompoteDaily,
  Dose,
  LevelSensor,
  Mixer,
  Program,
  Pump,
  Schedule,
  Settings,
  Timer,
} from '../../auto/struct';
import {
  defaultCompote,
  defaultCompoteDaily,
  defaultDoseSettings,
  defaultLevelSensorSettings,
  defaultMixerSettings,
  defaultNames,
  defaultPinAssignment,
  defaultProgram,
  defaultPumpSettings,
  defaultSchedule,
  defaultSettings,
  defaultTimer,
} from '../../model/default-settings';
import { DevicePinType, PinAssignment } from '../../model/device-parts';
import { deviceConfig } from '../../model/device-config';

export enum SettingsActionTypes {
  INIT = '[Settings] Init',
  UPDATE = '[Settings] Update',
  CHANGE_NAME = '[Settings] Change name',
  ADD_COMPOTE = '[Settings] Add compote',
  CHANGE_COMPOTE = '[Settings] Change compote',
  REMOVE_COMPOTE = '[Settings] Remove compote',
  LOAD_COMPOTE = '[Settings] Load compote',
  UPDATE_COMPOTE = '[Settings] Update compote',
  ADD_COMPOTE_DAILY = '[Settings] Add compote daily',
  CHANGE_COMPOTE_DAILY = '[Settings] Change compote daily',
  REMOVE_COMPOTE_DAILY = '[Settings] Remove compote daily',
  LOAD_COMPOTE_DAILY = '[Settings] Load compote daily',
  UPDATE_COMPOTE_DAILY = '[Settings] Update compote daily',
  ADD_PROGRAM = '[Settings] Add program',
  CHANGE_PROGRAM = '[Settings] Change program',
  REMOVE_PROGRAM = '[Settings] Remove program',
  LOAD_PROGRAM = '[Settings] Load program',
  UPDATE_PROGRAM = '[Settings] Update program',
  ADD_PUMP = '[Settings] Add pump',
  CHANGE_PUMP = '[Settings] Change pump',
  REMOVE_PUMP = '[Settings] Remove pump',
  LOAD_PUMP = '[Settings] Load pump',
  UPDATE_PUMP = '[Settings] Update pump',
  ADD_DOSE = '[Settings] Add dose',
  CHANGE_DOSE = '[Settings] Change dose',
  REMOVE_DOSE = '[Settings] Remove dose',
  LOAD_DOSE = '[Settings] Load dose',
  UPDATE_DOSE = '[Settings] Update dose',
  ADD_TIMER = '[Settings] Add timer',
  CHANGE_TIMER = '[Settings] Change timer',
  REMOVE_TIMER = '[Settings] Remove timer',
  LOAD_TIMER = '[Settings] Load timer',
  UPDATE_TIMER = '[Settings] Update timer',
  ADD_SCHEDULE = '[Settings] Add schedule',
  CHANGE_SCHEDULE = '[Settings] Change schedule',
  REMOVE_SCHEDULE = '[Settings] Remove schedule',
  LOAD_SCHEDULE = '[Settings] Load schedule',
  UPDATE_SCHEDULE = '[Settings] Update schedule',
  ADD_MIXER = '[Settings] Add mixer',
  CHANGE_MIXER = '[Settings] Change mixer',
  REMOVE_MIXER = '[Settings] Remove mixer',
  LOAD_MIXER = '[Settings] Load mixer',
  UPDATE_MIXER = '[Settings] Update mixer',
  ADD_LEVEL_SENSOR = '[Settings] Add level sensor',
  CHANGE_LEVEL_SENSOR = '[Settings] Change level sensor',
  REMOVE_LEVEL_SENSOR = '[Settings] Remove level sensor',
  LOAD_LEVEL_SENSOR = '[Settings] Load level sensor',
  UPDATE_LEVEL_SENSOR = '[Settings] Update level sensor',
  CHANGE_PIN_ASSIGNMENT = '[Settings] Change pin assignment',
  LOAD_PIN_ASSIGNMENT = '[Settings] Load pin assignment',
  UPDATE_PIN_ASSIGNMENT = '[Settings] Update pin assignment',
  SYNC = '[Settings] Sync',
  SYNC_END = '[Settings] Sync end',
  BACKUP = '[Settings] Backup',
  RESTORE = '[Settings] Restore',
  BACKUP_REMOVE = '[Settings] Backup remove',
}

export class ActionSettingsInit implements Action {
  readonly type = SettingsActionTypes.INIT;

  constructor() {
  }
}

export class ActionSettingsUpdate implements Action {
  readonly type = SettingsActionTypes.UPDATE;

  constructor(public readonly payload?: SettingsState) {
  }
}

export class ActionSettingsAddCompote implements Action {
  readonly type = SettingsActionTypes.ADD_COMPOTE;

  constructor() {
  }
}

export class ActionSettingsChangeCompote implements Action {
  readonly type = SettingsActionTypes.CHANGE_COMPOTE;

  constructor(public readonly payload: { index: number, value: Compote }) {
  }
}

export class ActionSettingsRemoveCompote implements Action {
  readonly type = SettingsActionTypes.REMOVE_COMPOTE;

  constructor(public readonly payload: number) {
  }
}

export class ActionSettingsUpdateCompote implements Action {
  readonly type = SettingsActionTypes.UPDATE_COMPOTE;

  constructor(public readonly payload: { index: number, value: Compote }) {
  }
}

export class ActionSettingsLoadCompote implements Action {
  readonly type = SettingsActionTypes.LOAD_COMPOTE;

  constructor() {
  }
}

export class ActionSettingsAddCompoteDaily implements Action {
  readonly type = SettingsActionTypes.ADD_COMPOTE_DAILY;

  constructor(public readonly payload: number) {
  }
}

export class ActionSettingsChangeCompoteDaily implements Action {
  readonly type = SettingsActionTypes.CHANGE_COMPOTE_DAILY;

  constructor(public readonly payload: { index: number, dailyIndex: number, value: CompoteDaily }) {
  }
}

export class ActionSettingsRemoveCompoteDaily implements Action {
  readonly type = SettingsActionTypes.REMOVE_COMPOTE_DAILY;

  constructor(public readonly payload: { index: number, dailyIndex: number }) {
  }
}

export class ActionSettingsUpdateCompoteDaily implements Action {
  readonly type = SettingsActionTypes.UPDATE_COMPOTE_DAILY;

  constructor(public readonly payload: { index: number, dailyIndex: number, value: CompoteDaily }) {
  }
}

export class ActionSettingsLoadCompoteDaily implements Action {
  readonly type = SettingsActionTypes.LOAD_COMPOTE_DAILY;

  constructor() {
  }
}

export class ActionSettingsAddProgram implements Action {
  readonly type = SettingsActionTypes.ADD_PROGRAM;

  constructor() {
  }
}

export class ActionSettingsChangeProgram implements Action {
  readonly type = SettingsActionTypes.CHANGE_PROGRAM;

  constructor(public readonly payload: { index: number, value: Program }) {
  }
}

export class ActionSettingsRemoveProgram implements Action {
  readonly type = SettingsActionTypes.REMOVE_PROGRAM;

  constructor(public readonly payload: number) {
  }
}

export class ActionSettingsUpdateProgram implements Action {
  readonly type = SettingsActionTypes.UPDATE_PROGRAM;

  constructor(public readonly payload: { index: number, value: Program }) {
  }
}

export class ActionSettingsLoadProgram implements Action {
  readonly type = SettingsActionTypes.LOAD_PROGRAM;

  constructor() {
  }
}

export class ActionSettingsAddPump implements Action {
  readonly type = SettingsActionTypes.ADD_PUMP;

  constructor() {
  }
}

export class ActionSettingsChangePump implements Action {
  readonly type = SettingsActionTypes.CHANGE_PUMP;

  constructor(public readonly payload: { index: number, value: Pump }) {
  }
}

export class ActionSettingsRemovePump implements Action {
  readonly type = SettingsActionTypes.REMOVE_PUMP;

  constructor(public readonly payload: number) {
  }
}

export class ActionSettingsUpdatePump implements Action {
  readonly type = SettingsActionTypes.UPDATE_PUMP;

  constructor(public readonly payload: { index: number, value: Pump }) {
  }
}

export class ActionSettingsLoadPump implements Action {
  readonly type = SettingsActionTypes.LOAD_PUMP;

  constructor() {
  }
}

export class ActionSettingsAddDose implements Action {
  readonly type = SettingsActionTypes.ADD_DOSE;

  constructor() {
  }
}

export class ActionSettingsChangeDose implements Action {
  readonly type = SettingsActionTypes.CHANGE_DOSE;

  constructor(public readonly payload: { index: number, value: Dose }) {
  }
}

export class ActionSettingsRemoveDose implements Action {
  readonly type = SettingsActionTypes.REMOVE_DOSE;

  constructor(public readonly payload: number) {
  }
}

export class ActionSettingsUpdateDose implements Action {
  readonly type = SettingsActionTypes.UPDATE_DOSE;

  constructor(public readonly payload: { index: number, value: Dose }) {
  }
}

export class ActionSettingsLoadDose implements Action {
  readonly type = SettingsActionTypes.LOAD_DOSE;

  constructor() {
  }
}

export class ActionSettingsAddTimer implements Action {
  readonly type = SettingsActionTypes.ADD_TIMER;

  constructor() {
  }
}

export class ActionSettingsChangeTimer implements Action {
  readonly type = SettingsActionTypes.CHANGE_TIMER;

  constructor(public readonly payload: { index: number, value: Timer }) {
  }
}

export class ActionSettingsRemoveTimer implements Action {
  readonly type = SettingsActionTypes.REMOVE_TIMER;

  constructor(public readonly payload: number) {
  }
}

export class ActionSettingsUpdateTimer implements Action {
  readonly type = SettingsActionTypes.UPDATE_TIMER;

  constructor(public readonly payload: { index: number, value: Timer }) {
  }
}

export class ActionSettingsLoadTimer implements Action {
  readonly type = SettingsActionTypes.LOAD_TIMER;

  constructor() {
  }
}

export class ActionSettingsAddSchedule implements Action {
  readonly type = SettingsActionTypes.ADD_SCHEDULE;

  constructor() {
  }
}

export class ActionSettingsChangeSchedule implements Action {
  readonly type = SettingsActionTypes.CHANGE_SCHEDULE;

  constructor(public readonly payload: { index: number, value: Schedule }) {
  }
}

export class ActionSettingsRemoveSchedule implements Action {
  readonly type = SettingsActionTypes.REMOVE_SCHEDULE;

  constructor(public readonly payload: number) {
  }
}

export class ActionSettingsUpdateSchedule implements Action {
  readonly type = SettingsActionTypes.UPDATE_SCHEDULE;

  constructor(public readonly payload: { index: number, value: Schedule }) {
  }
}

export class ActionSettingsLoadSchedule implements Action {
  readonly type = SettingsActionTypes.LOAD_SCHEDULE;

  constructor() {
  }
}

export class ActionSettingsAddMixer implements Action {
  readonly type = SettingsActionTypes.ADD_MIXER;

  constructor() {
  }
}

export class ActionSettingsChangeMixer implements Action {
  readonly type = SettingsActionTypes.CHANGE_MIXER;

  constructor(public readonly payload: { index: number, value: Mixer }) {
  }
}

export class ActionSettingsRemoveMixer implements Action {
  readonly type = SettingsActionTypes.REMOVE_MIXER;

  constructor(public readonly payload: number) {
  }
}

export class ActionSettingsUpdateMixer implements Action {
  readonly type = SettingsActionTypes.UPDATE_MIXER;

  constructor(public readonly payload: { index: number, value: Mixer }) {
  }
}

export class ActionSettingsLoadMixer implements Action {
  readonly type = SettingsActionTypes.LOAD_MIXER;

  constructor() {
  }
}

export class ActionSettingsAddLevelSensor implements Action {
  readonly type = SettingsActionTypes.ADD_LEVEL_SENSOR;

  constructor() {
  }
}

export class ActionSettingsChangeLevelSensor implements Action {
  readonly type = SettingsActionTypes.CHANGE_LEVEL_SENSOR;

  constructor(public readonly payload: { index: number, value: LevelSensor }) {
  }
}

export class ActionSettingsRemoveLevelSensor implements Action {
  readonly type = SettingsActionTypes.REMOVE_LEVEL_SENSOR;

  constructor(public readonly payload: number) {
  }
}

export class ActionSettingsUpdateLevelSensor implements Action {
  readonly type = SettingsActionTypes.UPDATE_LEVEL_SENSOR;

  constructor(public readonly payload: { index: number, value: LevelSensor }) {
  }
}

export class ActionSettingsLoadLevelSensor implements Action {
  readonly type = SettingsActionTypes.LOAD_LEVEL_SENSOR;

  constructor() {
  }
}

export class ActionSettingsLoadPinAssignment implements Action {
  readonly type = SettingsActionTypes.LOAD_PIN_ASSIGNMENT;

  constructor() {
  }
}

export class ActionSettingsChangePinAssignment implements Action {
  readonly type = SettingsActionTypes.CHANGE_PIN_ASSIGNMENT;

  constructor(public readonly payload: { type: number, index: number, value: number }) {
  }
}

export class ActionSettingsUpdatePinAssignment implements Action {
  readonly type = SettingsActionTypes.UPDATE_PIN_ASSIGNMENT;

  constructor(public readonly payload: { type: number, index: number, value: number }) {
  }
}

export class ActionSettingsChangeName implements Action {
  readonly type = SettingsActionTypes.CHANGE_NAME;

  constructor(public readonly payload: { key: string, index: number, value: string }) {
  }
}

export class ActionSettingsSync implements Action {
  readonly type = SettingsActionTypes.SYNC;

  constructor() {
  }
}

export class ActionSettingsSyncEnd implements Action {
  readonly type = SettingsActionTypes.SYNC_END;

  constructor() {
  }
}

export class ActionSettingsBackup implements Action {
  readonly type = SettingsActionTypes.BACKUP;

  constructor(public payload: { name: string }) {
  }
}

export class ActionSettingsRestore implements Action {
  readonly type = SettingsActionTypes.RESTORE;

  constructor(public payload: number) {
  }
}

export class ActionSettingsBackupRemove implements Action {
  readonly type = SettingsActionTypes.BACKUP_REMOVE;

  constructor(public payload: number) {
  }
}

export type SettingsActions =
  | ActionSettingsInit
  | ActionSettingsUpdate
  | ActionSettingsAddCompote
  | ActionSettingsChangeCompote
  | ActionSettingsRemoveCompote
  | ActionSettingsUpdateCompote
  | ActionSettingsLoadCompote
  | ActionSettingsAddCompoteDaily
  | ActionSettingsChangeCompoteDaily
  | ActionSettingsRemoveCompoteDaily
  | ActionSettingsUpdateCompoteDaily
  | ActionSettingsLoadCompoteDaily
  | ActionSettingsAddProgram
  | ActionSettingsChangeProgram
  | ActionSettingsRemoveProgram
  | ActionSettingsUpdateProgram
  | ActionSettingsLoadProgram
  | ActionSettingsAddPump
  | ActionSettingsChangePump
  | ActionSettingsRemovePump
  | ActionSettingsUpdatePump
  | ActionSettingsLoadPump
  | ActionSettingsAddDose
  | ActionSettingsChangeDose
  | ActionSettingsRemoveDose
  | ActionSettingsUpdateDose
  | ActionSettingsLoadDose
  | ActionSettingsAddTimer
  | ActionSettingsChangeTimer
  | ActionSettingsRemoveTimer
  | ActionSettingsUpdateTimer
  | ActionSettingsLoadTimer
  | ActionSettingsAddSchedule
  | ActionSettingsChangeSchedule
  | ActionSettingsRemoveSchedule
  | ActionSettingsUpdateSchedule
  | ActionSettingsLoadSchedule
  | ActionSettingsAddMixer
  | ActionSettingsChangeMixer
  | ActionSettingsRemoveMixer
  | ActionSettingsUpdateMixer
  | ActionSettingsLoadMixer
  | ActionSettingsAddLevelSensor
  | ActionSettingsChangeLevelSensor
  | ActionSettingsRemoveLevelSensor
  | ActionSettingsUpdateLevelSensor
  | ActionSettingsLoadLevelSensor
  | ActionSettingsChangePinAssignment
  | ActionSettingsLoadPinAssignment
  | ActionSettingsUpdatePinAssignment
  | ActionSettingsChangeName
  | ActionSettingsSync
  | ActionSettingsSyncEnd
  | ActionSettingsBackup
  | ActionSettingsRestore
  | ActionSettingsBackupRemove
  ;

export interface SettingsBackup {
  name: string;
  date: Date;
  backup: {
    settings: Settings;
    pinAssignment: PinAssignment;
    names: { [key in keyof Settings]: string[] };
  };
}

export interface SettingsState {
  settings: Settings;
  pinAssignment: PinAssignment;
  names: { [key in keyof Settings]: string[] };
  sync: boolean;
  backups: SettingsBackup[];
}

export function getInitialSettingsState(): SettingsState {
  return {
    settings: defaultSettings(),
    pinAssignment: defaultPinAssignment(),
    names: defaultNames(),
    sync: false,
    backups: [],
  };
}

export const selectorSettings = state => state.settings as SettingsState;
export const selectorDeviceSettings = state => (state.settings as SettingsState).settings;
export const selectorPrograms = state => (state.settings as SettingsState).settings.program;
export const selectorProgram = index => state => (state.settings as SettingsState).settings.program[index];
export const selectorCompotes = state => (state.settings as SettingsState).settings.compote;
export const selectorCompote = index => state => (state.settings as SettingsState).settings.compote[index];
export const selectorCompoteDaily = id => index => state => (state.settings as SettingsState).settings.compote[id].daily[index];
export const selectorTimers = state => (state.settings as SettingsState).settings.timer;
export const selectorTimer = index => state => (state.settings as SettingsState).settings.timer[index];
export const selectorSchedules = state => (state.settings as SettingsState).settings.schedule;
export const selectorSchedule = index => state => (state.settings as SettingsState).settings.schedule[index];
export const selectorPumps = state => (state.settings as SettingsState).settings.pump;
export const selectorPump = index => state => (state.settings as SettingsState).settings.pump[index];
export const selectorMixers = state => (state.settings as SettingsState).settings.mixer;
export const selectorMixer = index => state => (state.settings as SettingsState).settings.mixer[index];
export const selectorDoses = state => (state.settings as SettingsState).settings.dose;
export const selectorDose = index => state => (state.settings as SettingsState).settings.dose[index];
export const selectorLevelSensors = state => (state.settings as SettingsState).settings.levelSensor;
export const selectorLevelSensor = index => state => (state.settings as SettingsState).settings.levelSensor[index];
export const selectorPinAssignment = state => (state.settings as SettingsState).pinAssignment as PinAssignment;
export const selectorPinPump = index => state => (state.settings as SettingsState).pinAssignment.pump[index];
export const selectorPinPumps = state => (state.settings as SettingsState).pinAssignment.pump;
export const selectorPinFlowSensor = index => state => (state.settings as SettingsState).pinAssignment.flowSensor[index];
export const selectorPinFlowSensors = state => (state.settings as SettingsState).pinAssignment.flowSensor;
export const selectorPinMixer = index => state => (state.settings as SettingsState).pinAssignment.mixer[index];
export const selectorPinMixers = state => (state.settings as SettingsState).pinAssignment.mixer;
export const selectorPinDose = index => state => (state.settings as SettingsState).pinAssignment.dose[index];
export const selectorPinDoses = state => (state.settings as SettingsState).pinAssignment.dose;
export const selectorPinDoseMixer = index => state => (state.settings as SettingsState).pinAssignment.doseMixer[index];
export const selectorPinDoseMixers = state => (state.settings as SettingsState).pinAssignment.doseMixer;
export const selectorPinValve = index => state => (state.settings as SettingsState).pinAssignment.valve[index];
export const selectorPinValves = state => (state.settings as SettingsState).pinAssignment.valve;
export const selectorPinLevelSensor = index => state => (state.settings as SettingsState).pinAssignment.levelSensor[index];
export const selectorPinLevelSensors = state => (state.settings as SettingsState).pinAssignment.levelSensor;
export const selectorPinBeepers = state => (state.settings as SettingsState).pinAssignment.beeper;
export const selectorNames = key => state => (state.settings as SettingsState).names[key];
export const selectorSettingsSync = state => (state.settings as SettingsState).sync;
export const selectorSettingsBackups = state => (state.settings as SettingsState).backups;

export function settingsReducer(
  state: SettingsState = getInitialSettingsState(),
  action: SettingsActions,
): SettingsState {
  switch (action.type) {
    case SettingsActionTypes.UPDATE:
      return updateState(state, action.payload);
    case SettingsActionTypes.CHANGE_NAME:
      return changeName(state, action.payload);
    case SettingsActionTypes.ADD_COMPOTE:
      return addCompote(state);
    case SettingsActionTypes.CHANGE_COMPOTE:
      return changeCompote(state, action.payload);
    case SettingsActionTypes.REMOVE_COMPOTE:
      return removeCompote(state, action.payload);
    case SettingsActionTypes.ADD_COMPOTE_DAILY:
      return addCompoteDaily(state, action.payload);
    case SettingsActionTypes.CHANGE_COMPOTE_DAILY:
    case SettingsActionTypes.UPDATE_COMPOTE_DAILY:
      return changeCompoteDaily(state, action.payload);
    case SettingsActionTypes.LOAD_COMPOTE_DAILY:
      return state;
    case SettingsActionTypes.REMOVE_COMPOTE_DAILY:
      return removeCompoteDaily(state, action.payload);
    case SettingsActionTypes.ADD_PROGRAM:
      return addProgram(state);
    case SettingsActionTypes.CHANGE_PROGRAM:
    case SettingsActionTypes.UPDATE_PROGRAM:
      return changeProgram(state, action.payload);
    case SettingsActionTypes.LOAD_PROGRAM:
      return state;
    case SettingsActionTypes.REMOVE_PROGRAM:
      return removeProgram(state, action.payload);
    case SettingsActionTypes.ADD_DOSE:
      return addDose(state);
    case SettingsActionTypes.CHANGE_DOSE:
    case SettingsActionTypes.UPDATE_DOSE:
      return changeDose(state, action.payload);
    case SettingsActionTypes.LOAD_DOSE:
      return state;
    case SettingsActionTypes.REMOVE_DOSE:
      return removeDose(state, action.payload);
    case SettingsActionTypes.ADD_PUMP:
      return addPump(state);
    case SettingsActionTypes.CHANGE_PUMP:
    case SettingsActionTypes.UPDATE_PUMP:
      return changePump(state, action.payload);
    case SettingsActionTypes.LOAD_PUMP:
      return state;
    case SettingsActionTypes.REMOVE_PUMP:
      return removePump(state, action.payload);
    case SettingsActionTypes.ADD_TIMER:
      return addTimer(state);
    case SettingsActionTypes.CHANGE_TIMER:
    case SettingsActionTypes.UPDATE_TIMER:
      return changeTimer(state, action.payload);
    case SettingsActionTypes.LOAD_TIMER:
      return state;
    case SettingsActionTypes.REMOVE_TIMER:
      return removeTimer(state, action.payload);
    case SettingsActionTypes.ADD_SCHEDULE:
      return addSchedule(state);
    case SettingsActionTypes.CHANGE_SCHEDULE:
    case SettingsActionTypes.UPDATE_SCHEDULE:
      return changeSchedule(state, action.payload);
    case SettingsActionTypes.LOAD_SCHEDULE:
      return state;
    case SettingsActionTypes.REMOVE_SCHEDULE:
      return removeSchedule(state, action.payload);
    case SettingsActionTypes.ADD_MIXER:
      return addMixer(state);
    case SettingsActionTypes.CHANGE_MIXER:
    case SettingsActionTypes.UPDATE_MIXER:
      return changeMixer(state, action.payload);
    case SettingsActionTypes.LOAD_MIXER:
      return state;
    case SettingsActionTypes.REMOVE_MIXER:
      return removeMixer(state, action.payload);
    case SettingsActionTypes.ADD_LEVEL_SENSOR:
      return addLevelSensor(state);
    case SettingsActionTypes.CHANGE_LEVEL_SENSOR:
    case SettingsActionTypes.UPDATE_LEVEL_SENSOR:
      return changeLevelSensor(state, action.payload);
    case SettingsActionTypes.LOAD_LEVEL_SENSOR:
      return state;
    case SettingsActionTypes.REMOVE_LEVEL_SENSOR:
      return removeLevelSensor(state, action.payload);
    case SettingsActionTypes.LOAD_PIN_ASSIGNMENT:
      return state;
    case SettingsActionTypes.CHANGE_PIN_ASSIGNMENT:
    case SettingsActionTypes.UPDATE_PIN_ASSIGNMENT:
      return changePinAssignment(state, action.payload);
    case SettingsActionTypes.SYNC:
      return { ...state, sync: true };
    case SettingsActionTypes.SYNC_END:
      return { ...state, sync: false };
    case SettingsActionTypes.BACKUP:
      return backup(state, action.payload);
    case SettingsActionTypes.RESTORE:
      return restore(state, action.payload);
    case SettingsActionTypes.BACKUP_REMOVE:
      return backupRemove(state, action.payload);
    default:
      return state;
  }
}

function updateState(state: SettingsState, newState: SettingsState) {
  if (!newState) {
    return state;
  }
  const nextState: SettingsState = {
    ...newState,
    settings: {
      program: fixArray(newState.settings.program, deviceConfig.programCount, defaultProgram),
      compote: fixArray(newState.settings.compote, deviceConfig.compoteCount, defaultCompote),
      schedule: fixArray(newState.settings.schedule, deviceConfig.scheduleCount, defaultSchedule),
      timer: fixArray(newState.settings.timer, deviceConfig.timerCount, defaultTimer),
      pump: fixArray(newState.settings.pump, deviceConfig.pumpCount, defaultPumpSettings),
      levelSensor: fixArray(newState.settings.levelSensor, deviceConfig.levelSensorCount, defaultLevelSensorSettings),
      mixer: fixArray(newState.settings.mixer, deviceConfig.mixerCount, defaultMixerSettings),
      dose: fixArray(newState.settings.dose, deviceConfig.doseCount, defaultDoseSettings),
    },
    pinAssignment: {
      pump: fixArray(newState.pinAssignment.pump, deviceConfig.pumpCount, defaultPin),
      levelSensor: fixArray(newState.pinAssignment.levelSensor, deviceConfig.levelSensorCount, defaultPin),
      mixer: fixArray(newState.pinAssignment.mixer, deviceConfig.mixerCount, defaultPin),
      dose: fixArray(newState.pinAssignment.dose, deviceConfig.doseCount, defaultPin),
      valve: fixArray(newState.pinAssignment.valve, deviceConfig.valveCount, defaultPin),
      doseMixer: fixArray(newState.pinAssignment.doseMixer, deviceConfig.doseMixerCount, defaultPin),
      flowSensor: fixArray(newState.pinAssignment.flowSensor, deviceConfig.flowSensorCount, defaultPin),
      rtc: fixArray(newState.pinAssignment.rtc, deviceConfig.rtcCount, defaultPin),
      display: newState.pinAssignment.display,
      button: fixArray(newState.pinAssignment.button, deviceConfig.buttonCount, defaultPin),
      beeper: fixArray(newState.pinAssignment.beeper, deviceConfig.beeperCount, defaultPin),
    },
  };
  return nextState;
}

function defaultPin() {
  return 0;
}

function fixArray<T>(array: T[], length: number, fillFn: (() => T)): T[] {
  if (array.length === length) {
    return array;
  }
  if (array.length > length) {
    return array.slice(0, length);
  }
  const fixed = array.slice();
  for (let i = array.length; i < length; i++) {
    fixed.push(fillFn());
  }
  return fixed;
}

function changeName(state, { key, index, value }) {
  const names = state.names[key].slice(0);
  names[index] = value;
  return { ...state, names: { ...state.names, [key]: names } };
}

function addCompoteDaily(state: SettingsState, index): SettingsState {
  return {
    ...state,
    settings: {
      ...state.settings,
      compote: state.settings.compote.map((compote, i) =>
        i === index ? { ...compote, daily: [...compote.daily, defaultCompoteDaily()] } : compote),
    },
  };
}

function changeCompoteDaily(
  state: SettingsState,
  { index, dailyIndex, value }: { index: number, dailyIndex: number, value: CompoteDaily },
): SettingsState {
  const compote = state.settings.compote.slice(0);
  const daily = compote[index].daily.slice(0);
  daily[dailyIndex] = value;
  compote[index] = {
    ...compote[index],
    daily,
  };
  return {
    ...state, settings: {
      ...state.settings,
      compote,
    },
  };
}

function removeCompoteDaily(
  state: SettingsState,
  { index, dailyIndex }: { index: number, dailyIndex: number },
): SettingsState {
  const compote = state.settings.compote.slice(0);
  compote.splice(index, 1);
  return {
    ...state, settings: {
      ...state.settings,
      compote,
    },
  };
}

function addCompote(state: SettingsState): SettingsState {
  return {
    ...state, settings: {
      ...state.settings, compote: [
        ...state.settings.compote, {
          daily: [],
        },
      ],
    },
  };
}

function changeCompote(state: SettingsState, { index, value }: { index: number, value: Compote }): SettingsState {
  const compote = state.settings.compote.slice(0);
  compote[index] = value;
  return {
    ...state, settings: {
      ...state.settings, compote,
    },
  };
}

function removeCompote(state: SettingsState, index: number): SettingsState {
  const compote = state.settings.compote.slice(0);
  compote.splice(index, 1);
  return {
    ...state, settings: {
      ...state.settings, compote,
    },
  };
}

function addProgram(state: SettingsState): SettingsState {
  return {
    ...state, settings: {
      ...state.settings, program: [
        ...state.settings.program, defaultProgram(),
      ],
    },
  };
}

function changeProgram(state: SettingsState, { index, value }: { index: number, value: Program }): SettingsState {
  const program = state.settings.program.slice(0);
  program[index] = value;
  return {
    ...state, settings: {
      ...state.settings, program,
    },
  };
}

function removeProgram(state: SettingsState, index: number): SettingsState {
  const program = state.settings.program.slice(0);
  program.splice(index, 1);
  return {
    ...state, settings: {
      ...state.settings, program,
    },
  };
}

function addPump(state: SettingsState): SettingsState {
  return {
    ...state, settings: {
      ...state.settings, pump: [
        ...state.settings.pump, defaultPumpSettings(),
      ],
    },
  };
}

function changePump(state: SettingsState, { index, value }: { index: number, value: Pump }): SettingsState {
  const pump = state.settings.pump.slice(0);
  pump[index] = value;
  return {
    ...state, settings: {
      ...state.settings, pump,
    },
  };
}

function removePump(state: SettingsState, index: number): SettingsState {
  const pump = state.settings.pump.slice(0);
  pump.splice(index, 1);
  return {
    ...state, settings: {
      ...state.settings, pump,
    },
  };
}

function addDose(state: SettingsState): SettingsState {
  return {
    ...state, settings: {
      ...state.settings, dose: [
        ...state.settings.dose, defaultDoseSettings(),
      ],
    },
  };
}

function changeDose(state: SettingsState, { index, value }: { index: number, value: Dose }): SettingsState {
  const dose = state.settings.dose.slice(0);
  dose[index] = value;
  return {
    ...state, settings: {
      ...state.settings, dose,
    },
  };
}

function removeDose(state: SettingsState, index: number): SettingsState {
  const dose = state.settings.dose.slice(0);
  dose.splice(index, 1);
  return {
    ...state, settings: {
      ...state.settings, dose,
    },
  };
}

function addMixer(state: SettingsState): SettingsState {
  return {
    ...state, settings: {
      ...state.settings, mixer: [
        ...state.settings.mixer, defaultMixerSettings(),
      ],
    },
  };
}

function changeMixer(state: SettingsState, { index, value }: { index: number, value: Mixer }): SettingsState {
  const mixer = state.settings.mixer.slice(0);
  mixer[index] = value;
  return {
    ...state, settings: {
      ...state.settings, mixer,
    },
  };
}

function removeMixer(state: SettingsState, index: number): SettingsState {
  const mixer = state.settings.mixer.slice(0);
  mixer.splice(index, 1);
  return {
    ...state, settings: {
      ...state.settings, mixer,
    },
  };
}

function addLevelSensor(state: SettingsState): SettingsState {
  return {
    ...state, settings: {
      ...state.settings, levelSensor: [
        ...state.settings.levelSensor, defaultLevelSensorSettings(),
      ],
    },
  };
}

function changeLevelSensor(state: SettingsState, { index, value }: { index: number, value: LevelSensor }): SettingsState {
  const levelSensor = state.settings.levelSensor.slice(0);
  levelSensor[index] = value;
  return {
    ...state, settings: {
      ...state.settings, levelSensor,
    },
  };
}

function removeLevelSensor(state: SettingsState, index: number): SettingsState {
  const levelSensor = state.settings.levelSensor.slice(0);
  levelSensor.splice(index, 1);
  return {
    ...state, settings: {
      ...state.settings, levelSensor,
    },
  };
}

function addTimer(state: SettingsState): SettingsState {
  return {
    ...state, settings: {
      ...state.settings, timer: [
        ...state.settings.timer, defaultTimer(),
      ],
    },
  };
}

function changeTimer(state: SettingsState, { index, value }: { index: number, value: Timer }): SettingsState {
  const timer = state.settings.timer.slice(0);
  timer[index] = value;
  return {
    ...state, settings: {
      ...state.settings, timer,
    },
  };
}

function removeTimer(state: SettingsState, index: number): SettingsState {
  const timer = state.settings.timer.slice(0);
  timer.splice(index, 1);
  return {
    ...state, settings: {
      ...state.settings, timer,
    },
  };
}

function addSchedule(state: SettingsState): SettingsState {
  return {
    ...state, settings: {
      ...state.settings, schedule: [
        ...state.settings.schedule, defaultSchedule(),
      ],
    },
  };
}

function changeSchedule(state: SettingsState, { index, value }: { index: number, value: Schedule }): SettingsState {
  const schedule = state.settings.schedule.slice(0);
  schedule[index] = value;
  return {
    ...state, settings: {
      ...state.settings, schedule,
    },
  };
}

function removeSchedule(state: SettingsState, index: number): SettingsState {
  const schedule = state.settings.schedule.slice(0);
  schedule.splice(index, 1);
  return {
    ...state,
    settings: { ...state.settings, schedule },
  };
}

function changePinAssignment(state: SettingsState, { type, index, value }): SettingsState {
  const pins = state.pinAssignment[DevicePinType[type]].slice(0);
  pins[index] = value;
  const pinAssignment = { ...state.pinAssignment, [DevicePinType[type]]: pins };
  return { ...state, pinAssignment };
}

function backup(state: SettingsState, { name }: { name: string }): SettingsState {
  return {
    ...state,
    backups: [
      {
        name,
        date: new Date(),
        backup: {
          settings: state.settings,
          pinAssignment: state.pinAssignment,
          names: state.names,
        },
      },
      ...state.backups,
    ],
  };
}

function backupRemove(state: SettingsState, index: number): SettingsState {
  const backups = state.backups.slice();
  backups.splice(index, 1);
  return {
    ...state,
    backups,
  };
}

function restore(state: SettingsState, index: number): SettingsState {
  const { backup } = state.backups[index];
  return updateState(state, {
    ...state,
    settings: {
      ...defaultSettings(),
      ...backup.settings,
    },
    pinAssignment: {
      ...defaultPinAssignment(),
      ...backup.pinAssignment,
    },
    names: backup.names,
  });
}
