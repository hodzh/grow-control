import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConfigComponent} from './config.component';
import {SelectBtDeviceModule} from './select-bt-device/select-bt-device.module';
import {PipesModule} from '../../pipes/pipes.module';
import {MonitorConfigModule} from './monitor-config/monitor-config.module';
import {ConfigRoutingModule} from './config-routing.module';
import {AccessControlConfigModule} from './access-control-config/access-control-config.module';
import {DatabaseConfigModule} from './database-config/database-config.module';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [ConfigComponent],
  exports: [ConfigComponent],
  imports: [
    CommonModule,
    ConfigRoutingModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    SelectBtDeviceModule,
    PipesModule,
    MonitorConfigModule,
    AccessControlConfigModule,
    DatabaseConfigModule,
  ],
})
export class ConfigModule {
}
