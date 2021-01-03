export const deviceConfig = {
  programCount: 4,
  compoteCount: 2,
  compoteDailyCount: 14,
  scheduleCount: 4,
  timerCount: 8,
  devCount: 4,
  pumpCount: 2,
  flowSensorCount: 2,
  mixerCount: 1,
  doseCount: 4,
  doseMixerCount: 4,
  nameLength: 8,
  valveCount: 24,
  levelSensorCount: 2,
  rtcCount: 1,
  buttonCount: 0,
};

export enum PumpType {
  in,
  out,
}

export enum FlowSensorType {
  in,
  out,
}

export enum LevelSensorType {
  low,
  high,
}

export enum ButtonType {
  up,
  down,
  left,
  right,
}
