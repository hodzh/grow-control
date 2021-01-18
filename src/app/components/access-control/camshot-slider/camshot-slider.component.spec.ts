import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CamshotSliderComponent } from './camshot-slider.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {DbService} from '../../../services/storage/db.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

describe('CamshotSliderComponent', () => {
  let component: CamshotSliderComponent;
  let fixture: ComponentFixture<CamshotSliderComponent>;
  let dbService: DbService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CamshotSliderComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {provide: DbService, useValue: {async getAccessControlCamshot() {}}},
        {provide: MAT_DIALOG_DATA, useValue: {}},
        {provide: MatDialogRef, useValue: {}},
      ],
    })
    .compileComponents();
    fixture = TestBed.createComponent(CamshotSliderComponent);
    component = fixture.componentInstance;
    dbService = TestBed.get(DbService);
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
