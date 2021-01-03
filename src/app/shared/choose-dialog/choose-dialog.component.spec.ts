import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChooseDialogComponent } from './choose-dialog.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ConnectService } from '../../services/connect/connect.service';
import { TimesPipe } from '../../pipes/times.pipe';
import { MatListModule } from '@angular/material/list';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

describe('ChooseDialogComponent', () => {
  let component: ChooseDialogComponent;
  let fixture: ComponentFixture<ChooseDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatListModule],
      declarations: [ChooseDialogComponent, TimesPipe],
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
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
