import { Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { concat, EMPTY, from, Observable, of } from 'rxjs';
import { debounceTime, mergeMap, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import {
  ActionSettingsChangeCompoteDaily,
  ActionSettingsChangeDose,
  ActionSettingsChangeMixer,
  ActionSettingsChangePinAssignment,
  ActionSettingsChangeProgram,
  ActionSettingsChangePump,
  ActionSettingsChangeSchedule,
  ActionSettingsChangeTimer,
  ActionSettingsUpdate,
  selectorSettings,
  SettingsActionTypes,
  SettingsState,
} from './settings.reducer';
import { LocalStorageService } from '../../services/storage/local-storage.service';
import { DeviceRequestType } from '../../model/device-request-type';
import { deviceConfig } from '../../model/device-config';
import { ConnectService } from '../../services/connect/connect.service';
import { ActionConnectRequest } from '../connect/connect.reducer';
import { DevicePinType } from '../../model/device-parts';

@Injectable()
export class SettingsEffects {
  constructor(
    private readonly actions$: Actions<Action>,
    private readonly store: Store<any>,
    private readonly storage: LocalStorageService,
  ) {
  }

  @Effect({ dispatch: true })
  init(): Observable<Action> {
    return this.actions$.pipe(ofType(SettingsActionTypes.INIT))
      .pipe(switchMap(() => concat(
        of(new ActionSettingsUpdate(this.storage.loadSettings())),
        this.store.pipe(select(selectorSettings))
          .pipe(debounceTime(300))
          .pipe(tap(state => this.storage.saveSettings(state)))
          .pipe(mergeMap(() => EMPTY)),
      )))
      ;
  }

  @Effect({ dispatch: true })
  saveSettings(): Observable<Action> {
    return this.actions$.pipe(ofType(SettingsActionTypes.RESTORE))
      .pipe(withLatestFrom(this.store.pipe(select(selectorSettings))))
      .pipe(switchMap(([action, { settings, pinAssignment }]: [any, SettingsState]): Observable<Action> =>
        concat(
          this.saveItems(
            settings.program,
            DeviceRequestType.setProgram,
          ),
          concat(...settings.compote.map((compote, index) =>
            from(compote.daily.map((value, dailyIndex) =>
              new ActionConnectRequest({
                type: DeviceRequestType.setCompoteDaily,
                payload: {
                  index,
                  dailyIndex,
                  value,
                },
              }),
            )),
          )),
          this.saveItems(
            settings.dose,
            DeviceRequestType.setDose,
          ),
          this.saveItems(
            settings.timer,
            DeviceRequestType.setTimer,
          ),
          this.saveItems(
            settings.levelSensor,
            DeviceRequestType.setLevelSensor,
          ),
          this.saveItems(
            settings.mixer,
            DeviceRequestType.setMixer,
          ),
          this.saveItems(
            settings.pump,
            DeviceRequestType.setPump,
          ),
          this.saveItems(
            settings.schedule,
            DeviceRequestType.setSchedule,
          ),
          this.savePins(
            pinAssignment.beeper,
            DevicePinType.beeper,
          ),
          this.savePins(
            pinAssignment.button,
            DevicePinType.button,
          ),
          this.savePins(
            pinAssignment.display,
            DevicePinType.display,
          ),
          this.savePins(
            pinAssignment.dose,
            DevicePinType.dose,
          ),
          this.savePins(
            pinAssignment.doseMixer,
            DevicePinType.doseMixer,
          ),
          this.savePins(
            pinAssignment.flowSensor,
            DevicePinType.flowSensor,
          ),
          this.savePins(
            pinAssignment.levelSensor,
            DevicePinType.levelSensor,
          ),
          this.savePins(
            pinAssignment.mixer,
            DevicePinType.mixer,
          ),
          this.savePins(
            pinAssignment.pump,
            DevicePinType.pump,
          ),
          this.savePins(
            pinAssignment.rtc,
            DevicePinType.rtc,
          ),
          this.savePins(
            pinAssignment.valve,
            DevicePinType.valve,
          ),
        )))
      ;
  }

  @Effect({ dispatch: true })
  onChangePump(): Observable<any> {
    return this.actions$.pipe(ofType<ActionSettingsChangePump>(SettingsActionTypes.CHANGE_PUMP))
      .pipe(debounceTime(1000))
      .pipe(switchMap(({ payload }) =>
        of(new ActionConnectRequest({
          type: DeviceRequestType.setPump,
          payload,
        })),
      ));
  }

  @Effect({ dispatch: true })
  loadPump(): Observable<Action> {
    return this.actions$.pipe(ofType(SettingsActionTypes.LOAD_PUMP))
      .pipe(switchMap(() => from([
        ...(new Array(deviceConfig.pumpCount).fill(0)
            .map((x, index) => new ActionConnectRequest({
              type: DeviceRequestType.getPump,
              payload: {
                index,
              },
            }))
        ),
      ])))
      ;
  }

  @Effect({ dispatch: true })
  onChangeMixer(): Observable<any> {
    return this.actions$.pipe(ofType<ActionSettingsChangeMixer>(SettingsActionTypes.CHANGE_MIXER))
      .pipe(debounceTime(1000))
      .pipe(switchMap(({ payload }) =>
        of(new ActionConnectRequest({
          type: DeviceRequestType.setMixer,
          payload,
        })),
      ));
  }

  @Effect({ dispatch: true })
  loadMixer(): Observable<Action> {
    return this.actions$.pipe(ofType(SettingsActionTypes.LOAD_MIXER))
      .pipe(switchMap(() => from([
        ...(new Array(deviceConfig.mixerCount).fill(0)
            .map((x, index) => new ActionConnectRequest({
              type: DeviceRequestType.getMixer,
              payload: {
                index,
              },
            }))
        ),
      ])))
      ;
  }

  @Effect({ dispatch: true })
  onChangeDose(): Observable<any> {
    return this.actions$.pipe(ofType<ActionSettingsChangeDose>(SettingsActionTypes.CHANGE_DOSE))
      .pipe(debounceTime(1000))
      .pipe(switchMap(({ payload }) =>
        of(new ActionConnectRequest({
          type: DeviceRequestType.setDose,
          payload,
        })),
      ));
  }

  @Effect({ dispatch: true })
  loadDose(): Observable<Action> {
    return this.actions$.pipe(ofType(SettingsActionTypes.LOAD_DOSE))
      .pipe(switchMap(() => from([
        ...(new Array(deviceConfig.doseCount).fill(0)
            .map((x, index) => new ActionConnectRequest({
              type: DeviceRequestType.getDose,
              payload: {
                index,
              },
            }))
        ),
      ])))
      ;
  }

  @Effect({ dispatch: true })
  onChangeProgram(): Observable<any> {
    return this.actions$.pipe(ofType<ActionSettingsChangeProgram>(SettingsActionTypes.CHANGE_PROGRAM))
      .pipe(debounceTime(1000))
      .pipe(switchMap(({ payload }) =>
        of(new ActionConnectRequest({
          type: DeviceRequestType.setProgram,
          payload,
        })),
      ));
  }

  @Effect({ dispatch: true })
  loadProgram(): Observable<Action> {
    return this.actions$.pipe(ofType(SettingsActionTypes.LOAD_PROGRAM))
      .pipe(switchMap(() => from([
        ...(new Array(deviceConfig.programCount).fill(0)
            .map((x, index) => new ActionConnectRequest({
              type: DeviceRequestType.getProgram,
              payload: {
                index,
              },
            }))
        ),
      ])))
      ;
  }

  @Effect({ dispatch: true })
  onChangeCompote(): Observable<any> {
    return this.actions$.pipe(ofType<ActionSettingsChangeCompoteDaily>(SettingsActionTypes.CHANGE_COMPOTE_DAILY))
      .pipe(debounceTime(1000))
      .pipe(switchMap(({ payload }) =>
        of(new ActionConnectRequest({
          type: DeviceRequestType.setCompoteDaily,
          payload,
        })),
      ));
  }

  @Effect({ dispatch: true })
  loadCompote(): Observable<Action> {
    return this.actions$.pipe(ofType(SettingsActionTypes.LOAD_COMPOTE))
      .pipe(switchMap((): Observable<Action> => from([
        ...([].concat(...(new Array(deviceConfig.compoteCount).fill(0)
            .map((x, index) =>
              new Array(deviceConfig.compoteDailyCount).fill(0)
                .map((x, dailyIndex) => new ActionConnectRequest({
                  type: DeviceRequestType.getCompoteDaily,
                  payload: {
                    index,
                    dailyIndex,
                  },
                })),
            )
        ))),
      ])))
      ;
  }

  @Effect({ dispatch: true })
  onChangeTimer(): Observable<any> {
    return this.actions$.pipe(ofType<ActionSettingsChangeTimer>(SettingsActionTypes.CHANGE_TIMER))
      .pipe(debounceTime(1000))
      .pipe(switchMap(({ payload }) =>
        of(new ActionConnectRequest({
          type: DeviceRequestType.setTimer,
          payload,
        })),
      ));
  }

  @Effect({ dispatch: true })
  loadTimer(): Observable<Action> {
    return this.actions$.pipe(ofType(SettingsActionTypes.LOAD_TIMER))
      .pipe(switchMap(() => from([
        ...(new Array(deviceConfig.timerCount).fill(0)
            .map((x, index) => new ActionConnectRequest({
              type: DeviceRequestType.getTimer,
              payload: {
                index,
              },
            }))
        ),
      ])))
      ;
  }

  @Effect({ dispatch: true })
  onChangeSchedule(): Observable<any> {
    return this.actions$.pipe(ofType<ActionSettingsChangeSchedule>(SettingsActionTypes.CHANGE_SCHEDULE))
      .pipe(debounceTime(1000))
      .pipe(switchMap(({ payload }) =>
        of(new ActionConnectRequest({
          type: DeviceRequestType.setSchedule,
          payload,
        })),
      ));
  }

  @Effect({ dispatch: true })
  loadSchedule(): Observable<Action> {
    return this.actions$.pipe(ofType(SettingsActionTypes.LOAD_SCHEDULE))
      .pipe(switchMap(() => from([
        ...(new Array(deviceConfig.scheduleCount).fill(0)
            .map((x, index) => new ActionConnectRequest({
              type: DeviceRequestType.getSchedule,
              payload: {
                index,
              },
            }))
        ),
      ])))
      ;
  }

  @Effect({ dispatch: true })
  onChangePin(): Observable<any> {
    return this.actions$.pipe(ofType<ActionSettingsChangePinAssignment>(SettingsActionTypes.CHANGE_PIN_ASSIGNMENT))
      .pipe(switchMap(({ payload }) =>
        of(new ActionConnectRequest({
          type: DeviceRequestType.setPin,
          payload: {
            type: payload.type,
            index: payload.index,
            value: payload.value,
          },
        })),
      ));
  }

  @Effect({ dispatch: true })
  loadPinAssignment(): Observable<Action> {
    return this.actions$.pipe(ofType(SettingsActionTypes.LOAD_PIN_ASSIGNMENT))
      .pipe(switchMap(() => from([
        ...this.getPinRequest(deviceConfig.pumpCount, DevicePinType.pump),
        ...this.getPinRequest(deviceConfig.valveCount, DevicePinType.valve),
        ...this.getPinRequest(deviceConfig.doseCount, DevicePinType.dose),
        ...this.getPinRequest(deviceConfig.doseMixerCount, DevicePinType.doseMixer),
        ...this.getPinRequest(deviceConfig.flowSensorCount, DevicePinType.flowSensor),
        ...this.getPinRequest(deviceConfig.levelSensorCount, DevicePinType.levelSensor),
        ...this.getPinRequest(deviceConfig.mixerCount, DevicePinType.mixer),
        ...this.getPinRequest(deviceConfig.beeperCount, DevicePinType.beeper),
      ])))
      ;
  }

  private getPinRequest(count: number, type: number): Action[] {
    return new Array(count).fill(0)
      .map((x, index) => new ActionConnectRequest({
        type: DeviceRequestType.getPin,
        payload: {
          index,
          type,
        },
      }));
  }

  private saveItems<T>(
    items: T[],
    type: DeviceRequestType,
  ): Observable<Action> {
    if (!items.length) {
      return EMPTY;
    }
    return from(items.map((value, index) => new ActionConnectRequest({
      type,
      payload: {
        index,
        value,
      },
    } as any)));
  }

  private savePins(
    items: number[],
    type: DevicePinType,
  ): Observable<Action> {
    if (!items.length) {
      return EMPTY;
    }
    return from(items.map((value, index) => new ActionConnectRequest({
      type: DeviceRequestType.setPin,
      payload: {
        type,
        index,
        value,
      },
    })));
  }
}
