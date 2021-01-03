import { TestBed } from '@angular/core/testing';
import { AccessControlService } from './access-control.service';
import { CameraService } from '../camera/camera.service';
import { OpenCVService } from '../open-cv/open-cv.service';

describe('OpenCVService', () => {
  let camera: CameraService;
  let openCv: OpenCVService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: CameraService, useValue: {} },
        { provide: OpenCVService, useValue: {} },
      ],
    });
    camera = TestBed.get(CameraService);
    openCv = TestBed.get(OpenCVService);
  });

  it('should be created', () => {
    const service: AccessControlService = TestBed.get(AccessControlService);
    expect(service).toBeTruthy();
  });
});
