import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectIndexComponent } from './select-index.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ConnectService } from '../../services/connect/connect.service';
import { TimesPipe } from '../../pipes/times.pipe';
import { MatListModule } from '@angular/material/list';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

describe('SelectIndexComponent', () => {
  let component: SelectIndexComponent;
  let fixture: ComponentFixture<SelectIndexComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatListModule],
      declarations: [SelectIndexComponent, TimesPipe],
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
    fixture = TestBed.createComponent(SelectIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
