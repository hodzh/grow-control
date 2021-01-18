import { DeviceResponseDeserializer } from './device-response-deserializer';
import { cold } from 'jest-marbles';
import { DeviceIOMarker } from '../../model/device-io';
import { DeviceResponseType } from '../../model/device-response-type';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TestBed } from '@angular/core/testing';
import { deviceResponseMeta } from './device-response-meta';
import { structMeta } from './device-struct-meta';

enum TestEnum1 {
  test1 = 1,
  test2 = 2,
  test3 = 3,
  test4 = 4,
  test5 = 5,
  test6 = 6,
}

// tslint:disable:no-bitwise
describe('DeviceResponseDeserializer', () => {
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore(),
      ],
    });
    store = TestBed.inject(MockStore);
  });

  describe('simple cases', () => {
    it('should deserialize byte', () => {
      const rawData$ = cold('-a-b', {
        a: new Uint8Array([
          DeviceIOMarker.beginMessage | 1,
          2,
          0,
          DeviceIOMarker.endMessage | 46,
        ]).buffer,
        b: new Uint8Array([
          DeviceIOMarker.beginMessage | 1,
          0,
          1,
          DeviceIOMarker.endMessage | 25,
        ]).buffer,
      });
      const deserializer = new DeviceResponseDeserializer(
        {
          test1: { byte: { type: 'uint8' } },
        },
        {},
        TestEnum1,
        store,
      );
      const response$ = rawData$.pipe(deserializer.mapRaw);
      const response1 = { type: 1, payload: { byte: 2 } };
      const response2 = { type: 1, payload: { byte: 128 } };
      const expected = cold('-a-b', { a: response1, b: response2 });
      expect(response$).toBeObservable(expected);
    });
    it('should deserialize word', () => {
      const rawData$ = cold('-abcdef', {
        a: new Uint8Array([DeviceIOMarker.beginMessage | 1, DeviceIOMarker.payloadMask & 0b0000010]).buffer,
        b: new Uint8Array([DeviceIOMarker.payloadMask & 0b0000110, DeviceIOMarker.payloadMask & 0b0000000]).buffer,
        c: new Uint8Array([DeviceIOMarker.endMessage | 51]).buffer,
        d: new Uint8Array([DeviceIOMarker.beginMessage | 4, DeviceIOMarker.payloadMask & 0b0000101]).buffer,
        e: new Uint8Array([DeviceIOMarker.payloadMask & 0b0001100, DeviceIOMarker.payloadMask & 0b0000000]).buffer,
        f: new Uint8Array([DeviceIOMarker.endMessage | 60]).buffer,
      });
      const deserializer = new DeviceResponseDeserializer(
        {
          test1: { word: { type: 'uint16' } },
          test4: { word: { type: 'uint16' } },
        },
        {},
        TestEnum1,
        store,
      );
      const response$ = rawData$.pipe(deserializer.mapRaw);
      const response1 = { type: 1, payload: { word: 0b00001100000010 } };
      const response2 = { type: 4, payload: { word: 0b00011000000101 } };
      const expected = cold('---a--b', { a: response1, b: response2 });
      expect(response$).toBeObservable(expected);
    });
    xit('should deserialize double word', () => {
      const rawData$ = cold('-abcde', {
        a: new Uint8Array([DeviceIOMarker.beginMessage | 1, DeviceIOMarker.payloadMask & 0b0000010]).buffer,
        b: new Uint8Array([DeviceIOMarker.payloadMask & 0b0000110, DeviceIOMarker.payloadMask & 0b0000010]).buffer,
        c: new Uint8Array([
          DeviceIOMarker.payloadMask & 0b1010000,
          DeviceIOMarker.payloadMask & 0b0011100,
          DeviceIOMarker.endMessage | 51,
          DeviceIOMarker.beginMessage | 6,
        ]).buffer,
        d: new Uint8Array([DeviceIOMarker.payloadMask & 0b0000111, DeviceIOMarker.payloadMask & 0b100000]).buffer,
        e: new Uint8Array([
          DeviceIOMarker.payloadMask & 0b010000, DeviceIOMarker.payloadMask & 0b000010,
          DeviceIOMarker.payloadMask & 0b001010, DeviceIOMarker.payloadMask & 0b000000, DeviceIOMarker.endMessage | 34,
        ]).buffer,
      });
      const deserializer = new DeviceResponseDeserializer(
        {
          test1: { dword: { type: 'uint32' } },
          test2: { dword: { type: 'uint32' } },
        },
        {},
        TestEnum1,
        store,
      );
      const response$ = rawData$.pipe(deserializer.mapRaw);
      const response1 = { type: 1, payload: { dword: 0x02030405 } };
      const response2 = { type: 6, payload: { dword: 0x0708090A } };
      const expected = cold('---a-b', { a: response1, b: response2 });
      expect(response$).toBeObservable(expected);
    });
    xit('should deserialize object', () => {
      const rawData$ = cold('-abc', {
        a: new Uint8Array([DeviceIOMarker.beginMessage | 1, DeviceIOMarker.payloadMask & 0b000010]).buffer,
        b: new Uint8Array([DeviceIOMarker.payloadMask & 0b001100, DeviceIOMarker.payloadMask & 0b000000]).buffer,
        c: new Uint8Array([DeviceIOMarker.endMessage | 51]).buffer,
      });
      const deserializer = new DeviceResponseDeserializer(
        {
          test1: { obj: { type: 'object', itemMeta: { word: { type: 'uint16' } } } },
        },
        {},
        TestEnum1,
        store,
      );
      const response$ = rawData$.pipe(deserializer.mapRaw);
      const response1 = { type: 1, payload: { obj: { word: 0x0203 } } };
      const expected = cold('---a', { a: response1 });
      expect(response$).toBeObservable(expected);
    });
    xit('should deserialize list', () => {
      const rawData$ = cold('-abc', {
        a: new Uint8Array([DeviceIOMarker.beginMessage | 1, DeviceIOMarker.payloadMask & 0b000010]).buffer,
        b: new Uint8Array([DeviceIOMarker.payloadMask & 0b001100, DeviceIOMarker.payloadMask & 0b000000]).buffer,
        c: new Uint8Array([DeviceIOMarker.endMessage | 51]).buffer,
      });
      const deserializer = new DeviceResponseDeserializer(
        {
          test1: { list: { type: 'list', length: 2, itemMeta: { byte: { type: 'uint8' } } } },
        },
        {},
        TestEnum1,
        store,
      );
      const response$ = rawData$.pipe(deserializer.mapRaw);
      const response1 = { type: 1, payload: { list: [{ byte: 2 }, { byte: 3 }] } };
      const expected = cold('---a', { a: response1 });
      expect(response$).toBeObservable(expected);
    });
    xit('should deserialize uint8[]', () => {
      const rawData$ = cold('-abc', {
        a: new Uint8Array([DeviceIOMarker.beginMessage | 1, DeviceIOMarker.payloadMask & 0b000010]).buffer,
        b: new Uint8Array([DeviceIOMarker.payloadMask & 0b001100, DeviceIOMarker.payloadMask & 0b000000]).buffer,
        c: new Uint8Array([DeviceIOMarker.endMessage | 51]).buffer,
      });
      const deserializer = new DeviceResponseDeserializer(
        {
          test1: { list: { type: 'uint8[]', length: 2 } },
        },
        {},
        TestEnum1,
        store,
      );
      const response$ = rawData$.pipe(deserializer.mapRaw);
      const response1 = { type: 1, payload: { list: [2, 3] } };
      const expected = cold('---a', { a: response1 });
      expect(response$).toBeObservable(expected);
    });
    xit('should deserialize uint16[]', () => {
      const rawData$ = cold('-abc', {
        a: new Uint8Array([DeviceIOMarker.beginMessage | 1, DeviceIOMarker.payloadMask & 0b000010]).buffer,
        b: new Uint8Array([DeviceIOMarker.payloadMask & 0b001100, DeviceIOMarker.payloadMask & 0b000000]).buffer,
        c: new Uint8Array([
          DeviceIOMarker.payloadMask & 0b000001, DeviceIOMarker.payloadMask & 0b000101,
          DeviceIOMarker.payloadMask & 0b000000, DeviceIOMarker.endMessage | 51,
        ]).buffer,
      });
      const deserializer = new DeviceResponseDeserializer(
        {
          test1: { list: { type: 'uint16[]', length: 2 } },
        },
        {},
        TestEnum1,
        store,
      );
      const response$ = rawData$.pipe(deserializer.mapRaw);
      const response1 = { type: 1, payload: { list: [0x0203, 0x0405] } };
      const expected = cold('---a', { a: response1 });
      expect(response$).toBeObservable(expected);
    });
    xit('should deserialize uint32[]', () => {
      const rawData$ = cold('-abcde', {
        a: new Uint8Array([DeviceIOMarker.beginMessage | 1, DeviceIOMarker.payloadMask & 0b000010]).buffer,
        b: new Uint8Array([DeviceIOMarker.payloadMask & 0b001100, DeviceIOMarker.payloadMask & 0b000000]).buffer,
        c: new Uint8Array([
          DeviceIOMarker.payloadMask & 0b000001, DeviceIOMarker.payloadMask & 0b000101,
          DeviceIOMarker.payloadMask & 0b011100,
        ]).buffer,
        d: new Uint8Array([DeviceIOMarker.payloadMask & 0b000000, DeviceIOMarker.payloadMask & 0b000010]).buffer,
        e: new Uint8Array([
          DeviceIOMarker.payloadMask & 0b001001, DeviceIOMarker.payloadMask & 0b101000,
          DeviceIOMarker.payloadMask & 0b000000, DeviceIOMarker.endMessage | 27,
        ]).buffer,
      });
      const deserializer = new DeviceResponseDeserializer(
        {
          test1: { list: { type: 'uint32[]', length: 2 } },
        },
        {},
        TestEnum1,
        store,
      );
      const response$ = rawData$.pipe(deserializer.mapRaw);
      const response1 = { type: 1, payload: { list: [0x02030405, 0x0708090A] } };
      const expected = cold('-----a', { a: response1 });
      expect(response$).toBeObservable(expected);
    });
    xit('should deserialize struct', () => {
      const rawData$ = cold('-a', {
        a: new Uint8Array([
          DeviceIOMarker.beginMessage | 1,
          DeviceIOMarker.payloadMask & 2,
          DeviceIOMarker.payloadMask,
          DeviceIOMarker.endMessage | 46,
        ]).buffer,
      });
      const deserializer = new DeviceResponseDeserializer(
        {
          test1: { struct: 'struct' },
        },
        {
          struct: { byte: { type: 'uint8' } },
        },
        TestEnum1,
        store,
      );
      const response$ = rawData$.pipe(deserializer.mapRaw);
      const response1 = { type: 1, payload: { struct: { byte: 2 } } };
      const expected = cold('-a', { a: response1 });
      expect(response$).toBeObservable(expected);
    });
  });
  describe('flow errors', () => {
    it('should skip until begin message', () => {
      const rawData$ = cold('-a', {
        a: new Uint8Array([
          DeviceIOMarker.beginMessage | 1,
          2,
          0,
          DeviceIOMarker.endMessage | 46,
        ]).buffer,
      });
      const deserializer = new DeviceResponseDeserializer(
        {
          test1: { struct: 'struct' },
        },
        {
          struct: { byte: { type: 'uint8' } },
        },
        TestEnum1,
        store,
      );
      const response$ = rawData$.pipe(deserializer.mapRaw);
      const response1 = { type: 1, payload: { struct: { byte: 2 } } };
      const expected = cold('-a', { a: response1 });
      expect(response$).toBeObservable(expected);
    });
  });
  describe('response', () => {
    it('should deserialize program', () => {
      const rawData$ = cold('-abcde', {
        a: new Uint8Array([
          DeviceIOMarker.beginMessage | DeviceResponseType.program,
          DeviceIOMarker.payloadMask & 0b0000010,
        ]).buffer,
        b: new Uint8Array([
          DeviceIOMarker.payloadMask & 0b0000110,
          DeviceIOMarker.payloadMask & 0b0010000,
        ]).buffer,
        c: new Uint8Array([
          DeviceIOMarker.payloadMask & 0b0101000,
          DeviceIOMarker.payloadMask & 0b1100000,
          DeviceIOMarker.payloadMask & 0b1100000,
        ]).buffer,
        d: new Uint8Array([
          DeviceIOMarker.payloadMask & 0b0000001,
          DeviceIOMarker.payloadMask & 0b0000100,
          DeviceIOMarker.payloadMask & 0b0001001,
          DeviceIOMarker.payloadMask & 0b0010100,
          DeviceIOMarker.payloadMask & 0b0000000,
        ]).buffer,
        e: new Uint8Array([DeviceIOMarker.endMessage | 52]).buffer,
      });
      const deserializer = new DeviceResponseDeserializer(
        deviceResponseMeta,
        structMeta,
        DeviceResponseType,
        store,
      );
      const response$ = rawData$.pipe(deserializer.mapRaw);
      const response = {
        type: DeviceResponseType.program,
        payload: {
          index: 2,
          value: {
            valves: [3, 4, 5],
            compote: 6,
            start: {
              wday: 7,
              day: 8,
              month: 9,
              year: 10,
            },
          },
        },
      };
      const expected = cold('-----a', { a: response });
      expect(response$).toBeObservable(expected);
    });
  });
  describe('response time', () => {
    xit('should deserialize time', () => {
      const rawData$ = cold('-abс', {
        a: new Uint8Array([
          145,
        ]).buffer,
        b: new Uint8Array([
          26,
          68,
          16,
          64,
          127,
          3,
        ]).buffer,
        с: new Uint8Array([
          4,
          0,
          127,
          244,
        ]).buffer,
      });
      const deserializer = new DeviceResponseDeserializer(
        deviceResponseMeta,
        structMeta,
        DeviceResponseType,
        store,
      );
      const response$ = rawData$.pipe(deserializer.mapRaw);
      const response = {
        type: DeviceResponseType.program,
        payload: {},
      };
      const expected = cold('---a', { a: response });
      expect(response$).toBeObservable(expected);
    });
  });
});
