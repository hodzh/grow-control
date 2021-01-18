import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {AccessControlConfigComponent} from './access-control-config.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('AccessControlConfigComponent', () => {
  let component: AccessControlConfigComponent;
  let fixture: ComponentFixture<AccessControlConfigComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AccessControlConfigComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessControlConfigComponent);
    component = fixture.componentInstance;
    component.accessControl = {
      enable: true,
      fps: 3,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
