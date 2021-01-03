/* This file is autogenerated. Look at src/tools/code-gen */

export interface Empty {
  fake: number;
}
export interface DayTime {
  hour: number;
  minute: number;
  second: number;
}
export interface DateDay {
  wday: number;
  day: number;
  month: number;
  year: number;
}
export interface Program {
  valves: number[];
  compote: number;
  start: DateDay;
}
export interface CompoteDaily {
  days: number;
  schedule: number;
  volume: number;
  washVolume: number;
  dose: number[];
}
export interface Compote {
  daily: CompoteDaily[];
}
export interface Schedule {
  enable: number;
  deviceId: number;
  startTime: DayTime;
  endTime: DayTime;
}
export interface Timer {
  enable: number;
  program: number;
  weekDays: number;
  time: DayTime;
}
export interface Pump {
  minFlow: number;
  startingTime: number;
  pwmFlow: number;
  pwm: number;
  rate: number;
}
export interface LevelSensor {
  beepSeconds: number;
}
export interface Mixer {
  seconds: number;
  washSeconds: number;
  pwmSensor: number;
  pwm: number;
}
export interface Dose {
  rate: number;
  seconds: number;
  pwmSensor: number;
  pwm: number;
}
export interface DateTime {
  second: number;
  minute: number;
  hour: number;
  wday: number;
  day: number;
  month: number;
  year: number;
}
export interface DeviceStatus {
  state: number;
  cmdState: number;
  valve: number;
  flow: number;
  volume: number;
  totalVolume: number;
  mix: number;
}
export interface Settings {
  program: Program[];
  compote: Compote[];
  schedule: Schedule[];
  timer: Timer[];
  pump: Pump[];
  levelSensor: LevelSensor[];
  mixer: Mixer[];
  dose: Dose[];
}
export interface PinAssignment {
  pump: number[];
  flowSensor: number[];
  levelSensor: number[];
  mixer: number[];
  dose: number[];
  doseMixer: number[];
  valve: number[];
}