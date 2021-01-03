import {
  ActionSettingsUpdate,
  initialSettingsState,
  settingsReducer,
} from './settings.reducer';

describe('SettingsReducer', () => {
  describe('ActionSettingsInit', () => {});
  describe('ActionSettingsUpdate', () => {
    it('should update', () => {
      const action = new ActionSettingsUpdate(initialSettingsState);
      const state = settingsReducer(null, action);
      expect(state).toMatchInlineSnapshot(`
        Object {
          "names": Object {
            "compote": Array [
              "",
              "",
            ],
            "dose": Array [
              "Grow",
              "Bloom",
              "",
              "",
            ],
            "levelSensor": Array [
              "Min",
              "Max",
            ],
            "mixer": Array [
              "Compote",
              "Wash",
            ],
            "program": Array [
              "",
              "",
              "",
              "",
            ],
            "pump": Array [
              "In",
              "Out",
            ],
            "schedule": Array [
              "",
              "",
              "",
              "",
            ],
            "timer": Array [
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
            ],
          },
          "pinAssignment": Object {
            "button": Array [],
            "display": Array [],
            "dose": Array [
              0,
              0,
              0,
              0,
            ],
            "doseMixer": Array [],
            "flowSensor": Array [],
            "levelSensor": Array [
              0,
              0,
            ],
            "mixer": Array [
              0,
            ],
            "pump": Array [
              0,
              0,
            ],
            "rtc": Array [],
            "valve": Array [
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
            ],
          },
          "settings": Object {
            "compote": Array [
              Object {
                "daily": Array [
                  Object {
                    "days": 0,
                    "dose": Array [
                      0,
                      0,
                      0,
                      0,
                    ],
                    "schedule": 0,
                    "volume": 0,
                    "washVolume": 0,
                  },
                  Object {
                    "days": 0,
                    "dose": Array [
                      0,
                      0,
                      0,
                      0,
                    ],
                    "schedule": 0,
                    "volume": 0,
                    "washVolume": 0,
                  },
                  Object {
                    "days": 0,
                    "dose": Array [
                      0,
                      0,
                      0,
                      0,
                    ],
                    "schedule": 0,
                    "volume": 0,
                    "washVolume": 0,
                  },
                  Object {
                    "days": 0,
                    "dose": Array [
                      0,
                      0,
                      0,
                      0,
                    ],
                    "schedule": 0,
                    "volume": 0,
                    "washVolume": 0,
                  },
                  Object {
                    "days": 0,
                    "dose": Array [
                      0,
                      0,
                      0,
                      0,
                    ],
                    "schedule": 0,
                    "volume": 0,
                    "washVolume": 0,
                  },
                  Object {
                    "days": 0,
                    "dose": Array [
                      0,
                      0,
                      0,
                      0,
                    ],
                    "schedule": 0,
                    "volume": 0,
                    "washVolume": 0,
                  },
                  Object {
                    "days": 0,
                    "dose": Array [
                      0,
                      0,
                      0,
                      0,
                    ],
                    "schedule": 0,
                    "volume": 0,
                    "washVolume": 0,
                  },
                  Object {
                    "days": 0,
                    "dose": Array [
                      0,
                      0,
                      0,
                      0,
                    ],
                    "schedule": 0,
                    "volume": 0,
                    "washVolume": 0,
                  },
                  Object {
                    "days": 0,
                    "dose": Array [
                      0,
                      0,
                      0,
                      0,
                    ],
                    "schedule": 0,
                    "volume": 0,
                    "washVolume": 0,
                  },
                  Object {
                    "days": 0,
                    "dose": Array [
                      0,
                      0,
                      0,
                      0,
                    ],
                    "schedule": 0,
                    "volume": 0,
                    "washVolume": 0,
                  },
                  Object {
                    "days": 0,
                    "dose": Array [
                      0,
                      0,
                      0,
                      0,
                    ],
                    "schedule": 0,
                    "volume": 0,
                    "washVolume": 0,
                  },
                  Object {
                    "days": 0,
                    "dose": Array [
                      0,
                      0,
                      0,
                      0,
                    ],
                    "schedule": 0,
                    "volume": 0,
                    "washVolume": 0,
                  },
                  Object {
                    "days": 0,
                    "dose": Array [
                      0,
                      0,
                      0,
                      0,
                    ],
                    "schedule": 0,
                    "volume": 0,
                    "washVolume": 0,
                  },
                  Object {
                    "days": 0,
                    "dose": Array [
                      0,
                      0,
                      0,
                      0,
                    ],
                    "schedule": 0,
                    "volume": 0,
                    "washVolume": 0,
                  },
                ],
              },
              Object {
                "daily": Array [
                  Object {
                    "days": 0,
                    "dose": Array [
                      0,
                      0,
                      0,
                      0,
                    ],
                    "schedule": 0,
                    "volume": 0,
                    "washVolume": 0,
                  },
                  Object {
                    "days": 0,
                    "dose": Array [
                      0,
                      0,
                      0,
                      0,
                    ],
                    "schedule": 0,
                    "volume": 0,
                    "washVolume": 0,
                  },
                  Object {
                    "days": 0,
                    "dose": Array [
                      0,
                      0,
                      0,
                      0,
                    ],
                    "schedule": 0,
                    "volume": 0,
                    "washVolume": 0,
                  },
                  Object {
                    "days": 0,
                    "dose": Array [
                      0,
                      0,
                      0,
                      0,
                    ],
                    "schedule": 0,
                    "volume": 0,
                    "washVolume": 0,
                  },
                  Object {
                    "days": 0,
                    "dose": Array [
                      0,
                      0,
                      0,
                      0,
                    ],
                    "schedule": 0,
                    "volume": 0,
                    "washVolume": 0,
                  },
                  Object {
                    "days": 0,
                    "dose": Array [
                      0,
                      0,
                      0,
                      0,
                    ],
                    "schedule": 0,
                    "volume": 0,
                    "washVolume": 0,
                  },
                  Object {
                    "days": 0,
                    "dose": Array [
                      0,
                      0,
                      0,
                      0,
                    ],
                    "schedule": 0,
                    "volume": 0,
                    "washVolume": 0,
                  },
                  Object {
                    "days": 0,
                    "dose": Array [
                      0,
                      0,
                      0,
                      0,
                    ],
                    "schedule": 0,
                    "volume": 0,
                    "washVolume": 0,
                  },
                  Object {
                    "days": 0,
                    "dose": Array [
                      0,
                      0,
                      0,
                      0,
                    ],
                    "schedule": 0,
                    "volume": 0,
                    "washVolume": 0,
                  },
                  Object {
                    "days": 0,
                    "dose": Array [
                      0,
                      0,
                      0,
                      0,
                    ],
                    "schedule": 0,
                    "volume": 0,
                    "washVolume": 0,
                  },
                  Object {
                    "days": 0,
                    "dose": Array [
                      0,
                      0,
                      0,
                      0,
                    ],
                    "schedule": 0,
                    "volume": 0,
                    "washVolume": 0,
                  },
                  Object {
                    "days": 0,
                    "dose": Array [
                      0,
                      0,
                      0,
                      0,
                    ],
                    "schedule": 0,
                    "volume": 0,
                    "washVolume": 0,
                  },
                  Object {
                    "days": 0,
                    "dose": Array [
                      0,
                      0,
                      0,
                      0,
                    ],
                    "schedule": 0,
                    "volume": 0,
                    "washVolume": 0,
                  },
                  Object {
                    "days": 0,
                    "dose": Array [
                      0,
                      0,
                      0,
                      0,
                    ],
                    "schedule": 0,
                    "volume": 0,
                    "washVolume": 0,
                  },
                ],
              },
            ],
            "dose": Array [
              Object {
                "pwm": 0,
                "pwmSensor": 0,
                "rate": 0,
                "seconds": 0,
              },
              Object {
                "pwm": 0,
                "pwmSensor": 0,
                "rate": 0,
                "seconds": 0,
              },
              Object {
                "pwm": 0,
                "pwmSensor": 0,
                "rate": 0,
                "seconds": 0,
              },
              Object {
                "pwm": 0,
                "pwmSensor": 0,
                "rate": 0,
                "seconds": 0,
              },
            ],
            "levelSensor": Array [
              Object {
                "beepSeconds": 1,
              },
              Object {
                "beepSeconds": 1,
              },
            ],
            "mixer": Array [
              Object {
                "pwm": 0,
                "pwmSensor": 0,
                "seconds": 180,
                "washSeconds": 180,
              },
            ],
            "program": Array [
              Object {
                "compote": 0,
                "start": Object {
                  "day": 29,
                  "month": 11,
                  "wday": 2,
                  "year": 50,
                },
                "valves": Array [
                  0,
                  0,
                  0,
                ],
              },
              Object {
                "compote": 0,
                "start": Object {
                  "day": 29,
                  "month": 11,
                  "wday": 2,
                  "year": 50,
                },
                "valves": Array [
                  0,
                  0,
                  0,
                ],
              },
              Object {
                "compote": 0,
                "start": Object {
                  "day": 29,
                  "month": 11,
                  "wday": 2,
                  "year": 50,
                },
                "valves": Array [
                  0,
                  0,
                  0,
                ],
              },
              Object {
                "compote": 0,
                "start": Object {
                  "day": 29,
                  "month": 11,
                  "wday": 2,
                  "year": 50,
                },
                "valves": Array [
                  0,
                  0,
                  0,
                ],
              },
            ],
            "pump": Array [
              Object {
                "minFlow": 100,
                "pwm": 0,
                "pwmFlow": 0,
                "rate": 5880,
                "startingTime": 3000,
              },
              Object {
                "minFlow": 100,
                "pwm": 0,
                "pwmFlow": 0,
                "rate": 5880,
                "startingTime": 3000,
              },
            ],
            "schedule": Array [
              Object {
                "deviceId": 0,
                "enable": 0,
                "endTime": Object {
                  "hour": 0,
                  "minute": 0,
                  "second": 0,
                },
                "startTime": Object {
                  "hour": 0,
                  "minute": 0,
                  "second": 0,
                },
              },
              Object {
                "deviceId": 0,
                "enable": 0,
                "endTime": Object {
                  "hour": 0,
                  "minute": 0,
                  "second": 0,
                },
                "startTime": Object {
                  "hour": 0,
                  "minute": 0,
                  "second": 0,
                },
              },
              Object {
                "deviceId": 0,
                "enable": 0,
                "endTime": Object {
                  "hour": 0,
                  "minute": 0,
                  "second": 0,
                },
                "startTime": Object {
                  "hour": 0,
                  "minute": 0,
                  "second": 0,
                },
              },
              Object {
                "deviceId": 0,
                "enable": 0,
                "endTime": Object {
                  "hour": 0,
                  "minute": 0,
                  "second": 0,
                },
                "startTime": Object {
                  "hour": 0,
                  "minute": 0,
                  "second": 0,
                },
              },
            ],
            "timer": Array [
              Object {
                "enable": 0,
                "program": 0,
                "time": Object {
                  "hour": 0,
                  "minute": 0,
                  "second": 0,
                },
                "weekDays": 0,
              },
              Object {
                "enable": 0,
                "program": 0,
                "time": Object {
                  "hour": 0,
                  "minute": 0,
                  "second": 0,
                },
                "weekDays": 0,
              },
              Object {
                "enable": 0,
                "program": 0,
                "time": Object {
                  "hour": 0,
                  "minute": 0,
                  "second": 0,
                },
                "weekDays": 0,
              },
              Object {
                "enable": 0,
                "program": 0,
                "time": Object {
                  "hour": 0,
                  "minute": 0,
                  "second": 0,
                },
                "weekDays": 0,
              },
              Object {
                "enable": 0,
                "program": 0,
                "time": Object {
                  "hour": 0,
                  "minute": 0,
                  "second": 0,
                },
                "weekDays": 0,
              },
              Object {
                "enable": 0,
                "program": 0,
                "time": Object {
                  "hour": 0,
                  "minute": 0,
                  "second": 0,
                },
                "weekDays": 0,
              },
              Object {
                "enable": 0,
                "program": 0,
                "time": Object {
                  "hour": 0,
                  "minute": 0,
                  "second": 0,
                },
                "weekDays": 0,
              },
              Object {
                "enable": 0,
                "program": 0,
                "time": Object {
                  "hour": 0,
                  "minute": 0,
                  "second": 0,
                },
                "weekDays": 0,
              },
            ],
          },
          "sync": false,
        }
      `);
    });
  });
  describe('ActionSettingsAddCompote', () => {});
  describe('ActionSettingsAddProgram', () => {});
  describe('ActionSettingsChangeCompote', () => {});
  describe('ActionSettingsChangeProgram', () => {});
  describe('ActionSettingsRemoveCompote', () => {});
  describe('ActionSettingsRemoveProgram', () => {});
});
