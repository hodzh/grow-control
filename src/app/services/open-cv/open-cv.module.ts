import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenCvConfigToken, OpenCVService } from './open-cv.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    OpenCVService,
    { provide: OpenCvConfigToken, useValue: {} },
  ],
})
export class OpenCvModule {
}
