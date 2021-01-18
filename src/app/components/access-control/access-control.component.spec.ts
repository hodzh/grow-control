import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {AccessControlComponent} from './access-control.component';
import {provideMockStore} from '@ngrx/store/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {ScrollingModule} from '@angular/cdk/scrolling';

describe('AccessControlComponent', () => {
  let component: AccessControlComponent;
  let fixture: ComponentFixture<AccessControlComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ScrollingModule],
      declarations: [AccessControlComponent],
      providers: [
        provideMockStore(),
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
