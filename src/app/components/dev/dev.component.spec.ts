import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {DevComponent} from './dev.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {provideMockStore} from '@ngrx/store/testing';
import {ConnectService} from '../../services/connect/connect.service';
import {provideMockActions} from '@ngrx/effects/testing';
import {Subject} from 'rxjs';
import {Action} from '@ngrx/store';
import {TimesPipe} from '../../pipes/times.pipe';
import {DeviceSimulateService} from './device-simulate.sevice';
import {SelectIndexService} from '../../shared/select-index/select-index.service';

describe('DevComponent', () => {
  let component: DevComponent;
  let fixture: ComponentFixture<DevComponent>;
  let actions;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DevComponent, TimesPipe],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        provideMockStore(),
        provideMockActions(actions),
        {provide: ConnectService, useValue: {}},
        {provide: SelectIndexService, useValue: {}},
        {provide: DeviceSimulateService, useValue: {}},
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    actions = new Subject<Action>();
    expect(component).toBeTruthy();
  });
});
