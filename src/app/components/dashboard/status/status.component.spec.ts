import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StatusComponent} from './status.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { provideMockStore } from '@ngrx/store/testing';

describe('StatusComponent', () => {
  let component: StatusComponent;
  let fixture: ComponentFixture<StatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StatusComponent],
      providers: [
        provideMockStore({ initialState: {} }),
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusComponent);
    component = fixture.componentInstance;
    component.status = {
      state: 0,
      cmdState: 0,
      valve: 0,
      flow: 0,
      volume: 0,
      totalVolume: 0,
      mix: 0,
      dose: 0,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
