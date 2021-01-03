import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CalibrateComponent} from './calibrate.component';
import {CalibrateDoseModule} from './calibrate-dose/calibrate-dose.module';
import {CalibrateFlowSensorModule} from './calibrate-flow-sensor/calibrate-flow-sensor.module';
import {CalibrateRoutingModule} from './calibrate-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [CalibrateComponent],
  exports: [CalibrateComponent],
  imports: [
    CommonModule,
    CalibrateRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    CalibrateFlowSensorModule,
    CalibrateDoseModule,
  ],
})
export class CalibrateModule {
}
