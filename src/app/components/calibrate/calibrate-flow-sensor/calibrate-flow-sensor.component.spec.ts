import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {CalibrateFlowSensorComponent} from './calibrate-flow-sensor.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

describe('CalibrateFlowSensorComponent', () => {
  let component: CalibrateFlowSensorComponent;
  let fixture: ComponentFixture<CalibrateFlowSensorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [CalibrateFlowSensorComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalibrateFlowSensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
