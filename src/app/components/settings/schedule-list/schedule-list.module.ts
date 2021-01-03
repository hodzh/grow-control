import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScheduleListComponent} from './schedule-list.component';
import {ScheduleModule} from './schedule/schedule.module';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [ScheduleListComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    ScheduleModule,
  ],
})
export class ScheduleListModule {
}
