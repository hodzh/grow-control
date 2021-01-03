import {Component, OnDestroy, OnInit} from '@angular/core';
import {AccessControlService} from '../../../services/access-control/access-control.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

declare var cv: any;

@Component({
  selector: 'app-dev-access-control',
  templateUrl: './dev-access-control.component.html',
  styleUrls: ['./dev-access-control.component.scss'],
})
export class DevAccessControlComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  constructor(
    private readonly accessControlService: AccessControlService,
  ) {
  }

  ngOnInit() {
    this.accessControlService.frame$
      .pipe(takeUntil(this.destroy$))
      .subscribe(frame => {
        cv.imshow('canvasInput', frame);
      });
    this.accessControlService.strategy.frame$
      .pipe(takeUntil(this.destroy$))
      .subscribe(frame => {
        cv.imshow('canvasOutput', frame);
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
  }
}
