import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {LevelSensorComponent} from './level-sensor.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {LevelSensor} from '../../../../auto/struct';

describe('LevelSensorComponent', () => {
  let component: LevelSensorComponent;
  let fixture: ComponentFixture<LevelSensorComponent>;
  const levelSensor: LevelSensor = {
    enable: 1,
    seconds: 0,
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LevelSensorComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelSensorComponent);
    component = fixture.componentInstance;
    component.levelSensor = levelSensor;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
