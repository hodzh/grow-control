import {CamshotSliderModule} from './camshot-slider.module';

describe('CamshotSliderModule', () => {
  let module: CamshotSliderModule;

  beforeEach(() => {
    module = new CamshotSliderModule();
  });

  it('should create an instance', () => {
    expect(module).toBeTruthy();
  });
});
