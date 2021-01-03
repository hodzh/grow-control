import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CompoteDailyComponent } from './compote-daily.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {defaultCompoteDaily} from '../../../../model/default-settings';

describe('CompoteDailyComponent', () => {
  let component: CompoteDailyComponent;
  let fixture: ComponentFixture<CompoteDailyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompoteDailyComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompoteDailyComponent);
    component = fixture.componentInstance;
    component.compoteDaily = defaultCompoteDaily();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
