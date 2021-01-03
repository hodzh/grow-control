import { Observable } from 'rxjs';
import { convert7bitTo8bit, crc6, DeviceIOField, DeviceIOMarker, DeviceIOMeta, getLength } from '../../model/device-io';
import { map } from 'rxjs/operators';
import { DeviceResponse } from '../../auto/device-response';

export class DeviceResponseDeserializer {
  constructor(
    private readonly meta: { [key: string]: DeviceIOMeta | string },
    private readonly struct: { [key: string]: DeviceIOMeta },
    private readonly mapper: Record<string | number, string | number>,
  ) {
    this.mapRaw = this.mapRaw.bind(this);
  }

  deserialize(type: number, raw: ArrayBuffer): { type: number; payload?: any } {
    // console.log('deserialize', type, raw);
    let index = 0;
    const payloadBufferData = new DataView(raw);
    const readObject = (metaOrName: DeviceIOMeta | string) => {
      const meta = typeof metaOrName === 'string' ? this.struct[metaOrName] : metaOrName;
      const obj: any = {};
      // console.log('readObject', meta);
      Object.keys(meta).forEach(key => {
        const fieldOrName = meta[key];
        const field: DeviceIOField = typeof fieldOrName === 'string' ?
          { type: 'object', itemMeta: this.struct[fieldOrName] } : fieldOrName;
        let value;
        switch (field.type) {
          case 'list':
            value = new Array(field.length);
            for (let i = 0; i < field.length; i++) {
              value[i] = readObject(field.itemMeta);
            }
            break;
          case 'object':
            value = readObject(field.itemMeta);
            break;
          case 'uint8':
            value = payloadBufferData.getUint8(index);
            index += 1;
            break;
          case 'uint16':
            value = payloadBufferData.getUint16(index, true);
            index += 2;
            break;
          case 'uint32':
            value = payloadBufferData.getUint32(index, true);
            index += 4;
            break;
          case 'uint8[]':
            value = new Array(field.length);
            for (let i = 0; i < field.length; i++) {
              value[i] = payloadBufferData.getUint8(index);
              index += 1;
            }
            break;
          case 'uint16[]':
            value = new Array(field.length);
            for (let i = 0; i < field.length; i++) {
              value[i] = payloadBufferData.getUint16(index, true);
              index += 2;
            }
            break;
          case 'uint32[]':
            value = new Array(field.length);
            for (let i = 0; i < field.length; i++) {
              value[i] = payloadBufferData.getUint32(index, true);
              index += 4;
            }
            break;
          case 'string':
            throw new Error('not implemented');
        }
        obj[key] = value;
      });
      return obj;
    };
    const typeName = this.mapper[type];
    const payload = readObject(this.meta[typeName]);
    // console.log(`deserialized`, type, payload);
    return { type, payload };
  }

  mapRaw(source: Observable<ArrayBuffer>): Observable<any> {
    const defaultBufferLength = 256;
// tslint:disable:no-bitwise
    const scanRawData = (bufferLength: number = defaultBufferLength) =>
      (source: Observable<ArrayBuffer>): Observable<any> =>
        new Observable<any>(observer => {
          let type = null;
          const buffer = new Uint8Array(bufferLength);
          let offset = 0;
          return source.subscribe({
            next: (rawData: ArrayBuffer) => {
              // console.error('received', rawData);
              const array = new Uint8Array(rawData);
              const length = array.length;
              for (let i = 0; i < length; i++) {
                const byte = array[i];
                const mode = byte & DeviceIOMarker.mask;
                if (mode) {
                  const cmd = byte & DeviceIOMarker.cmdMask;
                  const cmdPayload = byte & DeviceIOMarker.cmdPayloadMask;
                  if (cmd) {
                    // end of message
                    if (type === null) {
                      console.error('received end marked, but type is not defined');
                      continue;
                    }
                    // console.error('received end marker', type);
                    const payload = convert7bitTo8bit(buffer.slice(0, offset));
                    const expectedLength = getLength(this.meta[this.mapper[type]], this.struct);
                    if (payload.byteLength !== expectedLength) {
                      console.error('received bad length', payload.byteLength, expectedLength);
                      type = null;
                      offset = 0;
                      continue;
                    }
                    const crc = crc6(payload);
                    if (crc !== cmdPayload) {
                      console.error('received bad crc', crc, cmdPayload);
                      type = null;
                      offset = 0;
                      continue;
                    }
                    // console.error('emit', type, payload);
                    observer.next({ type, raw: payload.buffer });
                    type = null;
                    offset = 0;
                    continue;
                  }
                  // begin of message
                  if (type !== null) {
                    console.error('received begin marked, but previous message is not complete');
                  }
                  type = cmdPayload;
                  offset = 0;
                  // console.log('received begin marker', type);
                  continue;
                }
                if (type === null) {
                  console.error('received body, but type is not defined');
                  continue;
                }
                buffer[offset] = byte;
                // console.log('received body', buffer[offset]);
                offset += 1;
              }
            },
            error: (err) => {
              observer.error(err);
            },
            complete: () => {
              observer.complete();
            },
          });
        });
    return source.pipe(scanRawData())
      .pipe(map(({ type, raw }): DeviceResponse =>
        this.deserialize(type, raw) as DeviceResponse));
  }
}
