import { TestBed } from '@angular/core/testing';
import { ConnectService } from './connect.service';
import { Subject } from 'rxjs';
import { DEVICE_CONNECT } from '../../platform/device-connect';

describe('ConnectService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [{ provide: DEVICE_CONNECT, useValue: { response$: new Subject() } }],
    }),
  );

  it('should be created', () => {
    const service: ConnectService = TestBed.get(ConnectService);
    expect(service).toBeTruthy();
  });
});
