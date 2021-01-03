import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockBluetoothService } from './mock-bluetooth.service';
import { DEVICE_CONNECT } from '../device-connect';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [{ provide: DEVICE_CONNECT, useClass: MockBluetoothService }],
})
export class AppMockModule {
}
