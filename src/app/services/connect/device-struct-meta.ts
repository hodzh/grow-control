import { DeviceIOMeta } from '../../model/device-io';
import { deviceConfig } from '../../model/device-config';

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
    enable: { type: 'uint8' },
    seconds: { type: 'uint8' },
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
    beeper: {
      type: 'uint8[]',
      length: deviceConfig.beeperCount,
    },
  },
};
