import { TestBed } from '@angular/core/testing';

import { CamshotSliderService } from './camshot-slider.service';
import {MatDialog} from '@angular/material/dialog';

describe('CamshotSliderService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {provide: MatDialog, useValue: {}},
      CamshotSliderService,
    ]
  }));

  it('should be created', () => {
    const service: CamshotSliderService = TestBed.get(CamshotSliderService);
    expect(service).toBeTruthy();
  });
});
