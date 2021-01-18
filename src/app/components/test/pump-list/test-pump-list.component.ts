import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActionConnectRequest } from '../../../store/connect/connect.reducer';
import { DeviceRequestType } from '../../../model/device-request-type';
import { deviceConfig } from '../../../model/device-config';

@Component({
  selector: 'app-test-pump-list',
  templateUrl: './test-pump-list.component.html',
  styleUrls: ['./test-pump-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestPumpListComponent {
  pumpCount = deviceConfig.pumpCount;
  constructor(
    private readonly store: Store<any>,
  ) {
  }

  onChange(index: number, value: number): void {
    this.store.dispatch(new ActionConnectRequest({
      type: DeviceRequestType.setStatePump,
      payload: { index, value },
    }));
  }

  trackByIndex(index, item) {
    return index;
  }
}
