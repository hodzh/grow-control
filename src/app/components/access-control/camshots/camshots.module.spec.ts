import {CamshotsModule} from './camshots.module';

describe('CamshotsModule', () => {
  let module: CamshotsModule;

  beforeEach(() => {
    module = new CamshotsModule();
  });

  it('should create an instance', () => {
    expect(module).toBeTruthy();
  });
});
