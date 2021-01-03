import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ProgramComponent} from './program.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {Program} from '../../../../auto/struct';
import {BitsPipe} from './bits.pipe';
import {DateDayPipe} from './date-day.pipe';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';

describe('ProgramComponent', () => {
  let component: ProgramComponent;
  let fixture: ComponentFixture<ProgramComponent>;
  const program: Program = {
    valves: [0],
    compote: 0,
    start: {
      wday: 0,
      day: 0,
      month: 0,
      year: 0,
    },
  };
  const compotes = [];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatDatepickerModule, MatNativeDateModule],
      declarations: [ProgramComponent, BitsPipe, DateDayPipe],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramComponent);
    component = fixture.componentInstance;
    component.program = program;
    component.compotes = compotes;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
