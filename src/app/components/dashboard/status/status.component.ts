import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DeviceState, FertigateState } from '../../../model/device-status';
import { Store } from '@ngrx/store';
import { ActionConnectRequest } from '../../../store/connect/connect.reducer';
import { DeviceRequestType } from '../../../model/device-request-type';
import { DeviceStatus } from '../../../auto/struct';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusComponent {
  @Input() status: DeviceStatus;
  DeviceState = DeviceState;
  FertigateState = FertigateState;

  constructor(
    private readonly store: Store,
  ) {
  }

  onReset() {
    this.store.dispatch(new ActionConnectRequest({
      type: DeviceRequestType.resetError,
      payload: { fake: 0 },
    }));
  }
}
