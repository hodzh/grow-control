import { TestBed } from '@angular/core/testing';
import { OpenCvConfigToken, OpenCVService } from './open-cv.service';

describe('OpenCVService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      OpenCVService,
      { provide: OpenCvConfigToken, useValue: {} },
    ],
  }));

  it('should be created', () => {
    const service: OpenCVService = TestBed.get(OpenCVService);
    expect(service).toBeTruthy();
  });
});
