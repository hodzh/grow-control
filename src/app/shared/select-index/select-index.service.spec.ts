import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { SelectBtDeviceService } from '../../components/config/select-bt-device/select-bt-device.service';
import { DEVICE_CONNECT } from '../../platform/device-connect';

describe('SelectBtDeviceService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        {
          provide: DEVICE_CONNECT,
          useValue: {
            discover() {
              return new Promise((resolve, reject) => {
              });
            },
          },
        },
        { provide: MatDialog, useValue: {} },
      ],
    }),
  );

  it('should be created', () => {
    const service: SelectBtDeviceService = TestBed.get(SelectBtDeviceService);
    expect(service).toBeTruthy();
  });
});
