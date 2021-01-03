import {APP_INITIALIZER, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DevComponent} from './dev.component';
import {PageModule} from '../../shared/page/page.module';
import {SelectIndexModule} from '../../shared/select-index/select-index.module';
import {DeviceSimulateService} from './device-simulate.sevice';
import {environment} from '../../../environments/environment';
import {DevRoutingModule} from './dev-routing.module';
import {DevAccessControlModule} from './access-control/dev-access-control.module';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [DevComponent],
  imports: [CommonModule, DevRoutingModule, PageModule, SelectIndexModule, MatListModule, MatIconModule, DevAccessControlModule],
  providers: [
    ...(environment.platform === 'mock' ? [DeviceSimulateService] : []),
    {
      provide: APP_INITIALIZER,
      useFactory: (deviceSimulateService: DeviceSimulateService) => () => deviceSimulateService.init(),
      deps: [DeviceSimulateService],
      multi: true,
    },
  ],
})
export class DevModule {
}
