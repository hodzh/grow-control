import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {AlertComponent} from './alert.component';

@Injectable()
export class AlertService {

  constructor(
    private dialog: MatDialog,
  ) {
  }

  alert(data: { title: string, text: string }): Observable<boolean> {
    return this.dialog.open(AlertComponent, {data}).afterClosed();
  }
}
