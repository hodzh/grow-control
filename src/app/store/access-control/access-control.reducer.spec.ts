import { accessControlReducer, ActionAccessControlInit, initialAccessControlState } from './access-control.reducer';

describe('AccessControlReducer', () => {
  describe('ActionAccessControlInit', () => {
    it('should init', () => {
      const state = initialAccessControlState;
      const action = new ActionAccessControlInit();
      expect(accessControlReducer(state, action)).toEqual(state);
    });
  });
});
