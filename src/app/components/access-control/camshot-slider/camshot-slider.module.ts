import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CamshotSliderComponent } from './camshot-slider.component';
import {CamshotSliderService} from './camshot-slider.service';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [CamshotSliderComponent],
  entryComponents: [CamshotSliderComponent],
  providers: [CamshotSliderService],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class CamshotSliderModule { }
