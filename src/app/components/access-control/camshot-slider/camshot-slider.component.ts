import {ChangeDetectorRef, Component, HostListener, Inject, Input} from '@angular/core';
import {startWith, switchMap} from 'rxjs/operators';
import {BehaviorSubject, from} from 'rxjs';
import {DbAccessControlCamshotValue, DbService} from '../../../services/storage/db.service';
import {BACKSPACE, DELETE, ENTER, LEFT_ARROW, RIGHT_ARROW} from '@angular/cdk/keycodes';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-camshot-slider',
  templateUrl: './camshot-slider.component.html',
  styleUrls: ['./camshot-slider.component.scss']
})
export class CamshotSliderComponent {
  @Input() set key(value: number) {
    this.keySubject.next(value);
  }
  get key(): number {
    return this.keySubject.value;
  }
  camshot: DbAccessControlCamshotValue;
  private keySubject = new BehaviorSubject<number>(null);

  constructor(
    private readonly db: DbService, cd: ChangeDetectorRef,
    @Inject(MAT_DIALOG_DATA) data: any,
    public readonly dialogRef: MatDialogRef<CamshotSliderComponent>,
  ) {
    this.keySubject.pipe(switchMap(key => from(db.getAccessControlCamshot(key))
      .pipe(startWith(null as DbAccessControlCamshotValue))
    ))
      .subscribe(camshot => {
        this.camshot = camshot;
        cd.markForCheck();
      });
    this.key = data.key;
  }

  @HostListener('document:keydown', ['$event']) onKeyDown($event) {
    switch ($event.keyCode) {
      case LEFT_ARROW:
        this.onPrev();
        break;
      case RIGHT_ARROW:
        this.onNext();
        break;
      case DELETE:
        break;
      case BACKSPACE:
        break;
      case ENTER:
        break;
    }
  }

  onPrev() {
    this.db.getAccessControlCamshotPrev(this.key).then(({key, value}) => {
      this.key = key;
      this.camshot = value;
    });
  }

  onNext() {
    this.db.getAccessControlCamshotNext(this.key).then(({key, value}) => {
      this.key = key;
      this.camshot = value;
    });
  }
}
