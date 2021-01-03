import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimeChartComponent} from './time-chart.component';

@NgModule({
  declarations: [TimeChartComponent],
  exports: [TimeChartComponent],
  imports: [
    CommonModule,
  ],
})
export class TimeChartModule {
}
