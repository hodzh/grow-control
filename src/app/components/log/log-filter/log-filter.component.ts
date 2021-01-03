import {ChangeDetectionStrategy, Component} from '@angular/core';
import {
  ActionLogResetFilter,
  ActionLogSetFilter,
  ActionLogToggleExpandFilter,
  ActionLogToggleFilter,
  LogFilter,
  selectorLogFilter
} from '../../../store/log/log.reducer';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {first} from 'rxjs/operators';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-log-filter',
  templateUrl: './log-filter.component.html',
  styleUrls: ['./log-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogFilterComponent {
  filter$: Observable<LogFilter[]>;
  private initialFilter: LogFilter[];

  constructor(
    private readonly store: Store<LogFilter[]>,
    private readonly dialogRef: MatDialogRef<LogFilterComponent>,
  ) {
    this.filter$ = this.store.pipe(select(selectorLogFilter));
    this.store.pipe(select(selectorLogFilter), first())
      .subscribe(filter => this.initialFilter = filter);
  }

  onSelect(line) {
    this.store.dispatch(new ActionLogToggleFilter(line));
  }

  onExpand(line) {
    this.store.dispatch(new ActionLogToggleExpandFilter(line));
  }

  onReset() {
    this.store.dispatch(new ActionLogResetFilter());
  }

  onApply() {
    this.dialogRef.close();
  }

  onCancel() {
    this.dialogRef.close();
    setTimeout(() => this.store.dispatch(new ActionLogSetFilter(this.initialFilter)));
  }

  trackBy(index) {
    return index;
  }
}
