import { Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { concat, EMPTY, from, Observable, of, range } from 'rxjs';
import { concatAll, debounceTime, filter, map, mergeMap, switchMap, take, tap, withLatestFrom } from 'rxjs/operators';
import {
  ActionSettingsChangeCompoteDaily,
  ActionSettingsChangeDose,
  ActionSettingsChangeMixer, ActionSettingsChangePinAssignment,
  ActionSettingsChangeProgram,
  ActionSettingsChangePump,
  ActionSettingsChangeSchedule,
  ActionSettingsChangeTimer,
  ActionSettingsSyncEnd,
  ActionSettingsUpdate,
  selectorCompoteDaily,
  selectorDose,
  selectorMixer,
  selectorPinDose,
  selectorPinDoseMixer,
  selectorPinFlowSensor,
  selectorPinMixer,
  selectorPinPump,
  selectorProgram,
  selectorPump,
  selectorSchedule,
  selectorSettings,
  selectorTimer,
  SettingsActionTypes,
} from './settings.reducer';
import { LocalStorageService } from '../../services/storage/local-storage.service';
import { DeviceRequestType } from '../../model/device-request-type';
import { DeviceResponseType } from '../../model/device-response-type';
import { deviceConfig } from '../../model/device-config';
import { ConnectService } from '../../services/connect/connect.service';
import { ActionConnectRequest } from '../connect/connect.reducer';

@Injectable()
export class SettingsEffects {
  constructor(
    private readonly actions$: Actions<Action>,
    private readonly store: Store<any>,
    private readonly storage: LocalStorageService,
    private readonly connectBt: ConnectService,
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

  @Effect({ dispatch: false })
  sync(): Observable<any> {
    return this.actions$.pipe(ofType(SettingsActionTypes.SYNC))
      .pipe(withLatestFrom(this.store.pipe(select(selectorSettings))))
      .pipe(filter(([action, state]) => !state.sync))
      .pipe(switchMap(([action, state]) => concat(
        this.syncItems(
          selectorProgram,
          DeviceRequestType.getProgram,
          DeviceRequestType.setProgram,
          DeviceResponseType.program,
          deviceConfig.programCount,
        ),
        ...state.settings.compote.map((compote, id) =>
          this.syncItems(
            selectorCompoteDaily(id),
            DeviceRequestType.getCompoteDaily,
            DeviceRequestType.setCompoteDaily,
            DeviceResponseType.compoteDaily,
            deviceConfig.compoteDailyCount,
            { id },
          )),
        this.syncItems(
          selectorTimer,
          DeviceRequestType.getTimer,
          DeviceRequestType.setTimer,
          DeviceResponseType.timer,
          deviceConfig.timerCount,
        ),
        this.syncItems(
          selectorSchedule,
          DeviceRequestType.getSchedule,
          DeviceRequestType.setSchedule,
          DeviceResponseType.schedule,
          deviceConfig.scheduleCount,
        ),
        this.syncItems(
          selectorPump,
          DeviceRequestType.getPump,
          DeviceRequestType.setPump,
          DeviceResponseType.pump,
          deviceConfig.pumpCount,
        ),
        this.syncItems(
          selectorMixer,
          DeviceRequestType.getMixer,
          DeviceRequestType.setMixer,
          DeviceResponseType.mixer,
          deviceConfig.mixerCount,
        ),
        this.syncItems(
          selectorDose,
          DeviceRequestType.getDose,
          DeviceRequestType.setDose,
          DeviceResponseType.dose,
          deviceConfig.doseCount,
        ),
        this.syncItems(
          selectorPinPump,
          DeviceRequestType.getPinPump,
          DeviceRequestType.setPinPump,
          DeviceResponseType.pinPump,
          deviceConfig.pumpCount,
        ),
        this.syncItems(
          selectorPinFlowSensor,
          DeviceRequestType.getPinFlowSensor,
          DeviceRequestType.setPinFlowSensor,
          DeviceResponseType.pinFlowSensor,
          deviceConfig.pumpCount,
        ),
        this.syncItems(
          selectorPinMixer,
          DeviceRequestType.getPinMixer,
          DeviceRequestType.setPinMixer,
          DeviceResponseType.pinMixer,
          deviceConfig.mixerCount,
        ),
        this.syncItems(
          selectorPinDose,
          DeviceRequestType.getPinDose,
          DeviceRequestType.setPinDose,
          DeviceResponseType.pinDose,
          deviceConfig.doseCount,
        ),
        this.syncItems(
          selectorPinDoseMixer,
          DeviceRequestType.getPinDoseMixer,
          DeviceRequestType.setPinDoseMixer,
          DeviceResponseType.pinDoseMixer,
          deviceConfig.doseCount,
        ),
        of(new ActionSettingsSyncEnd()),
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
        }))
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
                }))
            )
        )))
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
          type: this.keyToCmd(payload.key),
          payload: {
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
        ...(new Array(deviceConfig.pumpCount).fill(0)
            .map((x, index) => new ActionConnectRequest({
              type: DeviceRequestType.getPinPump,
              payload: {
                index,
              },
            }))
        ),
        ...(new Array(deviceConfig.valveCount).fill(0)
            .map((x, index) => new ActionConnectRequest({
              type: DeviceRequestType.getPinValve,
              payload: {
                index,
              },
            }))
        ),
        ...(new Array(deviceConfig.doseCount).fill(0)
            .map((x, index) => new ActionConnectRequest({
              type: DeviceRequestType.getPinDose,
              payload: {
                index,
              },
            }))
        ),
        ...(new Array(deviceConfig.doseMixerCount).fill(0)
            .map((x, index) => new ActionConnectRequest({
              type: DeviceRequestType.getPinDoseMixer,
              payload: {
                index,
              },
            }))
        ),
        ...(new Array(deviceConfig.flowSensorCount).fill(0)
            .map((x, index) => new ActionConnectRequest({
              type: DeviceRequestType.getPinFlowSensor,
              payload: {
                index,
              },
            }))
        ),
        ...(new Array(deviceConfig.levelSensorCount).fill(0)
            .map((x, index) => new ActionConnectRequest({
              type: DeviceRequestType.getPinLevelSensor,
              payload: {
                index,
              },
            }))
        ),
        ...(new Array(deviceConfig.mixerCount).fill(0)
            .map((x, index) => new ActionConnectRequest({
              type: DeviceRequestType.getPinMixer,
              payload: {
                index,
              },
            }))
        ),
      ])))
      ;
  }

  private keyToCmd(key: string) {
    switch(key) {
      case 'pump': return DeviceRequestType.setPinPump;
      case 'valve': return DeviceRequestType.setPinValve;
      case 'flowSensor': return DeviceRequestType.setPinFlowSensor;
      case 'levelSensor': return DeviceRequestType.setPinLevelSensor;
      case 'mixer': return DeviceRequestType.setPinMixer;
      case 'doseMixer': return DeviceRequestType.setPinDoseMixer;
      case 'dose': return DeviceRequestType.setPinDose;
    }
  }

  private syncItems(
    selector,
    requestGet: DeviceRequestType,
    requestSet: DeviceRequestType,
    response: DeviceResponseType,
    count: number,
    payload = null,
  ) {
    return range(0, count)
      .pipe(map(i => this.syncItem(selector, requestGet, requestSet, response, i, payload)))
      .pipe(concatAll());
  }

  private syncItem(
    selector,
    requestGet: DeviceRequestType,
    requestSet: DeviceRequestType,
    response: DeviceResponseType,
    index: number,
    payload = null,
  ) {
    return from(this.connectBt.send({ type: requestGet, payload: { index } } as any))
      .pipe(mergeMap(() => this.connectBt.response$))
      .pipe(take(1))
      .pipe(filter(r => r.type === response))
      .pipe(withLatestFrom(this.store.pipe(select(selector(index)))))
      .pipe(mergeMap(([deviceValue, value]) => {
        if (JSON.stringify(deviceValue) === JSON.stringify(value)) {
          return EMPTY;
        }
        return of(value);
      }))
      .pipe(mergeMap((value) =>
        from(this.connectBt.send({ type: requestSet, payload: { index, value, ...payload } } as any)),
      ))
      ;
  }
}
