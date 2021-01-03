import { DeviceRequestType } from '../../model/device-request-type';
import { DeviceRequest } from '../../auto/device-request';
import { DeviceResponseType } from '../../model/device-response-type';
import { DeviceResponse } from '../../auto/device-response';

export function requestToString(
  request: DeviceRequest,
) {
  return `${DeviceRequestType[request.type]} ${JSON.stringify((request as any).payload)}`;
}

export function responseToString(
  response: DeviceResponse,
) {
  return `${DeviceResponseType[response.type]} ${JSON.stringify(response)}`;
}
