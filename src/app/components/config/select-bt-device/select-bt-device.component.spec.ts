import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {SelectBtDeviceComponent} from './select-bt-device.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {ConnectService} from '../../../services/connect/connect.service';
import {MatListModule} from '@angular/material/list';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

describe('SelectBtDeviceComponent', () => {
  let component: SelectBtDeviceComponent;
  let fixture: ComponentFixture<SelectBtDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatListModule],
      declarations: [SelectBtDeviceComponent],
      providers: [
        {
          provide: ConnectService,
          useValue: {
            discover() {
              return new Promise((resolve, reject) => {
              });
            },
          },
        },
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: {}},
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectBtDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
