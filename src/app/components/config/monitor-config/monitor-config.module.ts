import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MonitorConfigComponent} from './monitor-config.component';
import {DeviceMonitorModule} from '../device-monitor/device-monitor.module';

@NgModule({
  declarations: [MonitorConfigComponent],
  exports: [MonitorConfigComponent],
  imports: [
    CommonModule,
    DeviceMonitorModule,
  ],
})
export class MonitorConfigModule {
}
