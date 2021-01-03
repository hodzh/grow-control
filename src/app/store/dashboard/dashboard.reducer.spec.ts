import { ActionDashboardUpdateTime, dashboardReducer, initialDashboardState } from './dashboard.reducer';

describe('DashboardReducer', () => {
  describe('ActionDashboardInit', () => {
  });
  describe('ActionDashboardUpdateTime', () => {
    it('should update', () => {
      const action = new ActionDashboardUpdateTime({
        minute: 1,
        second: 2,
        hour: 3,
        wday: 4,
        day: 5,
        month: 6,
        year: 7,
      });
      const state = dashboardReducer(initialDashboardState, action);
      expect(state).toEqual({
        time: {
          minute: 1,
          second: 2,
          hour: 3,
          wday: 4,
          day: 5,
          month: 6,
          year: 7,
        },
        temp: 0,
        minTemp: -99,
        maxTemp: 99,
        status: {
          state: 0,
          cmdState: 0,
          valve: 0,
          flow: 0,
          volume: 0,
          totalVolume: 0,
          mix: 0,
          dose: 0,
        },
      });
    });
  });
});
