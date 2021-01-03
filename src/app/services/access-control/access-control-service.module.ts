import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccessControlService} from './access-control.service';
import {OpenCvModule} from '../open-cv/open-cv.module';
import {CameraModule} from '../camera/camera.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OpenCvModule,
    CameraModule,
  ],
  providers: [
    AccessControlService,
  ],
})
export class AccessControlServiceModule {
}
