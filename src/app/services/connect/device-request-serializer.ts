import { convert8bitTo7bit, crc6, DeviceIOMarker, DeviceIOMeta, getLength } from '../../model/device-io';

// tslint:disable:no-bitwise
export class DeviceRequestSerializer {
  constructor(
    private readonly meta: { [key: string]: DeviceIOMeta | string },
    private readonly struct: { [key: string]: DeviceIOMeta },
    private readonly mapper: Record<string | number, string | number>,
  ) {
  }

  serialize({ type, payload }: { type: number; payload?: any }): ArrayBuffer {
    const typeName = this.mapper[type];
    const meta = this.meta[typeName];
    const length = getLength(meta, this.struct);
    const raw = new ArrayBuffer(length);
    const rawView = new DataView(raw);
    let offset = 0;
    /**
     * convert data to bytes and save it to the buffer
     * @param o data to convert
     * @param m metadata
     */
    const writeBytes = (o, m) => {
      if (typeof m === 'string') {
        m = this.struct[m];
      }
      Object.keys(m).forEach(key => {
        let field = m[key];
        const value = o[key];
        if (typeof field === 'string') {
          field = { type: 'object', itemMeta: this.struct[field] };
        }
        switch (field.type) {
          case 'list':
            value.forEach(c => writeBytes(c, field.itemMeta));
            return;
          case 'object':
            writeBytes(value, field.itemMeta);
            return;
          case 'uint8':
            rawView.setUint8(offset, value);
            offset += 1;
            return;
          case 'uint16':
            rawView.setUint16(offset, value, true);
            offset += 2;
            return;
          case 'uint32':
            rawView.setUint32(offset, value, true);
            offset += 4;
            return;
          case 'uint8[]':
            value.forEach(v => {
              rawView.setUint8(offset, v);
              offset += 1;
            });
            return;
          case 'uint16[]':
            value.forEach(v => {
              rawView.setUint16(offset, v, true);
              offset += 2;
            });
            return;
          case 'uint32[]':
            value.forEach(v => {
              rawView.setUint32(offset, v, true);
              offset += 4;
            });
            return;
          case 'string':
            // wip
            // rawView.setUint8(offset, value.length);
            // offset += 1;
            // for (let i = 0; i < value.length; i++) {
            //   rawView.setUint8(offset, value.charCodeAt(i));
            //   offset += 1;
            // }
            return;
        }
      });
    };
    writeBytes(payload, meta);
    const rawPayload = convert8bitTo7bit(new Uint8Array(raw));
    // begin marker + payload + end marker
    const result = new ArrayBuffer(rawPayload.byteLength + 2);
    const resultView = new DataView(result);
    resultView.setUint8(0, type | DeviceIOMarker.beginMessage);
    (new Uint8Array(result)).set(rawPayload, 1);
    const crc = crc6(new Uint8Array(raw));
    resultView.setUint8(result.byteLength - 1, crc | DeviceIOMarker.endMessage);
    // console.log(Array.from(new Uint8Array(result)).map(b => b.toString(16)).join(' '));
    return result;
  }
}
