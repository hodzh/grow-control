import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ValveListComponent} from './valve-list.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';
import {provideMockStore} from '@ngrx/store/testing';
import { TimesPipe } from '../../../pipes/times.pipe';

describe('ValveListComponent', () => {
  let component: ValveListComponent;
  let fixture: ComponentFixture<ValveListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ValveListComponent, TimesPipe],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideMockStore()],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
