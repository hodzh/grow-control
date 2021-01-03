import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DeviceMonitorComponent} from './device-monitor.component';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [DeviceMonitorComponent],
  exports: [DeviceMonitorComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
  ],
})
export class DeviceMonitorModule {
}
