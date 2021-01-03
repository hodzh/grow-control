import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { ChooseDialogService } from './choose-dialog.service';

describe('ChooseDialogService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        { provide: MatDialog, useValue: {} },
        ChooseDialogService,
      ],
    }),
  );

  it('should be created', () => {
    const service: ChooseDialogService = TestBed.get(ChooseDialogService);
    expect(service).toBeTruthy();
  });
});
