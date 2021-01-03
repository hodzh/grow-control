import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IDeviceConnect } from '../../device-connect';
import { SerialConnect } from '../../../model/device-connect';

@Injectable({
  providedIn: 'root',
})
export class BrowserSerialService implements IDeviceConnect {
  enabled = true;
  response$: Observable<ArrayBuffer>;
  private responseSubject = new Subject<ArrayBuffer>();
  private port: SerialPort;

  constructor() {
    if (!('serial' in navigator)) {
      // throw new Error('Your browser does not support Serial API');
      console.warn('Your browser does not support Serial API');
      this.enabled = false;
    }
    this.response$ = this.responseSubject.asObservable();
    // navigator.serial.addEventListener("connect", (event) => {
    // TODO: Automatically open event.target or warn user a port is available.
    // });

    // navigator.serial.addEventListener("disconnect", (event) => {
    // TODO: Remove |event.target| from the UI.
    // If the serial port was opened, a stream error would be observed as well.
    // });
  }

  /**
   * Run the discovery process.
   *
   * @param options such as filters and optional services
   * @return  Emites the value of the requested service read from the device
   */
  async discover(options?): Promise<SerialConnect[]> {
    console.log('[Serial::Info] Requesting devices with options %o', options);
    // Get all serial ports the user has previously granted the website access to.
    const ports = await navigator['serial'].getPorts();
    console.log(ports);
    // Prompt user to select any serial port.
    const port = await navigator.serial.requestPort();
    console.log(port);
    console.log(port.getInfo());
    this.port = port;
    return [{
      id: 'id',
      name: 'name',
      type: 'serial',
      port,
    }];
  }

  async connect(device: SerialConnect): Promise<void> {
    // Wait for the serial port to open.
    console.log('open serial port');
    await this.port.open({
      baudrate: 9600,
      baudRate: 9600,
    } as any);
    // dataBits: The number of data bits per frame (either 7 or 8).
    // stopBits: The number of stop bits at the end of a frame (either 1 or 2).
    // parity: The parity mode (either "none", "even" or "odd").
    // bufferSize: The size of the read and write buffers that should be created (must be less than 16MB).
    // flowControl: The flow control mode (either "none" or "hardware").
    console.log('serial port is opened');
  }

  async disconnect(): Promise<void> {
  }

  async send(data: ArrayBuffer): Promise<void> {
    console.log('serial port write');
    const writer = this.port.writable.getWriter();
    await writer.write(data);
    writer.releaseLock();
  }

  async read(): Promise<void> {
    // const reader = this.port.readable.getReader();
    // const data = await reader.read();
    // console.log(data);
    while (true) {
      try {
        const { value, done } = await this.port.readable.getReader().read();
        if (value) {
          this.responseSubject.next(value);
        }
        if (done) {
          console.log('[readLoop] DONE', done);
          this.port.readable.getReader().releaseLock();
          break;
        }
      } catch (e) {
        console.log(e);
      }
    }
  }
}
