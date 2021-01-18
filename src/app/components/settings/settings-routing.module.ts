import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SettingsComponent} from './settings.component';
import {CompoteListComponent} from './compote-list/compote-list.component';
import {ProgramListComponent} from './program-list/program-list.component';
import {PumpListComponent} from './pump-list/pump-list.component';
import {DoseListComponent} from './dose-list/dose-list.component';
import {ScheduleListComponent} from './schedule-list/schedule-list.component';
import {TimerListComponent} from './timer-list/timer-list.component';
import {MixerListComponent} from './mixer-list/mixer-list.component';
import {PinAssignmentComponent} from './pin-assignment/pin-assignment.component';
import { BackupComponent } from './backup/backup.component';

const routes: Routes = [
  {
    path: 'settings',
    children: [
      {
        path: '',
        component: SettingsComponent,
        pathMatch: 'full',
        data: {
          title: 'Settings',
          actions: ['menu', 'bt', 'sync'],
        },
      },
      {
        path: 'compote',
        component: CompoteListComponent,
        data: {
          title: 'Compote',
          actions: ['back', 'sync'],
        },
      },
      {
        path: 'program',
        component: ProgramListComponent,
        data: {
          title: 'Program',
          actions: ['back', 'sync'],
        },
      },
      {
        path: 'pump',
        component: PumpListComponent,
        data: {
          title: 'Pump',
          actions: ['back', 'sync'],
        },
      },
      {
        path: 'dose',
        component: DoseListComponent,
        data: {
          title: 'Dose',
          actions: ['back', 'sync'],
        },
      },
      {
        path: 'mixer',
        component: MixerListComponent,
        data: {
          title: 'Mixer',
          actions: ['back', 'sync'],
        },
      },
      {
        path: 'timer',
        component: TimerListComponent,
        data: {
          title: 'Timer',
          actions: ['back', 'sync'],
        },
      },
      {
        path: 'schedule',
        component: ScheduleListComponent,
        data: {
          title: 'Schedule',
          actions: ['back', 'sync'],
        },
      },
      {
        path: 'pin-assignment',
        component: PinAssignmentComponent,
        data: {
          title: 'Pin Assignment',
          actions: ['back', 'sync'],
        },
      },
      {
        path: 'backup',
        component: BackupComponent,
        data: {
          title: 'Backup',
          actions: ['back', 'sync'],
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {
}
