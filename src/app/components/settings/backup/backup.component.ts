import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {
  ActionSettingsBackup,
  ActionSettingsBackupRemove,
  ActionSettingsRestore,
  SettingsBackup,
  selectorSettingsBackups,
} from '../../../store/settings/settings.reducer';
import {Observable} from 'rxjs';
import { ConfirmService } from '../../../shared/confirm/confirm.service';

@Component({
  selector: 'app-backup',
  templateUrl: './backup.component.html',
  styleUrls: ['./backup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackupComponent {
  name: string;
  backups$: Observable<SettingsBackup[]>;

  constructor(
    private readonly store: Store<any>,
    private readonly confirmService: ConfirmService,
  ) {
    this.backups$ = this.store.pipe(select(selectorSettingsBackups));
  }

  onSave(): void {
    this.store.dispatch(new ActionSettingsBackup({ name: this.name }));
  }

  onLoad(index: number): void {
    this.store.dispatch(new ActionSettingsRestore(index));
  }

  onRemove(index: number): void {
    this.confirmService.confirm({
      title: 'Remove backup',
      text: 'Are you sure want to remove backup?',
    })
      .subscribe((confirm) => {
        if (!confirm) {
          return;
        }
        this.store.dispatch(new ActionSettingsBackupRemove(index));
      });
  }

  trackByIndex(index) {
    return index;
  }
}
