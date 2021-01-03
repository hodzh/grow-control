import { deviceConfig } from './device-config';
import {
  Compote,
  CompoteDaily,
  DayTime,
  Dose,
  LevelSensor,
  Mixer,
  Program,
  Pump,
  Schedule,
  Settings,
  Timer,
} from '../auto/struct';
import { dateToDateDay } from './date-time';
import { PinAssignment } from './device-parts';

export function defaultSettings(): Settings {
  return {
    program: new Array(deviceConfig.programCount)
      .fill(0)
      .map(() => defaultProgram()),
    compote: new Array(deviceConfig.compoteCount)
      .fill(0)
      .map(() => defaultCompote()),
    schedule: new Array(deviceConfig.scheduleCount)
      .fill(0)
      .map(() => defaultSchedule()),
    timer: new Array(deviceConfig.timerCount)
      .fill(0)
      .map(() => defaultTimer()),
    pump: new Array(deviceConfig.pumpCount)
      .fill(0)
      .map(() => defaultPumpSettings()),
    mixer: new Array(deviceConfig.mixerCount)
      .fill(0)
      .map(() => defaultMixerSettings()),
    dose: new Array(deviceConfig.doseCount)
      .fill(0)
      .map(() => defaultDoseSettings()),
    levelSensor: new Array(deviceConfig.doseCount)
      .fill(0)
      .map(() => defaultLevelSensorSettings()),
  };
}

export function defaultProgram(): Program {
  return {
    valves: new Array(Math.ceil(deviceConfig.valveCount / 8)).fill(0),
    compote: 0,
    start: dateToDateDay(new Date()),
  };
}

export function defaultCompoteDaily(): CompoteDaily {
  return {
    days: 0,
    schedule: 0,
    volume: 0,
    washVolume: 0,
    dose: new Array(deviceConfig.doseCount).fill(0),
  };
}

export function defaultCompote(): Compote {
  return {
    daily: new Array(deviceConfig.compoteDailyCount).fill(0).map(() => defaultCompoteDaily()),
  };
}

export function defaultSchedule(): Schedule {
  return {
    enable: 0,
    deviceId: 0,
    startTime: defaultDayTime(),
    endTime: defaultDayTime(),
  };
}

export function defaultTimer(): Timer {
  return {
    enable: 0,
    program: 0,
    weekDays: 0,
    time: defaultDayTime(),
  };
}

export function defaultPumpSettings(): Pump {
  return {
    minFlow: 100,
    startingTime: 3000,
    pwmFlow: 0,
    pwm: 0,
    rate: 5880,
  };
}

export function defaultDoseSettings(): Dose {
  return {
    rate: 0,
    seconds: 0,
    pwmSensor: 0,
    pwm: 0,
  };
}

export function defaultLevelSensorSettings(): LevelSensor {
  return {
    beepSeconds: 1,
  };
}

export function defaultMixerSettings(): Mixer {
  return {
    seconds: 180,
    washSeconds: 180,
    pwmSensor: 0,
    pwm: 0,
  };
}

export function defaultDayTime(): DayTime {
  return {
    hour: 0,
    minute: 0,
    second: 0,
  };
}

export function defaultPinAssignment(): PinAssignment {
  return {
    pump: [],
    flowSensor: [],
    levelSensor: [],
    mixer: [],
    dose: [],
    doseMixer: [],
    valve: [],
    rtc: [],
    display: [],
    button: [],
  };
}

export function defaultNames() {
  return {
    program: new Array(deviceConfig.programCount).fill(''),
    compote: new Array(deviceConfig.compoteCount).fill(''),
    schedule: new Array(deviceConfig.scheduleCount).fill(''),
    timer: new Array(deviceConfig.timerCount).fill(''),
    pump: ['In', 'Out'],
    mixer: ['Compote', 'Wash'],
    dose: ['Grow', 'Bloom', '', ''],
    levelSensor: ['Min', 'Max'],
  };
}
