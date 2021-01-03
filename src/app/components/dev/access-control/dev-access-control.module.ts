import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DevAccessControlComponent} from './dev-access-control.component';
import {AccessControlServiceModule} from '../../../services/access-control/access-control-service.module';

@NgModule({
  declarations: [
    DevAccessControlComponent,
  ],
  exports: [
    DevAccessControlComponent,
  ],
  imports: [
    CommonModule,
    AccessControlServiceModule,
  ],
})
export class DevAccessControlModule {
}
