import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {DevAccessControlComponent} from './dev-access-control.component';
import {AccessControlService} from '../../../services/access-control/access-control.service';
import {Subject} from 'rxjs';

describe('DevAccessControlComponent', () => {
  let component: DevAccessControlComponent;
  let fixture: ComponentFixture<DevAccessControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DevAccessControlComponent],
      providers: [
        {
          provide: AccessControlService, useValue: {
          frame$: new Subject(),
          strategy: {
            frame$: new Subject(),
          },
        },
        },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevAccessControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
