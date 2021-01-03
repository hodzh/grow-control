import { convert7bitTo8bit, convert8bitTo7bit, crc6 } from './device-io';

describe('DeviceIO', () => {
  beforeEach(() => {
  });

  describe('convert7bitTo8bit', () => {
    it('should convert 7bit to 8bit', () => {
      const array = new Uint8Array([0b1100001, 0b0110000, 0b0011000, 0b100]);
      expect(convert7bitTo8bit(array)).toEqual(Uint8Array.from([0b01100001, 0b00011000, 0b10000110]));
    });
  });
  describe('convert8bitTo7bit', () => {
    it('should convert 8bit to 7bit', () => {
      const array = new Uint8Array([0b01100001, 0b00011000, 0b10000110]);
      expect(convert8bitTo7bit(array)).toEqual(Uint8Array.from([0b1100001, 0b0110000, 0b0011000, 0b100]));
      const array1 = new Uint8Array([0, 19, 6, 7, 1, 1, 208]);
      expect(convert8bitTo7bit(array1)).toEqual(Uint8Array.from([0, 38, 24, 56, 16, 32, 0, 104]));
    });
  });
  describe('crc6', () => {
    it('should calc crc', () => {
      const array = new Uint8Array([0b00000000]);
      expect(crc6(array)).toEqual(7);
    });
  });
});
