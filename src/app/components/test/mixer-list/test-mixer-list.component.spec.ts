import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {TestMixerListComponent} from './test-mixer-list.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';
import {provideMockStore} from '@ngrx/store/testing';
import { TimesPipe } from '../../../pipes/times.pipe';

describe('TestMixerListComponent', () => {
  let component: TestMixerListComponent;
  let fixture: ComponentFixture<TestMixerListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [TestMixerListComponent, TimesPipe],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideMockStore()],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMixerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
