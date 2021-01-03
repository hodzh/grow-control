import { NgModule } from '@angular/core';
import { AndroidPermissionsService } from './android-permissions.service';
import { AndroidBluetoothService } from './android-bluetooth.service';
import { DEVICE_CONNECT } from '../device-connect';

@NgModule({
  providers: [
    AndroidPermissionsService,
    { provide: DEVICE_CONNECT, useClass: AndroidBluetoothService },
  ],
})
export class AndroidModule {
}
