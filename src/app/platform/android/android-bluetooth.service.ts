import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IDeviceConnect } from '../device-connect';
import { BtConnect } from '../../model/device-connect';
import { AndroidPermissions, AndroidPermissionsService } from './android-permissions.service';

declare const bluetoothSerial: any;

@Injectable({
  providedIn: 'root',
})
export class AndroidBluetoothService implements IDeviceConnect {
  response$: Observable<ArrayBuffer>;
  private readonly plugin: any;
  private readonly responseSubject = new Subject<ArrayBuffer>();
  private readonly subscribeRawData: (data?) => any;

  constructor(
    private readonly permission: AndroidPermissionsService,
  ) {
    console.log((window as any).plugins, (window as any).cordova, (window as any).cordova.plugins);
    this.plugin = bluetoothSerial;
    this.response$ = this.responseSubject.asObservable();
    this.subscribeRawData = data => {
      // console.log('subscribe', data);
      this.responseSubject.next(data);
    };
  }

  async discover(options?: any): Promise<BtConnect[]> {
    console.log('discover$');
    const success = await this.permission.requestPermission(AndroidPermissions.BLUETOOTH);
    if (!success) {
      throw new Error('deny');
    }
    console.log(AndroidPermissions.BLUETOOTH, 'OK');
    return await new Promise<BtConnect[]>((resolve, reject) => this.plugin.list(
      result => {
        console.log('discover', JSON.stringify(result));
        resolve(result as BtConnect[]);
      },
      error => {
        console.log('discover', JSON.stringify(error));
        reject(error);
      },
    ));
  }

  async connect(device: BtConnect): Promise<void> {
    console.log('connect$', device);
    await new Promise((resolve, reject) => this.plugin.connectInsecure(
      device.address,
      result => {
        console.log('connect', JSON.stringify(result));
        resolve();
      },
      error => {
        console.log('connect', JSON.stringify(error));
        reject(error);
      },
    ));
    this.plugin.subscribeRawData(this.subscribeRawData);
  }

  async disconnect(): Promise<void> {
    console.log('disconnect$');
    await new Promise<void>((resolve, reject) => this.plugin.unsubscribeRawData(
      result => {
        console.log('unsubscribe', JSON.stringify(result));
        resolve();
      },
      error => {
        console.log('unsubscribe', JSON.stringify(error));
        reject(error);
      },
    ));
    await new Promise<void>((resolve, reject) => this.plugin.disconnect(
      result => {
        console.log('disconnect', JSON.stringify(result));
        resolve();
      },
      error => {
        console.log('disconnect', JSON.stringify(error));
        reject(error);
      },
    ));
  }

  send(data: ArrayBuffer): Promise<void> {
    // console.log('send', data);
    return new Promise((resolve, reject) => this.plugin.write(
      data,
      result => {
        console.log('send success', JSON.stringify(result));
        resolve();
      },
      error => {
        console.log('send error', JSON.stringify(error));
        reject(error);
      },
    ));
  }
}
