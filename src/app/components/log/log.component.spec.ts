import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {LogComponent} from './log.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {provideMockStore} from '@ngrx/store/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {cold} from 'jest-marbles';
import {MatDialog} from '@angular/material/dialog';

describe('LogComponent', () => {
  let component: LogComponent;
  let fixture: ComponentFixture<LogComponent>;
  let actions;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ScrollingModule],
      declarations: [LogComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        provideMockStore(),
        provideMockActions(actions),
        {provide: MatDialog, useValue: {}},
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    actions = cold('|');
    expect(component).toBeTruthy();
  });
});
