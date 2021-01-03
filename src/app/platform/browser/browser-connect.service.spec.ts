import { TestBed } from '@angular/core/testing';
import { BrowserConnectService } from './browser-connect.service';
import { ChooseDialogService } from '../../shared/choose-dialog/choose-dialog.service';
import { BrowserBluetoothService } from './ble/browser-bluetooth.service';
import { BrowserSerialService } from './serial/browser-serial.service';

describe('BrowserConnectService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: ChooseDialogService, useValue: {} },
      { provide: BrowserBluetoothService, useValue: {} },
      { provide: BrowserSerialService, useValue: {} },
    ],
  }));

  it('should be created', () => {
    const service: BrowserConnectService = TestBed.get(BrowserConnectService);
    expect(service).toBeTruthy();
  });
});
