import { TestBed } from '@angular/core/testing';
import { BrowserSerialService } from './browser-serial.service';

describe('BrowserSerialService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BrowserSerialService = TestBed.get(BrowserSerialService);
    expect(service).toBeTruthy();
  });
});
