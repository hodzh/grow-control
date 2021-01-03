import { Injectable } from '@angular/core';
import { from, Observable, Subject } from 'rxjs';
import { IDeviceConnect } from '../device-connect';
import { DeviceConnect } from '../../model/device-connect';
import { ChooseDialogService } from '../../shared/choose-dialog/choose-dialog.service';
import { map, switchMap, tap } from 'rxjs/operators';
import { BrowserBluetoothService } from './ble/browser-bluetooth.service';
import { BrowserSerialService } from './serial/browser-serial.service';

@Injectable({
  providedIn: 'root',
})
export class BrowserConnectService implements IDeviceConnect {
  private readonly responseSubject = new Subject<ArrayBuffer>();
  response$: Observable<ArrayBuffer> = this.responseSubject.asObservable();
  private device: IDeviceConnect;

  constructor(
    private readonly chooseDialogService: ChooseDialogService,
    private readonly browserBluetoothService: BrowserBluetoothService,
    private readonly browserSerialService: BrowserSerialService,
  ) {
  }

  /**
   * Run the discovery process.
   *
   * @param options such as filters and optional services
   * @return  Emites the value of the requested service read from the device
   */
  discover(options?): Promise<DeviceConnect[]> {
    return this.chooseDialogService.choose({
      title: 'Choose device size',
      options: [
        {
          title: 'Serial',
          value: 'Serial',
        },
        {
          title: 'Bluetooth',
          value: 'Bluetooth',
        },
      ],
    })
      .pipe(map(choose => choose === 'Serial' ? this.browserSerialService : this.browserBluetoothService))
      .pipe(tap(device => this.device = device))
      .pipe(switchMap(() => from(this.device?.discover(options)))).toPromise();
  }

  async connect(device: DeviceConnect): Promise<void> {
    await this.device?.connect(device);
    this.device.response$.subscribe({
      next: e => this.responseSubject.next(e),
    });
  }

  async disconnect(): Promise<void> {
    await this.device?.disconnect();
    this.device = null;
  }

  send(data: ArrayBuffer): Promise<void> {
    return this.device?.send(data);
  }
}
