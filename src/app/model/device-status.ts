export enum DeviceState {
  idle = 0,
  fertigate,
  pumpIn,
  irrigate,
  wash,
  compote,
  washCompote,
  mixer,
  dose,
  doseMixer,
  error = 0xff,
}

export enum FertigateState {
  pumpIn,
  mixDose,
  dose,
  mix,
  irrigate,
  irrigateFinish,
  washPumpIn,
  washMix,
  wash,
  done,
}

export interface DeviceStatus {
  state: number;
  cmdState: number;
  valve: number;
  flow: number;
  volume: number;
  totalVolume: number;
  mix: number;
  dose: number;
}

export enum ErrorCode {
  pumpIn = 1,
  dose,
  pumpOut,
  pumpOutLast,
  sensorOut,
  io,
  badCmdState,
  lowWaterLevel,
  highWaterLevel,
}
