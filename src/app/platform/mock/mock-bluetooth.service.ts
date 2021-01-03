import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DeviceConnect } from '../../model/device-connect';
import { IDeviceConnect } from '../device-connect';

@Injectable({
  providedIn: 'root',
})
export class MockBluetoothService implements IDeviceConnect {
  private responseSubject = new Subject<ArrayBuffer>();

  constructor() {
  }

  get response$(): Observable<ArrayBuffer> {
    return this.responseSubject.asObservable();
  }

  /**
   * Run the discovery process.
   *
   * @param options such as filters and optional services
   * @return  Emites the value of the requested service read from the device
   */
  discover(options?): Promise<DeviceConnect[]> {
    const devices = [
      {
        name: 'device1',
        type: 'ble',
        address: 'address1-xxxxxxxxxxxxxxxxxxxx',
        id: 'id1-xxxxxxxxxxxxxxxxxxxx',
        class: 1111,
      },
      {
        name: 'device2',
        type: 'ble',
        address: 'address2-xxxxxxxxxxxxxxxxxxxx',
        id: 'id2-xxxxxxxxxxxxxxxxxxxx',
        class: 2222,
      },
      {
        name: 'device3',
        type: 'ble',
        address: 'address1-xxxxxxxxxxxxxxxxxxxx',
        id: 'id1-xxxxxxxxxxxxxxxxxxxx',
        class: 1111,
      },
      {
        name: 'device4',
        type: 'ble',
        address: 'address2-xxxxxxxxxxxxxxxxxxxx',
        id: 'id2-xxxxxxxxxxxxxxxxxxxx',
        class: 2222,
      },
      {
        name: 'device5',
        type: 'ble',
        address: 'address1-xxxxxxxxxxxxxxxxxxxx',
        id: 'id1-xxxxxxxxxxxxxxxxxxxx',
        class: 1111,
      },
      {
        name: 'device6',
        type: 'ble',
        address: 'address2-xxxxxxxxxxxxxxxxxxxx',
        id: 'id2-xxxxxxxxxxxxxxxxxxxx',
        class: 2222,
      },
      {
        name: 'device7',
        type: 'ble',
        address: 'address2-xxxxxxxxxxxxxxxxxxxx',
        id: 'id2-xxxxxxxxxxxxxxxxxxxx',
        class: 2222,
      },
    ];
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(devices), 1000);
    });
  }

  async connect(device: DeviceConnect): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 1000);
    });
  }

  disconnect(): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 1000);
    });
  }

  send(data: ArrayBuffer): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  }
}
