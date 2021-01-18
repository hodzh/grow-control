import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {PinSelectComponent} from './pin-select.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('PinSelectComponent', () => {
  let component: PinSelectComponent;
  let fixture: ComponentFixture<PinSelectComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PinSelectComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
