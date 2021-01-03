import { DeviceRequestSerializer } from './device-request-serializer';

describe('DeviceRequestSerializer', () => {
  beforeEach(() => {
  });

  it('should serialize SET_SETTINGS', () => {
    // const settings = {
    //   program: [
    //     {
    //       name: 'p1',
    //       valves: [1, 2, 3],
    //       compote: 4,
    //     },
    //   ],
    //   compote: [
    //     {
    //       name: 'c1',
    //       volume: 5,
    //       washVolume: 6,
    //       dose: [7, 8],
    //     },
    //   ],
    //   schedule: [],
    //   timer: [],
    //   pump: [],
    //   mixer: [],
    //   dose: [],
    // };
    // expect(bytes(new DeviceRequestSetSettings(settings)))
    //   .toMatchInlineSnapshot(`
    //   Array [
    //     14,
    //     2,
    //     112,
    //     49,
    //     3,
    //     1,
    //     2,
    //     3,
    //     4,
    //     2,
    //     99,
    //     49,
    //     0,
    //     5,
    //     0,
    //     6,
    //     2,
    //     0,
    //     7,
    //     0,
    //     8,
    //     0,
    //     0,
    //   ]
    // `);
  });

  // function bytes(message: DeviceRequest): number[] {
  //   return Array.from(new Uint8Array(serializer.serialize(message)));
  // }
});
