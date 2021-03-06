/* This file is autogenerated. Look at src/tools/code-gen */

import { DeviceResponseType } from '../model/device-response-type';
import {
  CompoteDaily,
  Dose,
  LevelSensor,
  Mixer,
  Program,
  Pump,
  Schedule,
  Timer,
} from './struct';
export interface DeviceResponseCommandSuccess {
  type: DeviceResponseType.commandSuccess;
  payload: {
    code: number;
  };
}
export interface DeviceResponseLog {
  type: DeviceResponseType.log;
  payload: {
    code: number;
  };
}
export interface DeviceResponseStatus {
  type: DeviceResponseType.status;
  payload: {
    state: number;
    cmdState: number;
    valve: number;
    flow: number;
    volume: number;
    totalVolume: number;
    mix: number;
    doseId: number;
    valveId: number;
  };
}
export interface DeviceResponseError {
  type: DeviceResponseType.error;
  payload: {
    code: number;
  };
}
export interface DeviceResponseProgram {
  type: DeviceResponseType.program;
  payload: {
    index: number;
    value: Program;
  };
}
export interface DeviceResponseCompoteDaily {
  type: DeviceResponseType.compoteDaily;
  payload: {
    index: number;
    dailyIndex: number;
    value: CompoteDaily;
  };
}
export interface DeviceResponseSchedule {
  type: DeviceResponseType.schedule;
  payload: {
    index: number;
    value: Schedule;
  };
}
export interface DeviceResponseTimer {
  type: DeviceResponseType.timer;
  payload: {
    index: number;
    value: Timer;
  };
}
export interface DeviceResponsePump {
  type: DeviceResponseType.pump;
  payload: {
    index: number;
    value: Pump;
  };
}
export interface DeviceResponseMixer {
  type: DeviceResponseType.mixer;
  payload: {
    index: number;
    value: Mixer;
  };
}
export interface DeviceResponseDose {
  type: DeviceResponseType.dose;
  payload: {
    index: number;
    value: Dose;
  };
}
export interface DeviceResponseLevelSensor {
  type: DeviceResponseType.levelSensor;
  payload: {
    index: number;
    value: LevelSensor;
  };
}
export interface DeviceResponsePin {
  type: DeviceResponseType.pin;
  payload: {
    type: number;
    index: number;
    value: number;
  };
}
export interface DeviceResponseTime {
  type: DeviceResponseType.time;
  payload: {
    second: number;
    minute: number;
    hour: number;
    wday: number;
    day: number;
    month: number;
    year: number;
  };
}
export interface DeviceResponseTemp {
  type: DeviceResponseType.temp;
  payload: {
    value: number;
  };
}
export interface DeviceResponseStatePump {
  type: DeviceResponseType.statePump;
  payload: {
    value: number;
  };
}
export interface DeviceResponseStateValve {
  type: DeviceResponseType.stateValve;
  payload: {
    value: number;
  };
}
export interface DeviceResponseStateMixer {
  type: DeviceResponseType.stateMixer;
  payload: {
    value: number;
  };
}
export interface DeviceResponseStateDose {
  type: DeviceResponseType.stateDose;
  payload: {
    value: number;
  };
}
export interface DeviceResponseStateDoseMixer {
  type: DeviceResponseType.stateDoseMixer;
  payload: {
    value: number;
  };
}
export type DeviceResponse =
  | DeviceResponseCommandSuccess
  | DeviceResponseLog
  | DeviceResponseStatus
  | DeviceResponseError
  | DeviceResponseProgram
  | DeviceResponseCompoteDaily
  | DeviceResponseSchedule
  | DeviceResponseTimer
  | DeviceResponsePump
  | DeviceResponseMixer
  | DeviceResponseDose
  | DeviceResponseLevelSensor
  | DeviceResponsePin
  | DeviceResponseTime
  | DeviceResponseTemp
  | DeviceResponseStatePump
  | DeviceResponseStateValve
  | DeviceResponseStateMixer
  | DeviceResponseStateDose
  | DeviceResponseStateDoseMixer;
