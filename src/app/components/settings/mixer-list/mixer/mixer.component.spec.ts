import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {MixerComponent} from './mixer.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {Mixer} from '../../../../auto/struct';

describe('MixerComponent', () => {
  let component: MixerComponent;
  let fixture: ComponentFixture<MixerComponent>;
  const mixer: Mixer = {
    seconds: 0,
    washSeconds: 0,
    pwmSensor: 0,
    pwm: 0,
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MixerComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MixerComponent);
    component = fixture.componentInstance;
    component.mixer = mixer;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
