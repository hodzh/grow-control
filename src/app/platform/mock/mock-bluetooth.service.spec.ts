import { TestBed } from '@angular/core/testing';
import { MockBluetoothService } from './mock-bluetooth.service';

describe('MockBluetoothService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockBluetoothService = TestBed.get(MockBluetoothService);
    expect(service).toBeTruthy();
  });
});
