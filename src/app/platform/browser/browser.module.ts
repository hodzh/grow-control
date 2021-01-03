import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserBluetoothService } from './ble/browser-bluetooth.service';
import { BrowserSerialService } from './serial/browser-serial.service';
import { BrowserConnectService } from './browser-connect.service';
import { DEVICE_CONNECT } from '../device-connect';
import { ChooseDialogModule } from '../../shared/choose-dialog/choose-dialog.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ChooseDialogModule,
  ],
  providers: [
    BrowserBluetoothService,
    BrowserSerialService,
    { provide: DEVICE_CONNECT, useClass: BrowserConnectService },
  ],
})
export class AppBrowserModule {
}
