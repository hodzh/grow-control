import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CalibrateComponent} from './calibrate.component';
import {CalibrateFlowSensorComponent} from './calibrate-flow-sensor/calibrate-flow-sensor.component';
import {CalibrateDoseComponent} from './calibrate-dose/calibrate-dose.component';

const routes: Routes = [
  {
    path: 'calibrate',
    children: [
      {
        path: '',
        component: CalibrateComponent,
        pathMatch: 'full',
        data: {
          title: 'Calibrate',
          actions: ['menu', 'bt', 'sync'],
        },
      },
      {
        path: 'pump/:id',
        component: CalibrateFlowSensorComponent,
        data: {
          title: 'Calibrate flow sensor',
          actions: ['back', 'sync'],
        },
      },
      {
        path: 'dose/:id',
        component: CalibrateDoseComponent,
        data: {
          title: 'Calibrate dose',
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
export class CalibrateRoutingModule {
}
