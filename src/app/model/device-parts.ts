/**
 * Devices parts
 */
export enum DevicePinType {
  pump,
  valve,
  mixer,
  dose,
  doseMixer,
  flowSensor,
  levelSensor,
  rtc,
  display,
  button,
  beeper,
};

export const devicePinTypeName: Record<keyof typeof DevicePinType, string> = {
  pump: 'Pump',
  valve: 'Valve',
  mixer: 'Mixer',
  dose: 'Dose',
  doseMixer: 'Dose Mixer',
  flowSensor: 'Flow Sensor',
  levelSensor: 'Level Sensor',
  rtc: 'RTC',
  display: 'Display',
  button: 'Button',
  beeper: 'Beeper',
};

export type PinAssignment = Record<keyof typeof DevicePinType, number[] | null>;
