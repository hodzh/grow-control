import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {PumpComponent} from './pump.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {Pump} from '../../../../auto/struct';

describe('PumpComponent', () => {
  let component: PumpComponent;
  let fixture: ComponentFixture<PumpComponent>;
  const pump: Pump = {
    minFlow: 100,
    startingTime: 3000,
    pwmFlow: 0,
    pwm: 0,
    rate: 5880,
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PumpComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PumpComponent);
    component = fixture.componentInstance;
    component.pump = pump;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
