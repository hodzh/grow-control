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
