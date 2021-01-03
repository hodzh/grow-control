import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CamshotsComponent } from './camshots.component';
import {CamshotModule} from '../camshot/camshot.module';
import {ScrollingModule} from '@angular/cdk/scrolling';

@NgModule({
  declarations: [CamshotsComponent],
  exports: [CamshotsComponent],
  imports: [
    CommonModule,
    ScrollingModule,
    CamshotModule,
  ]
})
export class CamshotsModule { }
