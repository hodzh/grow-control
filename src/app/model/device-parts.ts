/**
 * Devices parts
 */

export enum DevicePartType {
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
};

export const devicePartTypeName: Record<keyof typeof DevicePartType, string> = {
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
};

export type PinAssignment = Record<keyof typeof DevicePartType, number[] | null>;
