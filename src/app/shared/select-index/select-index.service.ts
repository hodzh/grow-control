import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SelectIndexComponent } from './select-index.component';
import { Observable } from 'rxjs';
import { SelectIndexParams } from './select-index-params';

@Injectable()
export class SelectIndexService {

  constructor(
    public readonly dialog: MatDialog,
  ) {
  }

  select(params: SelectIndexParams): Observable<number | void> {
    const dialogRef = this.dialog.open<SelectIndexComponent, SelectIndexParams, number | void>(
      SelectIndexComponent, { data: params });
    return dialogRef.afterClosed();
  }
}
