import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { BtConnect, DeviceConnect } from '../../../model/device-connect';
import { IDeviceConnect } from '../../device-connect';

interface ReadValueOptions {
  acceptAllDevices?: boolean;
  optionalServices?: BluetoothServiceUUID[];
  characteristic: BluetoothCharacteristicUUID;
  service: BluetoothServiceUUID;
}

@Injectable({
  providedIn: 'root',
})
export class BrowserBluetoothService implements IDeviceConnect {
  response$: Observable<ArrayBuffer>;
  private ble;
  private device: BtConnect;
  // private serviceUUID = 0x1800; // generic_access
  // private serviceUUID = 0x1801; // generic_attribute
  // private serviceUUID = 0x180A; // device_information
  private serviceUUID = 0xffe0; // custom serial
  // private charUUID = 0x00002a00;
  // private charUUID = 0x00002a01;
  // private charUUID = 0x00002a02;
  // private charUUID = 0x00002a04;
  private charUUID = 0x0000ffe1;
  private server: BluetoothRemoteGATTServer | void;
  private service: BluetoothRemoteGATTService | void;
  private char: any;
  private responseSubject = new Subject<ArrayBuffer>();
  private characteristicvaluechanged: (event) => any;
  private gattserverdisconnected: () => any;

  constructor() {
    this.ble = navigator.bluetooth || (navigator as any).mozBluetooth;
    if (!this.ble) {
      throw new Error('Your browser does not support Smart Bluetooth. See http://caniuse.com/#search=Bluetooth for more details.');
    }
    this.response$ = this.responseSubject.asObservable();
    this.characteristicvaluechanged = (event) => {
      console.log(event);
      this.responseSubject.next(event);
    };
    this.gattserverdisconnected = () => {
      console.log('gattserverdisconnected');
    };
  }

  /**
   * Run the discovery process.
   *
   * @param options such as filters and optional services
   * @return  Emites the value of the requested service read from the device
   */
  async discover(options?): Promise<BtConnect[]> {
    console.log('[BLE::Info] Requesting devices with options %o', options);
    let device: BluetoothDevice = null;
    try {
      if (options && options.discover) {
        await this.discoverAll();
        return [];
      }
      device = await this.ble.requestDevice({
        // filters: [{services: [this.serviceUUID]}],
        optionalServices: [this.serviceUUID],
        acceptAllDevices: true,
      });
      console.log('[BLE::Info] Discover', device);
    } catch (error) {
      console.error(error.message);
    }
    return device ? [
      {
        id: device.id,
        name: device.name,
        type: 'ble',
        ble: device,
      },
    ] : [];
  }

  async connect(device: DeviceConnect): Promise<void> {
    try {
      this.device = (await this.discover())[0];
      this.server = await this.device.ble.gatt.connect();
      this.device.ble.addEventListener('gattserverdisconnected', this.gattserverdisconnected);
      console.log(this.server);
      this.service = await this.server.getPrimaryService(this.serviceUUID);
      console.log(this.service);
      this.char = await this.service.getCharacteristic(this.charUUID);
      console.log(this.char);
      this.char.addEventListener('characteristicvaluechanged', this.characteristicvaluechanged);
      await this.char.startNotifications();
      console.log('Notifications started');
    } catch (error) {
      console.error(error.message);
    }
  }

  async disconnect(): Promise<void> {
    console.log('disconnect');
    if (!this.server) {
      return;
    }
    this.char.removeEventListener('characteristicvaluechanged', this.characteristicvaluechanged);
    this.device.ble.removeEventListener('gattserverdisconnected', this.gattserverdisconnected);
    await this.char.stopNotifications();
    await this.server.disconnect();
    this.device = null;
    this.service = null;
    this.char = null;
  }

  async send(data: ArrayBuffer): Promise<void> {
    await this.char.writeValue(data);
  }

  async read(): Promise<void> {
    console.log('read', await this.char.readValue());
  }

  async discoverAll() {
    let server;
    try {
      console.log('discover all');
      const device = await this.ble.requestDevice({
        acceptAllDevices: true,
        optionalServices: [
          // 0xffe0,
          0x1800,
          // 0x18m01,
          // 0x180A,
        ],
      });
      console.log(device);
      server = await device.gatt.connect();
      console.log(server);
      const services = await server.getPrimaryServices();
      console.log(services);
      for (const service of services) {
        console.log(service.uuid);
        const chars = await service.getCharacteristics();
        console.log(chars);
        for (const char of chars) {
          console.log('\t', char.uuid, getSupportedProperties(char));
          if (char.properties.read) {
            console.log('\t', await char.readValue());
          }
        }
      }
    } catch (e) {
      console.error(e.message);
    }
    await server.disconnect();
    console.log('disconnected');

    function getSupportedProperties(characteristic) {
      const supportedProperties = [];
      for (const p in characteristic.properties) {
        if (characteristic.properties[p] === true) {
          supportedProperties.push(p.toUpperCase());
        }
      }
      return '[' + supportedProperties.join(', ') + ']';
    }
  }
}
