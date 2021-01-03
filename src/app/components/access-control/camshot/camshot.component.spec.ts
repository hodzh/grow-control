import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CamshotComponent } from './camshot.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {DbService} from '../../../services/storage/db.service';
import {CamshotSliderService} from '../camshot-slider/camshot-slider.service';

describe('CamshotComponent', () => {
  let component: CamshotComponent;
  let fixture: ComponentFixture<CamshotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamshotComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {provide: DbService, useValue: {async getAccessControlCamshot() {}}},
        {provide: CamshotSliderService, useValue: {}},
      ],
    })
    .compileComponents();
    fixture = TestBed.createComponent(CamshotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
