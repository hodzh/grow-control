import { ActionConfigUpdate, configReducer, initialConfigState } from './config.reducer';

describe('ConfigReducer', () => {
  describe('ActionConfigInit', () => {
  });
  describe('ActionConfigUpdate', () => {
    it('should update', () => {
      const action = new ActionConfigUpdate(initialConfigState);
      const state = configReducer(null, action);
      expect(state).toBe(initialConfigState);
    });
  });
});
