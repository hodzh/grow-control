import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {CompoteComponent} from './compote.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {Compote} from '../../../../auto/struct';

describe('CompoteComponent', () => {
  let component: CompoteComponent;
  let fixture: ComponentFixture<CompoteComponent>;
  const compote: Compote = {
    daily: [],
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CompoteComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompoteComponent);
    component = fixture.componentInstance;
    component.compote = compote;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
