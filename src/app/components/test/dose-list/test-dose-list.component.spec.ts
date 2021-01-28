import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {TestDoseListComponent} from './test-dose-list.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';
import {provideMockStore} from '@ngrx/store/testing';
import { TimesPipe } from '../../../pipes/times.pipe';

describe('TestDoseListComponent', () => {
  let component: TestDoseListComponent;
  let fixture: ComponentFixture<TestDoseListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [TestDoseListComponent, TimesPipe],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideMockStore()],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDoseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
