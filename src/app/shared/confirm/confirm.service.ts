import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmComponent} from './confirm.component';

@Injectable()
export class ConfirmService {

  constructor(
    private dialog: MatDialog,
  ) {
  }

  confirm(data: { title: string, text: string }): Observable<boolean> {
    return this.dialog.open(ConfirmComponent, {data}).afterClosed();
  }
}
