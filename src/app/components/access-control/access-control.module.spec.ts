import {AccessControlModule} from './access-control.module';

describe('AccessControlModule', () => {
  let module: AccessControlModule;

  beforeEach(() => {
    module = new AccessControlModule();
  });

  it('should create an instance', () => {
    expect(module).toBeTruthy();
  });
});
