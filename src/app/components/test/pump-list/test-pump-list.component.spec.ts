import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {TestPumpListComponent} from './test-pump-list.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';
import {provideMockStore} from '@ngrx/store/testing';
import { TimesPipe } from '../../../pipes/times.pipe';

describe('TestPumpListComponent', () => {
  let component: TestPumpListComponent;
  let fixture: ComponentFixture<TestPumpListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [TestPumpListComponent, TimesPipe],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideMockStore()],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPumpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
