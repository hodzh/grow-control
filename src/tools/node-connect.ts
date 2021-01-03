// import * as SerialPort from 'serialport';
const SerialPort = require('serialport');
const inquirer = require('inquirer');

class Connect {
  private port: any;

  async list(): Promise<string[]> {
    const ports = await SerialPort.list();
    ports.forEach((port, index) => {
      console.log('#', index);
      console.log(port.path);
      console.log(port.pnpId);
      console.log(port.manufacturer);
    });
    return ports.map(port => port.path);
  }

  async connect(options: any) {
    console.log('connecting to', options.port);
    this.port = new SerialPort(options.port, {
      // baudRate: 38400,
      baudRate: 9600,
    });
    await new Promise((resolve, reject) => {
      this.port.once('open', () => {
        console.log('connected');
        resolve();
      });
      // open errors will be emitted as an error event
      this.port.once('error', (err) => {
        reject(err);
      });
    });

    // this.port.on('readable', () => {
    //   console.log('read:', this.port.read())
    // });

    this.port.once('close', () => {
      this.onClose();
    });
  }

  async write(buffer: Buffer) {
    console.log('write:', buffer);
    await this.port.write(buffer);
    await this.port.drain();
  }

  onClose() {
    console.log('close');
  }

  onError(error) {
    console.error(getError(error.code) || error);
  }
}

async function connect() {
  const connector = new Connect();
  const ports = await connector.list();
  const port = await inquirer.prompt([
    {
      type: 'list',
      name: 'port',
      message: 'Select serial port',
      choices: ports,
    },
  ]);
  await connector.connect(port);
  // return;
  for (let i = 0; i < 10000; i++) {
    await connector.write(Buffer.from([0xA7, 0, 0, 0xC7]));
    await new Promise(resolve => setTimeout(resolve, 5000));
  }
}

connect().catch(err => console.error(getError(err.code) || err.message));

function getError(code) {
  const codes = {
    1168: 'ERROR_NOT_FOUND (0x490) Element not found.',
  };
  return codes[code];
}
