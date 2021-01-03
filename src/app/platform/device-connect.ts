import { Observable } from 'rxjs';
import { DeviceConnect } from '../model/device-connect';
import { InjectionToken } from '@angular/core';

export const DEVICE_CONNECT = new InjectionToken('DEVICE_CONNECT');

export interface IDeviceConnect {
  readonly response$: Observable<ArrayBuffer>;

  discover(options?: any): Promise<DeviceConnect[]>;

  connect(device: DeviceConnect): Promise<void>;

  disconnect(): Promise<void>;

  send(data: ArrayBuffer): Promise<void>;
}
