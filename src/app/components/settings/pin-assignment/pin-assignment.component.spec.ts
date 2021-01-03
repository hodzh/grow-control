import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {PinAssignmentComponent} from './pin-assignment.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {provideMockStore} from '@ngrx/store/testing';
import {defaultPinAssignment} from '../../../model/default-settings';
import { TimesPipe } from '../../../pipes/times.pipe';

describe('PinAssignmentComponent', () => {
  let component: PinAssignmentComponent;
  let fixture: ComponentFixture<PinAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PinAssignmentComponent, TimesPipe],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideMockStore()],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinAssignmentComponent);
    component = fixture.componentInstance;
    component.pinAssignment = defaultPinAssignment();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
