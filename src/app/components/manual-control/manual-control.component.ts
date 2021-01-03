import { Component, OnInit } from '@angular/core';
import { ActionConnectRequest } from '../../store/connect/connect.reducer';
import { DeviceRequestType } from '../../model/device-request-type';
import { Store } from '@ngrx/store';
import { deviceConfig } from '../../model/device-config';
import { SelectIndexService } from '../../shared/select-index/select-index.service';
import { map, switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-manual-control',
  templateUrl: './manual-control.component.html',
  styleUrls: ['./manual-control.component.scss'],
})
export class ManualControlComponent implements OnInit {

  constructor(
    private readonly store: Store<any>,
    private readonly selectIndexService: SelectIndexService,
  ) {
  }

  ngOnInit() {
  }

  onFertigate() {
    this.selectIndexService.select({ count: deviceConfig.programCount, title: 'Select program' })
      .subscribe(programId => {
        if (typeof programId === 'undefined') {
          return;
        }
        this.store.dispatch(new ActionConnectRequest(
          { type: DeviceRequestType.fertigate, payload: { programId: 0 } }));
      });
  }

  onPumpIn() {
    this.selectIndexService.select({ count: deviceConfig.programCount, title: 'Select program' })
      .subscribe(programId => {
        if (typeof programId === 'undefined') {
          return;
        }
        this.store.dispatch(new ActionConnectRequest(
          { type: DeviceRequestType.pumpIn, payload: { programId: 0 } }));
      });
  }

  onDose() {
    this.selectIndexService.select({ count: deviceConfig.programCount, title: 'Select program' })
      .pipe(switchMap(programId => typeof programId === 'undefined' ? EMPTY :
        this.selectIndexService.select({ count: deviceConfig.doseCount, title: 'Select dose' })
          .pipe(map(doseId => [programId, doseId])),
      ))
      .subscribe(([programId, doseId]) => {
        if (typeof programId === 'undefined' || typeof doseId === 'undefined') {
          return;
        }
        this.store.dispatch(new ActionConnectRequest(
          { type: DeviceRequestType.dose, payload: { programId, doseId } }));
      });
  }

  onDoseMix() {
    this.selectIndexService.select({ count: deviceConfig.doseCount, title: 'Select dose' })
      .subscribe(mixerId => {
        if (typeof mixerId === 'undefined') {
          return;
        }
        this.store.dispatch(new ActionConnectRequest(
          { type: DeviceRequestType.mixDose, payload: { mixerId } }));
      });
  }

  onMix() {
    this.store.dispatch(new ActionConnectRequest(
      { type: DeviceRequestType.mix, payload: { mixerId: 0 } }));
  }

  onIrrigate() {
    this.selectIndexService.select({ count: deviceConfig.programCount, title: 'Select program' })
      .subscribe(programId => {
        if (typeof programId === 'undefined') {
          return;
        }
        this.store.dispatch(new ActionConnectRequest(
          { type: DeviceRequestType.irrigate, payload: { programId } }));
      });
  }

  onWash() {
    this.selectIndexService.select({ count: deviceConfig.programCount, title: 'Select program' })
      .subscribe(programId => {
        if (typeof programId === 'undefined') {
          return;
        }
        this.store.dispatch(new ActionConnectRequest(
          { type: DeviceRequestType.wash, payload: { programId } }));
      });
  }
}
