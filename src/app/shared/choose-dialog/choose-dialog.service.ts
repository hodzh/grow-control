import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChooseDialogComponent, ChooseDialogParams } from './choose-dialog.component';
import { Observable } from 'rxjs';

@Injectable()
export class ChooseDialogService {

  constructor(
    public readonly dialog: MatDialog,
  ) {
  }

  choose(data: ChooseDialogParams): Observable<any> {
    const dialogRef = this.dialog.open(ChooseDialogComponent, { data });
    return dialogRef.afterClosed();
  }
}
