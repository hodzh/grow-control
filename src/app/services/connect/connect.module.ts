import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectService } from './connect.service';
import { AppPlatformModule } from '../../platform/app-platform.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, AppPlatformModule],
  providers: [ConnectService],
})
export class ConnectModule {
}
