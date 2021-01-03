import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CalibrateDoseComponent} from './calibrate-dose.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

describe('CalibrateDoseComponent', () => {
  let component: CalibrateDoseComponent;
  let fixture: ComponentFixture<CalibrateDoseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [CalibrateDoseComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalibrateDoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
