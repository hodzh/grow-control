import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {DbAccessControlCamshotValue, DbService} from '../../../services/storage/db.service';
import {switchMap, startWith} from 'rxjs/operators';
import {BehaviorSubject, from} from 'rxjs';
import {CamshotSliderService} from '../camshot-slider/camshot-slider.service';

@Component({
  selector: 'app-camshot',
  templateUrl: './camshot.component.html',
  styleUrls: ['./camshot.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CamshotComponent implements OnInit {
  @Input() set key(value: number) {
    this.keySubject.next(value);
  }
  get key(): number {
    return this.keySubject.value;
  }
  camshot: DbAccessControlCamshotValue;
  private keySubject = new BehaviorSubject<number>(null);

  constructor(
    db: DbService,
    cd: ChangeDetectorRef,
    private readonly camshotSlider: CamshotSliderService,
  ) {
    this.keySubject.pipe(switchMap(key => from(db.getAccessControlCamshot(key))
      .pipe(startWith(null as DbAccessControlCamshotValue))
    ))
      .subscribe(camshot => {
        this.camshot = camshot;
        cd.markForCheck();
      });
  }

  ngOnInit() {
  }

  onClick() {
    this.camshotSlider.show(this.key);
  }
}
