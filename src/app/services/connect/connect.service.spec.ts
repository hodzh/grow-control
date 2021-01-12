import { TestBed } from '@angular/core/testing';
import { ConnectService } from './connect.service';
import { Subject } from 'rxjs';
import { DEVICE_CONNECT } from '../../platform/device-connect';
import { provideMockStore } from '@ngrx/store/testing';

describe('ConnectService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        { provide: DEVICE_CONNECT, useValue: { response$: new Subject() } },
        provideMockStore(),
      ],
    }),
  );

  it('should be created', () => {
    const service: ConnectService = TestBed.get(ConnectService);
    expect(service).toBeTruthy();
  });
});
