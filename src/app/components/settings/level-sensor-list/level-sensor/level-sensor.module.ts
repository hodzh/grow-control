import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LevelSensorComponent} from './level-sensor.component';
import {DayTimeModule} from '../../../../shared/day-time/day-time.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [LevelSensorComponent],
  exports: [LevelSensorComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatSelectModule,
    DayTimeModule,
  ],
})
export class LevelSensorModule {
}
