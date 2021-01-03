/**
 * Devices
 */

export type DevicePinMode = 'rx' | 'tx' | 'rx1' | 'tx1' | 'rx2' | 'tx2' | 'rx3' | 'tx3'
  | 'sda' | 'scl' | 'miso' | 'mosi' | 'sck' | 'ss';

export interface DevicePin {
  pwm?: true;
  analog?: true;
  int?: number;
  mode?: DevicePinMode;
}

export interface DeviceInfo {
  [key: string]: {
    pins: {
      [key: number]: DevicePin;
    };
  };
}

export const deviceInfo: DeviceInfo = {
  // Arduino Mega Specifications
  // The ATmega2560 is a Microcontroller
  // The operating voltage of this microcontroller is 5volts
  // The recommended Input Voltage will range from 7volts to 12volts
  // The input voltage will range from 6volts to 20volts
  // The digital input/output pins are 54 where 15 of these pins will supply PWM o/p.
  // Analog Input Pins are 16
  // DC Current for each input/output pin is 40 mA
  // DC Current used for 3.3V Pin is 50 mA
  // Flash Memory like 256 KB where 8 KB of flash memory is used with the help of bootloader
  // The static random access memory (SRAM) is 8 KB
  // The electrically erasable programmable read-only memory (EEPROM) is 4 KB
  // The clock (CLK) speed is 16 MHz
  // The USB host chip used in this is MAX3421E
  // The length of this board is 101.52 mm
  // The width of this board is 53.3 mm
  // The weight of this board is 36 g
  /**
   * Arduino Mega 2560
   */
  mega2560: {
    pins: {
      0: {
        mode: 'rx',
      },
      1: {
        mode: 'tx',
      },
      2: {
        pwm: true,
        int: 0,
      },
      3: {
        pwm: true,
        int: 1,
      },
      4: {
        pwm: true,
      },
      5: {
        pwm: true,
      },
      6: {
        pwm: true,
      },
      7: {
        pwm: true,
      },
      8: {
        pwm: true,
      },
      9: {
        pwm: true,
      },
      10: {
        pwm: true,
      },
      11: {
        pwm: true,
      },
      12: {
        pwm: true,
      },
      13: {
        pwm: true,
      },
      14: {
        mode: 'tx3',
      },
      15: {
        mode: 'rx3',
      },
      16: {
        mode: 'tx2',
      },
      17: {
        mode: 'rx2',
      },
      18: {
        mode: 'tx1',
        int: 5,
      },
      19: {
        mode: 'rx1',
        int: 4,
      },
      20: {
        mode: 'sda',
        int: 3,
      },
      21: {
        mode: 'scl',
        int: 2,
      },
      22: {},
      23: {},
      24: {},
      25: {},
      26: {},
      27: {},
      28: {},
      29: {},
      30: {},
      31: {},
      32: {},
      33: {},
      34: {},
      35: {},
      36: {},
      37: {},
      38: {},
      39: {},
      40: {},
      41: {},
      42: {},
      43: {},
      44: {
        pwm: true,
      },
      45: {
        pwm: true,
      },
      46: {
        pwm: true,
      },
      47: {},
      48: {},
      49: {},
      50: {
        mode: 'miso',
      },
      51: {
        mode: 'mosi',
      },
      52: {
        mode: 'sck',
      },
      53: {
        mode: 'ss',
      },
      54: {
        analog: true,
      },
      55: {
        analog: true,
      },
      56: {
        analog: true,
      },
      57: {
        analog: true,
      },
      58: {
        analog: true,
      },
      59: {
        analog: true,
      },
      60: {
        analog: true,
      },
      61: {
        analog: true,
      },
      62: {
        analog: true,
      },
      63: {
        analog: true,
      },
      64: {
        analog: true,
      },
      65: {
        analog: true,
      },
      66: {
        analog: true,
      },
      67: {
        analog: true,
      },
      68: {
        analog: true,
      },
      69: {
        analog: true,
      },
    },
  },
};

export function getAllPins() {
  return Object.keys(deviceInfo.mega2560.pins).map(p => +p);
}
