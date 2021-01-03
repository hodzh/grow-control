import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { DeviceState, DeviceStatus, FertigateState } from '../../../model/device-status';
import { Store } from '@ngrx/store';
import { ActionConnectRequest } from '../../../store/connect/connect.reducer';
import { DeviceRequestType } from '../../../model/device-request-type';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusComponent implements OnInit {
  @Input() status: DeviceStatus;
  DeviceState = DeviceState;
  FertigateState = FertigateState;

  constructor(
    private readonly store: Store,
  ) {
  }

  ngOnInit() {
  }

  onReset() {
    this.store.dispatch(new ActionConnectRequest({
      type: DeviceRequestType.resetError,
      payload: { fake: 0 },
    }));
  }
}
