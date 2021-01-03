import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LogComponent} from '../../components/log/log.component';

const routes: Routes = [
  {
    path: 'log',
    component: LogComponent,
    data: {
      title: 'Log',
      actions: ['menu', 'bt', 'sync'],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogRoutingModule {
}
