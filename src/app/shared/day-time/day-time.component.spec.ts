import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { DayTimeComponent } from './day-time.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('DayTimeComponent', () => {
  let component: DayTimeComponent;
  let fixture: ComponentFixture<DayTimeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DayTimeComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayTimeComponent);
    component = fixture.componentInstance;
    component.time = {
      hour: 0,
      minute: 0,
      second: 0,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
