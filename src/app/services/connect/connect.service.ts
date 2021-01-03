import { Inject, Injectable } from '@angular/core';
import { DEVICE_CONNECT, IDeviceConnect } from '../../platform/device-connect';
import { Observable } from 'rxjs';
import { DeviceConnect } from '../../model/device-connect';
import { DeviceRequestSerializer } from './device-request-serializer';
import { DeviceResponse } from '../../auto/device-response';
import { DeviceRequest } from '../../auto/device-request';
import { DeviceResponseDeserializer } from './device-response-deserializer';
import { deviceRequestMeta, deviceResponseMeta, structMeta } from '../../model/device-io-meta';
import { DeviceRequestType } from '../../model/device-request-type';
import { DeviceResponseType } from '../../model/device-response-type';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ConnectService {
  response$: Observable<DeviceResponse>;
  private requestSerializer: DeviceRequestSerializer;
  private responseDeserializer: DeviceResponseDeserializer;

  constructor(
    @Inject(DEVICE_CONNECT) private readonly deviceConnect: IDeviceConnect,
  ) {
    this.requestSerializer = new DeviceRequestSerializer(
      deviceRequestMeta,
      structMeta,
      DeviceRequestType,
    );
    this.responseDeserializer = new DeviceResponseDeserializer(
      deviceResponseMeta,
      structMeta,
      DeviceResponseType,
    );
    this.response$ = this.deviceConnect.response$
      .pipe(this.responseDeserializer.mapRaw)
      .pipe(map(response =>
        response.type === DeviceResponseType.temp ? {
            type: DeviceResponseType.temp,
            payload: { value: Math.round(response.payload.value * 2.5) * 0.1 },
          } :
          response,
      ));
  }

  discover(options?: any): Promise<DeviceConnect[]> {
    return this.deviceConnect.discover(options);
  }

  async connect(device: DeviceConnect): Promise<void> {
    await this.deviceConnect.connect(device);
  }

  async disconnect(): Promise<void> {
    await this.deviceConnect.disconnect();
  }

  async send(request: DeviceRequest): Promise<void> {
    const raw = this.requestSerializer.serialize(request);
    // console.log(raw);
    await this.deviceConnect.send(raw);
  }
}