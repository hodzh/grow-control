export interface DeviceConnect {
  id: string;
  name: string;
  type: string;
}

export interface BtConnect extends DeviceConnect {
  type: 'ble';
  address?: string;
  class?: number;
  ble?: BluetoothDevice;
}

export interface SerialConnect extends DeviceConnect {
  type: 'serial';
  port?: SerialPort;
}
