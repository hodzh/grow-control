import { TestBed } from '@angular/core/testing';
import { BrowserBluetoothService } from './browser-bluetooth.service';

describe('BrowserBluetoothService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BrowserBluetoothService = TestBed.get(BrowserBluetoothService);
    expect(service).toBeTruthy();
  });
});
