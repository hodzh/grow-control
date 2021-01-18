import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {MonitorConfigComponent} from './monitor-config.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('MonitorConfigComponent', () => {
  let component: MonitorConfigComponent;
  let fixture: ComponentFixture<MonitorConfigComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MonitorConfigComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorConfigComponent);
    component = fixture.componentInstance;
    component.config = {
      time: {
        enable: true,
        interval: 5000,
      },
      temp: {
        enable: true,
        interval: 5000,
      },
      status: {
        enable: true,
        interval: 5000,
      },
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
