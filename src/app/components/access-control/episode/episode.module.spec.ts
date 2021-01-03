import {EpisodeModule} from './episode.module';

describe('EpisodeModule', () => {
  let module: EpisodeModule;

  beforeEach(() => {
    module = new EpisodeModule();
  });

  it('should create an instance', () => {
    expect(module).toBeTruthy();
  });
});
