import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccessControlConfigComponent} from './access-control-config.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [AccessControlConfigComponent],
  exports: [AccessControlConfigComponent],
  imports: [
    CommonModule,
    MatSlideToggleModule,
  ],
})
export class AccessControlConfigModule {
}
