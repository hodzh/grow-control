import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {TestValveListComponent} from './test-valve-list.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';
import {provideMockStore} from '@ngrx/store/testing';
import { TimesPipe } from '../../../pipes/times.pipe';

describe('TestValveListComponent', () => {
  let component: TestValveListComponent;
  let fixture: ComponentFixture<TestValveListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [TestValveListComponent, TimesPipe],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideMockStore()],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestValveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
