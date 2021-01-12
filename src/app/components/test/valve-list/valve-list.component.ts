import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActionConnectRequest } from '../../../store/connect/connect.reducer';
import { DeviceRequestType } from '../../../model/device-request-type';
import { deviceConfig } from '../../../model/device-config';

@Component({
  selector: 'app-valve-list',
  templateUrl: './valve-list.component.html',
  styleUrls: ['./valve-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValveListComponent {
  valveCount = deviceConfig.valveCount;
  constructor(
    private readonly store: Store<any>,
  ) {
  }

  onChange(index: number, value: number): void {
    this.store.dispatch(new ActionConnectRequest({
      type: DeviceRequestType.setStateValve,
      payload: { index, value },
    }));
  }

  trackByIndex(index, item) {
    return index;
  }
}
