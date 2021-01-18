import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CamshotsComponent } from './camshots.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {ScrollingModule} from '@angular/cdk/scrolling';

describe('CamshotsComponent', () => {
  let component: CamshotsComponent;
  let fixture: ComponentFixture<CamshotsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ScrollingModule],
      declarations: [ CamshotsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamshotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
