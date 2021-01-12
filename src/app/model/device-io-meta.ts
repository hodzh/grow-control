import { DeviceResponseType } from './device-response-type';
import { DeviceRequestType } from './device-request-type';
import { DeviceIOMeta } from './device-io';
import { deviceConfig } from './device-config';

export const structMeta: { [key: string]: DeviceIOMeta } = {
  empty: {
    fake: { type: 'uint8' },
  },
  dayTime: {
    hour: { type: 'uint8' },
    minute: { type: 'uint8' },
    second: { type: 'uint8' },
  },
  dateDay: {
    wday: { type: 'uint8' },
    day: { type: 'uint8' },
    month: { type: 'uint8' },
    year: { type: 'uint8' },
  },
  program: {
    valves: { type: 'uint8[]', length: Math.ceil(deviceConfig.valveCount / 8) },
    compote: { type: 'uint8' },
    start: 'dateDay',
  },
  compoteDaily: {
    days: { type: 'uint8' },
    schedule: { type: 'uint8' },
    volume: { type: 'uint16' },
    washVolume: { type: 'uint16' },
    dose: {
      type: 'uint16[]',
      length: deviceConfig.doseCount,
    },
  },
  compote: {
    daily: {
      type: 'list',
      length: deviceConfig.compoteDailyCount,
      itemMeta: 'compoteDaily',
    },
  },
  schedule: {
    enable: { type: 'uint8' },
    deviceId: { type: 'uint8' },
    startTime: 'dayTime',
    endTime: 'dayTime',
  },
  timer: {
    enable: { type: 'uint8' },
    program: { type: 'uint8' },
    weekDays: { type: 'uint8' },
    time: 'dayTime',
  },
  pump: {
    minFlow: { type: 'uint16' },
    startingTime: { type: 'uint16' },
    pwmFlow: { type: 'uint16' },
    pwm: { type: 'uint8' },
    rate: { type: 'uint16' },
  },
  levelSensor: {
    beepSeconds: { type: 'uint8' },
  },
  mixer: {
    seconds: { type: 'uint16' },
    washSeconds: { type: 'uint16' },
    pwmSensor: { type: 'uint16' },
    pwm: { type: 'uint8' },
  },
  dose: {
    rate: { type: 'uint32' },
    seconds: { type: 'uint16' },
    pwmSensor: { type: 'uint16' },
    pwm: { type: 'uint8' },
  },
  dateTime: {
    second: { type: 'uint8' },
    minute: { type: 'uint8' },
    hour: { type: 'uint8' },
    wday: { type: 'uint8' },
    day: { type: 'uint8' },
    month: { type: 'uint8' },
    year: { type: 'uint8' },
  },
  deviceStatus: {
    state: { type: 'uint8' },
    cmdState: { type: 'uint8' },
    valve: { type: 'uint8' },
    flow: { type: 'uint16' },
    volume: { type: 'uint16' },
    totalVolume: { type: 'uint16' },
    mix: { type: 'uint16' },
    doseId: { type: 'uint8' },
    valveId: { type: 'uint8' },
  },
  settings: {
    program: {
      type: 'list',
      length: deviceConfig.programCount,
      itemMeta: 'program',
    },
    compote: {
      type: 'list',
      length: deviceConfig.compoteCount,
      itemMeta: 'compote',
    },
    schedule: {
      type: 'list',
      length: deviceConfig.scheduleCount,
      itemMeta: 'schedule',
    },
    timer: {
      type: 'list',
      length: deviceConfig.timerCount,
      itemMeta: 'timer',
    },
    pump: {
      type: 'list',
      length: deviceConfig.pumpCount,
      itemMeta: 'pump',
    },
    levelSensor: {
      type: 'list',
      length: deviceConfig.levelSensorCount,
      itemMeta: 'levelSensor',
    },
    mixer: {
      type: 'list',
      length: deviceConfig.mixerCount,
      itemMeta: 'mixer',
    },
    dose: {
      type: 'list',
      length: deviceConfig.doseCount,
      itemMeta: 'dose',
    },
  },
  pinAssignment: {
    pump: {
      type: 'uint8[]',
      length: deviceConfig.pumpCount,
    },
    flowSensor: {
      type: 'uint8[]',
      length: deviceConfig.pumpCount,
    },
    levelSensor: {
      type: 'uint8[]',
      length: deviceConfig.levelSensorCount,
    },
    mixer: {
      type: 'uint8[]',
      length: deviceConfig.mixerCount,
    },
    dose: {
      type: 'uint8[]',
      length: deviceConfig.doseCount,
    },
    doseMixer: {
      type: 'uint8[]',
      length: deviceConfig.doseCount,
    },
    valve: {
      type: 'uint8[]',
      length: deviceConfig.valveCount,
    },
  },
};

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
  getPinPump: {
    index: { type: 'uint8' },
  },
  setPinPump: {
    index: { type: 'uint8' },
    value: { type: 'uint8' },
  },
  getPinFlowSensor: {
    index: { type: 'uint8' },
  },
  setPinFlowSensor: {
    index: { type: 'uint8' },
    value: { type: 'uint8' },
  },
  getPinLevelSensor: {
    index: { type: 'uint8' },
  },
  setPinLevelSensor: {
    index: { type: 'uint8' },
    value: { type: 'uint8' },
  },
  getPinMixer: {
    index: { type: 'uint8' },
  },
  setPinMixer: {
    index: { type: 'uint8' },
    value: { type: 'uint8' },
  },
  getPinDose: {
    index: { type: 'uint8' },
  },
  setPinDose: {
    index: { type: 'uint8' },
    value: { type: 'uint8' },
  },
  getPinDoseMixer: {
    index: { type: 'uint8' },
  },
  setPinDoseMixer: {
    index: { type: 'uint8' },
    value: { type: 'uint8' },
  },
  getPinValve: {
    index: { type: 'uint8' },
  },
  setPinValve: {
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
  pinPump: {
    index: { type: 'uint8' },
    value: { type: 'uint8' },
  },
  pinFlowSensor: {
    index: { type: 'uint8' },
    value: { type: 'uint8' },
  },
  pinLevelSensor: {
    index: { type: 'uint8' },
    value: { type: 'uint8' },
  },
  pinMixer: {
    index: { type: 'uint8' },
    value: { type: 'uint8' },
  },
  pinDose: {
    index: { type: 'uint8' },
    value: { type: 'uint8' },
  },
  pinDoseMixer: {
    index: { type: 'uint8' },
    value: { type: 'uint8' },
  },
  pinValve: {
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
