import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ManualControlComponent} from './manual-control.component';
import {ManualControlRoutingModule} from './manual-control-routing.module';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ManualControlComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    ManualControlRoutingModule,
  ],
})
export class ManualControlModule {
}
