import { DeviceRequestType } from '../../model/device-request-type';
import { DeviceIOMeta } from '../../model/device-io';

export type DeviceRequestMeta = Record<keyof typeof DeviceRequestType, DeviceIOMeta | string>;

export const deviceRequestMeta: DeviceRequestMeta = {
  fertigate: {
    programId: { type: 'uint8' },
  },
  irrigate: {
    programId: { type: 'uint8' },
  },
  wash: {
    programId: { type: 'uint8' },
  },
  pumpIn: {
    programId: { type: 'uint8' },
  },
  compote: {
    programId: { type: 'uint8' },
  },
  washCompote: {
    programId: { type: 'uint8' },
  },
  mix: {
    mixerId: { type: 'uint8' },
  },
  mixDose: {
    mixerId: { type: 'uint8' },
  },
  dose: {
    programId: { type: 'uint8' },
    doseId: { type: 'uint8' },
  },
  getProgram: {
    index: { type: 'uint8' },
  },
  setProgram: {
    index: { type: 'uint8' },
    value: 'program',
  },
  getCompoteDaily: {
    index: { type: 'uint8' },
    dailyIndex: { type: 'uint8' },
  },
  setCompoteDaily: {
    index: { type: 'uint8' },
    dailyIndex: { type: 'uint8' },
    value: 'compoteDaily',
  },
  getSchedule: {
    index: { type: 'uint8' },
  },
  setSchedule: {
    index: { type: 'uint8' },
    value: 'schedule',
  },
  getTimer: {
    index: { type: 'uint8' },
  },
  setTimer: {
    index: { type: 'uint8' },
    value: 'timer',
  },
  getPump: {
    index: { type: 'uint8' },
  },
  setPump: {
    index: { type: 'uint8' },
    value: 'pump',
  },
  getMixer: {
    index: { type: 'uint8' },
  },
  setMixer: {
    index: { type: 'uint8' },
    value: 'mixer',
  },
  getDose: {
    index: { type: 'uint8' },
  },
  setDose: {
    index: { type: 'uint8' },
    value: 'dose',
  },
  getLevelSensor: {
    index: { type: 'uint8' },
  },
  setLevelSensor: {
    index: { type: 'uint8' },
    value: 'levelSensor',
  },
  getPin: {
    type: { type: 'uint8' },
    index: { type: 'uint8' },
  },
  setPin: {
    type: { type: 'uint8' },
    index: { type: 'uint8' },
    value: { type: 'uint8' },
  },
  getTime: 'empty',
  setTime: 'dateTime',
  getTemp: 'empty',
  getStatus: 'empty',
  getStatePump: {
    index: { type: 'uint8' },
  },
  setStatePump: {
    index: { type: 'uint8' },
    value: { type: 'uint8' },
  },
  getStateValve: {
    index: { type: 'uint8' },
  },
  setStateValve: {
    index: { type: 'uint8' },
    value: { type: 'uint8' },
  },
  getStateMixer: {
    index: { type: 'uint8' },
  },
  setStateMixer: {
    index: { type: 'uint8' },
    value: { type: 'uint8' },
  },
  getStateDose: {
    index: { type: 'uint8' },
  },
  setStateDose: {
    index: { type: 'uint8' },
    value: { type: 'uint8' },
  },
  getStateDoseMixer: {
    index: { type: 'uint8' },
  },
  setStateDoseMixer: {
    index: { type: 'uint8' },
    value: { type: 'uint8' },
  },
  resetError: {
    fake: { type: 'uint8' },
  },
};
