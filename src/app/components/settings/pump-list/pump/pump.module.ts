import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PumpComponent} from './pump.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [PumpComponent],
  exports: [PumpComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
  ],
})
export class PumpModule {
}
