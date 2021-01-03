import { Pipe, PipeTransform } from '@angular/core';
import { ConnectStatus } from '../../model/connect-status';

@Pipe({
  name: 'btStatusIcon',
})
export class BtStatusIconPipe implements PipeTransform {
  btStatusConnect = new Map<ConnectStatus, string>([
    [ConnectStatus.CONNECTED, 'bluetooth-connect'],
    [ConnectStatus.CONNECTING, 'bluetooth-transfer'],
    [ConnectStatus.DISCONNECTED, 'bluetooth-off'],
    [ConnectStatus.DISCONNECTING, 'bluetooth-transfer'],
    [ConnectStatus.TRANSFER, 'bluetooth-transfer'],
  ]);

  transform(value: ConnectStatus, args?: any): string {
    return this.btStatusConnect.get(value);
  }
}
