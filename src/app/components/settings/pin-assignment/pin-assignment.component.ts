import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {
  ActionSettingsChangePinAssignment,
  ActionSettingsLoadPinAssignment, selectorPinBeepers,
  selectorPinDoseMixers,
  selectorPinDoses,
  selectorPinFlowSensors, selectorPinLevelSensors,
  selectorPinMixers,
  selectorPinPumps,
  selectorPinValves,
} from '../../../store/settings/settings.reducer';
import { Observable, Subject } from 'rxjs';
import { deviceInfo, getAllPins } from '../../../model/device-info';
import { DevicePinType, devicePinTypeName } from '../../../model/device-parts';

@Component({
  selector: 'app-pin-assignment',
  templateUrl: './pin-assignment.component.html',
  styleUrls: ['./pin-assignment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PinAssignmentComponent implements OnInit, OnDestroy {
  pins = getAllPins();
  pins2 = Object.keys(deviceInfo.mega2560.pins)
    .map(p => ({ key: +p, value: deviceInfo.mega2560.pins[p] }))
    .sort((a, b) => a.key - b.key)
  ;
  pinAssignment;
  devicePinType = DevicePinType;
  devicePartTypeName = devicePinTypeName;
  pinValves$: Observable<number[]>;
  pinPumps$: Observable<number[]>;
  pinFlowSensors$: Observable<number[]>;
  pinMixers$: Observable<number[]>;
  pinDoses$: Observable<number[]>;
  pinDoseMixers$: Observable<number[]>;
  pinLevelSensors$: Observable<number[]>;
  pinBeeper$: Observable<number[]>;
  private destroy$ = new Subject<void>();

  constructor(
    private readonly store: Store<any>,
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(new ActionSettingsLoadPinAssignment());
    this.pinPumps$ = this.store.pipe(select(selectorPinPumps))
    this.pinFlowSensors$ = this.store.pipe(select(selectorPinFlowSensors))
    this.pinMixers$ = this.store.pipe(select(selectorPinMixers))
    this.pinDoses$ = this.store.pipe(select(selectorPinDoses))
    this.pinDoseMixers$ = this.store.pipe(select(selectorPinDoseMixers))
    this.pinValves$ = this.store.pipe(select(selectorPinValves))
    this.pinLevelSensors$ = this.store.pipe(select(selectorPinLevelSensors))
    this.pinBeeper$ = this.store.pipe(select(selectorPinBeepers))
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  onChange(key: number, index: number, value: number): void {
    this.store.dispatch(new ActionSettingsChangePinAssignment({type: key, index, value}));
  }
}
