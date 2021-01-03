import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {DashboardComponent} from './dashboard.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {DateTimePipe} from '../../pipes/date-time.pipe';
import {provideMockStore} from '@ngrx/store/testing';
import {initialDashboardState} from '../../store/dashboard/dashboard.reducer';
import {provideMockActions} from '@ngrx/effects/testing';
import {cold} from 'jest-marbles';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let actions;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent, DateTimePipe],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        provideMockStore({initialState: {dashboard: initialDashboardState}}),
        provideMockActions(() => actions),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    actions = cold('|');
    expect(component).toBeTruthy();
  });
});
