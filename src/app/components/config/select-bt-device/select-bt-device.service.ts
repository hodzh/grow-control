import {Inject, Injectable} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ConnectService} from '../../../services/connect/connect.service';
import {from, Observable} from 'rxjs';
import {DeviceConnect} from '../../../model/device-connect';
import {map} from 'rxjs/operators';
import { DEVICE_CONNECT } from 'src/app/platform/device-connect';

@Injectable({
  providedIn: 'root',
})
export class SelectBtDeviceService {

  constructor(
    public readonly dialog: MatDialog,
    @Inject(DEVICE_CONNECT) private readonly connectService: ConnectService,
  ) {
  }

  select(): Observable<DeviceConnect> {
    return from(this.connectService.discover())
      .pipe(map(([device]) => device));
    // const dialogRef = this.dialog.open(SelectBtDeviceComponent);
    // return dialogRef.afterClosed();
  }
}
