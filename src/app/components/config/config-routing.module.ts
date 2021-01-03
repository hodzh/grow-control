import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ConfigComponent} from '../../components/config/config.component';

const routes: Routes = [
  {
    path: 'config',
    component: ConfigComponent,
    data: {
      title: 'Config',
      actions: ['back', 'sync'],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigRoutingModule {
}
