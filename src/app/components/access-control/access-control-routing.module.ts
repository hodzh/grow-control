import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccessControlComponent} from './access-control.component';

const routes: Routes = [
  {
    path: 'access-control',
    component: AccessControlComponent,
    data: {
      title: 'Access control',
      actions: ['menu', 'bt', 'sync'],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccessControlRoutingModule {
}
