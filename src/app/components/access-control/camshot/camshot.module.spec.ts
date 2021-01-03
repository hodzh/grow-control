import {CamshotModule} from './camshot.module';

describe('CamshotModule', () => {
  let module: CamshotModule;

  beforeEach(() => {
    module = new CamshotModule();
  });

  it('should create an instance', () => {
    expect(module).toBeTruthy();
  });
});
