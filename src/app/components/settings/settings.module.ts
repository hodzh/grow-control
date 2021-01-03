import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SettingsComponent} from './settings.component';
import {CompoteListModule} from './compote-list/compote-list.module';
import {ProgramListModule} from './program-list/program-list.module';
import {PageModule} from '../../shared/page/page.module';
import {DoseListModule} from './dose-list/dose-list.module';
import {PumpListModule} from './pump-list/pump-list.module';
import {TimerListModule} from './timer-list/timer-list.module';
import {ScheduleListModule} from './schedule-list/schedule-list.module';
import {MixerListModule} from './mixer-list/mixer-list.module';
import {PinAssignmentModule} from './pin-assignment/pin-assignment.module';
import {SettingsRoutingModule} from './settings-routing.module';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [SettingsComponent],
  exports: [SettingsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    MatListModule,
    MatIconModule,
    PageModule,
    CompoteListModule,
    ProgramListModule,
    DoseListModule,
    PumpListModule,
    TimerListModule,
    ScheduleListModule,
    MixerListModule,
    PinAssignmentModule,
  ],
})
export class SettingsModule {
}
