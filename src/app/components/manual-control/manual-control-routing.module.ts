import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ManualControlComponent} from './manual-control.component';

const routes: Routes = [
  {
    path: 'manual-control',
    component: ManualControlComponent,
    data: {
      title: 'Manual Control',
      actions: ['menu', 'bt', 'sync'],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManualControlRoutingModule {
}
