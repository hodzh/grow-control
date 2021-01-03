import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MonitorComponent} from './monitor.component';
import {PageModule} from '../../shared/page/page.module';
import {NgxEchartsModule} from 'ngx-echarts';
import {MonitorRoutingModule} from './monitor-routing.module';

@NgModule({
  declarations: [MonitorComponent],
  imports: [CommonModule, MonitorRoutingModule, PageModule, NgxEchartsModule],
})
export class MonitorModule {
}
