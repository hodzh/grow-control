import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LevelSensorListComponent} from './level-sensor-list.component';
import {LevelSensorModule} from './level-sensor/level-sensor.module';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [LevelSensorListComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    LevelSensorModule,
  ],
})
export class LevelSensorListModule {
}
