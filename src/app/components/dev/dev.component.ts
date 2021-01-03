import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { DeviceRequestType } from '../../model/device-request-type';
import { ActionConnectRequest } from '../../store/connect/connect.reducer';
import { Subject } from 'rxjs';
import { ConnectService } from '../../services/connect/connect.service';
import { defaultCompoteDaily, defaultProgram, defaultSchedule, defaultTimer } from '../../model/default-settings';
import { deviceConfig } from '../../model/device-config';
import { SelectIndexService } from '../../shared/select-index/select-index.service';
import { DeviceSimulateService } from './device-simulate.sevice';
import { withLatestFrom } from 'rxjs/operators';
import { BrowserSerialService } from '../../platform/browser/serial/browser-serial.service';
import { ActionSettingsSync } from '../../store/settings/settings.reducer';

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DevComponent implements OnDestroy {
  private destroy$ = new Subject<void>();

  constructor(
    private readonly store: Store<any>,
    private readonly connectBt: ConnectService,
    private readonly selectIndexService: SelectIndexService,
    private readonly deviceSimulateService: DeviceSimulateService,
    private readonly serialService: BrowserSerialService,
  ) {
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  requestStatus() {
    this.store.dispatch(new ActionConnectRequest({type: DeviceRequestType.getStatus, payload: {fake: 0}}));
  }

  discover() {
    this.connectBt.discover({discover: true});
  }

  compote() {
    this.store.dispatch(new ActionConnectRequest(
      {type: DeviceRequestType.compote, payload: {programId: 0}}));
  }

  mixer() {
    this.store.dispatch(new ActionConnectRequest(
      {type: DeviceRequestType.mix, payload: {mixerId: 0}}));
  }

  getProgram() {
    this.selectIndexService.select({ count: deviceConfig.programCount, title: 'Select program' })
      .subscribe(index => {
        if (typeof index === 'undefined') {
          return;
        }
        this.store.dispatch(new ActionConnectRequest(
          {type: DeviceRequestType.getProgram, payload: {index}}));
      });
  }

  setProgram() {
    this.selectIndexService.select({ count: deviceConfig.programCount, title: 'Select program' })
      .subscribe(index => {
        if (typeof index === 'undefined') {
          return;
        }
        this.store.dispatch(new ActionConnectRequest({
          type: DeviceRequestType.setProgram,
          payload: {index, value: defaultProgram(),},
        }));
      });
  }

  getCompote() {
    this.selectIndexService.select({ count: deviceConfig.compoteCount, title: 'Select compote' })
      .pipe(withLatestFrom(this.selectIndexService.select({ count: deviceConfig.compoteDailyCount, title: 'Select compote daily' })))
      .subscribe(([index, dailyIndex]) => {
        if (typeof index === 'undefined' || typeof dailyIndex === 'undefined') {
          return;
        }
        this.store.dispatch(new ActionConnectRequest(
          {type: DeviceRequestType.getCompoteDaily, payload: {index, dailyIndex}}));
      });
  }

  setCompote() {
    this.selectIndexService.select({ count: deviceConfig.compoteCount, title: 'Select compote' })
      .pipe(withLatestFrom(this.selectIndexService.select({ count: deviceConfig.compoteDailyCount, title: 'Select compote daily' })))
      .subscribe(([index, dailyIndex]) => {
        if (typeof index === 'undefined' || typeof dailyIndex === 'undefined') {
          return;
        }
        this.store.dispatch(new ActionConnectRequest({
          type: DeviceRequestType.setCompoteDaily,
          payload: {index, dailyIndex, value: defaultCompoteDaily()},
        }));
      });
  }

  getTimer() {
    this.selectIndexService.select({ count: deviceConfig.timerCount, title: 'Select timer' })
      .subscribe(index => {
        if (typeof index === 'undefined') {
          return;
        }
        this.store.dispatch(new ActionConnectRequest(
          {type: DeviceRequestType.getTimer, payload: {index}}));
      });
  }

  setTimer() {
    this.selectIndexService.select({ count: deviceConfig.timerCount, title: 'Select timer' })
      .subscribe(index => {
        if (typeof index === 'undefined') {
          return;
        }
        this.store.dispatch(new ActionConnectRequest({
          type: DeviceRequestType.setTimer,
          payload: {index, value: defaultTimer()},
        }));
      });
  }

  getSchedule() {
    this.selectIndexService.select({ count: deviceConfig.scheduleCount, title: 'Select schedule' })
      .subscribe(index => {
        if (typeof index === 'undefined') {
          return;
        }
        this.store.dispatch(new ActionConnectRequest(
          {type: DeviceRequestType.getSchedule, payload: {index}}));
      });
  }

  setSchedule() {
    this.selectIndexService.select({ count: deviceConfig.scheduleCount, title: 'Select schedule' })
      .subscribe(index => {
        if (typeof index === 'undefined') {
          return;
        }
        this.store.dispatch(new ActionConnectRequest({
          type: DeviceRequestType.setSchedule,
          payload: {index,
          value: defaultSchedule(),}
        }));
      });
  }

  simulate() {
    this.deviceSimulateService.enable(!this.deviceSimulateService.enabled);
  }

  serialDiscover() {
    this.serialService.discover();
  }

  serialConnect() {
    this.serialService.connect(null);
  }

  syncSettings() {
    this.store.dispatch(new ActionSettingsSync());
  }

  resetError() {
    this.store.dispatch(new ActionConnectRequest({ type: DeviceRequestType.resetError, payload: { fake: 0 }}));
  }
}
