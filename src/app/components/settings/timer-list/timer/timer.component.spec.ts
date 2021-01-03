import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {TimerComponent} from './timer.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {Timer} from '../../../../auto/struct';

describe('TimerComponent', () => {
  let component: TimerComponent;
  let fixture: ComponentFixture<TimerComponent>;
  const timer: Timer = {
    enable: 0,
    program: 0,
    weekDays: 0,
    time: {
      hour: 0,
      minute: 0,
      second: 0,
    },
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TimerComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerComponent);
    component = fixture.componentInstance;
    component.timer = timer;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
