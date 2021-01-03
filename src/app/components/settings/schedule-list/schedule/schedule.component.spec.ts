import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ScheduleComponent} from './schedule.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {Schedule} from '../../../../auto/struct';

describe('ScheduleComponent', () => {
  let component: ScheduleComponent;
  let fixture: ComponentFixture<ScheduleComponent>;
  const schedule: Schedule = {
    enable: 0,
    deviceId: 0,
    startTime: {
      hour: 0,
      minute: 0,
      second: 0,
    },
    endTime: {
      hour: 0,
      minute: 0,
      second: 0,
    },
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleComponent);
    component = fixture.componentInstance;
    component.schedule = schedule;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
