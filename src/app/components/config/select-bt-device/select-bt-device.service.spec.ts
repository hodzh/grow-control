import {TestBed} from '@angular/core/testing';
import {SelectBtDeviceService} from './select-bt-device.service';
import {MatDialog} from '@angular/material/dialog';
import { DEVICE_CONNECT } from '../../../platform/device-connect';

describe('SelectBtDeviceService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        {
          provide: DEVICE_CONNECT,
          useValue: {
            discover() {
              return new Promise(() => {
              });
            },
          },
        },
        {provide: MatDialog, useValue: {}},
      ],
    }),
  );

  it('should be created', () => {
    const service: SelectBtDeviceService = TestBed.get(SelectBtDeviceService);
    expect(service).toBeTruthy();
  });
});
