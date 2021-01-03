import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DevComponent} from '../../components/dev/dev.component';

const routes: Routes = [
  {
    path: 'dev',
    component: DevComponent,
    data: {
      title: 'Development',
      actions: ['menu', 'bt', 'sync'],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevRoutingModule {
}
