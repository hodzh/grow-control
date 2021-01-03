// tslint:disable:no-bitwise

export enum DeviceIOMarker {
  beginMessage = 0b10000000,
  endMessage = 0b11000000,
  payloadMask = 0b01111111,
  cmdMask = 0b01000000,
  cmdPayloadMask = 0b00111111,
  mask = 0b10000000,
}

export type DeviceIOField =
  | DeviceIOFieldSimple
  | DeviceIOFieldArray
  | DeviceIOFieldList
  | DeviceIOFieldObject
  ;

export interface DeviceIOFieldSimple {
  type: 'uint8' | 'uint16' | 'uint32';
}

export interface DeviceIOFieldArray {
  type: 'uint8[]' | 'uint16[]' | 'uint32[]' | 'string';
  length: number;
}

export interface DeviceIOFieldList {
  type: 'list';
  itemMeta: string | DeviceIOMeta;
  length: number;
}

export interface DeviceIOFieldObject {
  type: 'object';
  itemMeta: string | DeviceIOMeta;
}

export interface DeviceIOMeta {
  [key: string]: string | DeviceIOField;
}

/**
 * convert bytes buffer
 * @param raw
 */
export function convert7bitTo8bit(raw: Uint8Array): Uint8Array {
  // console.log('7bit', raw);
  const length = Math.floor(raw.byteLength * 7 / 8);
  const result = new Uint8Array(length);
  let value = 0;
  let bytes = 0;
  let index = 0;
  for (let i = 0; i < raw.byteLength; i++) {
    const byte = raw[i];
    value = value + (byte << bytes);
    bytes += 7;
    if (bytes < 8) {
      continue;
    }
    result[index] = value & 255;
    index += 1;
    bytes -= 8;
    value = value >> 8;
  }
  return result;
}

export function convert8bitTo7bit(raw: Uint8Array): Uint8Array {
  // console.log('8bit ', raw);
  const length7 = Math.ceil(raw.byteLength * 8 / 7);
  const result = new Uint8Array(length7);
  for (let i = 0; i < length7; i++) {
    const index = Math.floor(i * 7 / 8);
    let value = raw[index] + ((raw[index + 1] || 0) << 8);
    value = (value >> (8 - (i % 8)) % 8) & DeviceIOMarker.payloadMask;
    result[i] = value;
  }
  return result;
}

export function crc6(raw: Uint8Array): number {
  let bits = raw.length * 8;
  let i = 0;
  let crc = 0xfc;
  let index = 0;
  while (bits--) {
    if (!i--) {
      i = 7;
      crc ^= raw[index++];
    }
    crc = (crc << 1 ^ (crc & 0x80 ? 0x9c : 0)) & 255;
  }
  return crc >> 2 & 0x3f;
}

export function getLength(
  metaOrName: string | DeviceIOMeta,
  struct: { [key: string]: DeviceIOMeta },
): number {
  if (!metaOrName) {
    return 0;
  }
  const meta = typeof metaOrName === 'string' ? struct[metaOrName] : metaOrName;
  return Object.keys(meta).reduce((result, key) => {
    const fieldOrName = meta[key];
    // console.error('fieldOrName', fieldOrName);
    const field: DeviceIOField = typeof fieldOrName === 'string' ?
      { type: 'object', itemMeta: struct[fieldOrName] } : fieldOrName;
    switch (field.type) {
      case 'list':
        return result + field.length * getLength(field.itemMeta, struct);
      case 'object':
        return result + getLength(field.itemMeta, struct);
      case 'uint8':
        return result + 1;
      case 'uint16':
        return result + 2;
      case 'uint32':
        return result + 4;
      case 'uint8[]':
        return result + 1 * field.length;
      case 'uint16[]':
        return result + 2 * field.length;
      case 'uint32[]':
        return result + 4 * field.length;
      case 'string':
        return result + 1 * field.length;
    }
  }, 0);
}
