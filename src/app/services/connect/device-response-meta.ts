import { DeviceResponseType } from '../../model/device-response-type';
import { DeviceIOMeta } from '../../model/device-io';

export type DeviceResponseMeta = Record<keyof typeof DeviceResponseType, DeviceIOMeta | string>;

export const deviceResponseMeta: DeviceResponseMeta = {
  commandSuccess: {
    code: { type: 'uint8' },
  },
  log: {
    code: { type: 'uint8' },
  },
  status: 'deviceStatus',
  error: {
    code: { type: 'uint8' },
  },
  program: {
    index: { type: 'uint8' },
    value: 'program',
  },
  compoteDaily: {
    index: { type: 'uint8' },
    dailyIndex: { type: 'uint8' },
    value: 'compoteDaily',
  },
  schedule: {
    index: { type: 'uint8' },
    value: 'schedule',
  },
  timer: {
    index: { type: 'uint8' },
    value: 'timer',
  },
  pump: {
    index: { type: 'uint8' },
    value: 'pump',
  },
  mixer: {
    index: { type: 'uint8' },
    value: 'mixer',
  },
  dose: {
    index: { type: 'uint8' },
    value: 'dose',
  },
  levelSensor: {
    index: { type: 'uint8' },
    value: 'levelSensor',
  },
  pin: {
    type: { type: 'uint8' },
    index: { type: 'uint8' },
    value: { type: 'uint8' },
  },
  time: 'dateTime',
  temp: {
    value: { type: 'uint16' },
  },
  statePump: {
    value: { type: 'uint8' },
  },
  stateValve: {
    value: { type: 'uint8' },
  },
  stateMixer: {
    value: { type: 'uint8' },
  },
  stateDose: {
    value: { type: 'uint8' },
  },
  stateDoseMixer: {
    value: { type: 'uint8' },
  },
};
