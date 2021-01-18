import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {ConfigComponent} from './config.component';
import {RouterTestingModule} from '@angular/router/testing';
import {provideMockStore} from '@ngrx/store/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {MemoryPipe} from '../../pipes/memory.pipe';
import { DEVICE_CONNECT } from '../../platform/device-connect';

describe('ConfigComponent', () => {
  let component: ConfigComponent;
  let fixture: ComponentFixture<ConfigComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ConfigComponent, MemoryPipe],
      providers: [
        provideMockStore(),
        {provide: DEVICE_CONNECT, useValue: {}},
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
