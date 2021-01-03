import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {ManualControlComponent} from './manual-control.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { provideMockStore } from '@ngrx/store/testing';
import { SelectIndexService } from '../../shared/select-index/select-index.service';

describe('ManualControlComponent', () => {
  let component: ManualControlComponent;
  let fixture: ComponentFixture<ManualControlComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ManualControlComponent],
      providers: [
        provideMockStore({ initialState: {} }),
        { provide: SelectIndexService, useValue: {} },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
