import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {Observable} from 'rxjs';
import {CamshotSliderComponent} from './camshot-slider.component';

@Injectable()
export class CamshotSliderService {
  constructor(
    public readonly dialog: MatDialog,
  ) {
  }

  show(key: number): Observable<number> {
    const dialogRef = this.dialog.open(CamshotSliderComponent,
      {data: {key}, width: '100vw', height: '100vh'});
    return dialogRef.afterClosed();
  }
}
