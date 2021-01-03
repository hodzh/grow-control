import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {DoseComponent} from './dose.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {Dose} from '../../../../auto/struct';

describe('DoseComponent', () => {
  let component: DoseComponent;
  let fixture: ComponentFixture<DoseComponent>;
  const dose: Dose = {
    rate: 10,
    seconds: 0,
    pwmSensor: 0,
    pwm: 0,
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DoseComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoseComponent);
    component = fixture.componentInstance;
    component.dose = dose;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
