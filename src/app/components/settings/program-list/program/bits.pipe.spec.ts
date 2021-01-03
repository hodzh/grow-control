import {BitsPipe} from './bits.pipe';

describe('BitsPipe', () => {
  it('create an instance', () => {
    const pipe = new BitsPipe();
    expect(pipe).toBeTruthy();
  });

  it('provides bit count', () => {
    const pipe = new BitsPipe();
    expect(pipe.transform([0b01010101, 0b10101010])).toEqual([1, 3, 5, 7, 10, 12, 14, 16]);
  });
});
