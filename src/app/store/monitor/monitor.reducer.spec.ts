import { ActionMonitorUpdateTemp, initialMonitorState, monitorReducer } from './monitor.reducer';

describe('MonitorReducer', () => {
  describe('ActionMonitorInit', () => {
  });
  describe('ActionMonitorUpdateTemp', () => {
    it('should update', () => {
      const action = new ActionMonitorUpdateTemp({
        xData: ['string'],
        yData: [1],
      });
      const state = monitorReducer(initialMonitorState, action);
      expect(state).toEqual({
        temp: {
          xData: ['string'],
          yData: [1],
        },
        flow: {
          xData: [],
          yData: [],
        },
      });
    });
  });
});
