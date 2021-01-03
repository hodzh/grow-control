import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {DeviceMonitorComponent} from './device-monitor.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('DeviceMonitorComponent', () => {
  let component: DeviceMonitorComponent;
  let fixture: ComponentFixture<DeviceMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DeviceMonitorComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceMonitorComponent);
    component = fixture.componentInstance;
    component.config = {
      enable: true,
      interval: 5000,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
