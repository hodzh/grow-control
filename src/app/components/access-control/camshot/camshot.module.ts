import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CamshotComponent } from './camshot.component';
import {CamshotSliderModule} from '../camshot-slider/camshot-slider.module';

@NgModule({
  declarations: [CamshotComponent],
  exports: [CamshotComponent],
  imports: [
    CommonModule,
    CamshotSliderModule,
  ]
})
export class CamshotModule { }
