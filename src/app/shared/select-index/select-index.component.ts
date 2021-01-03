import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SelectIndexParams } from './select-index-params';

@Component({
  selector: 'app-select-index',
  templateUrl: './select-index.component.html',
  styleUrls: ['./select-index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectIndexComponent {
  @Input() count: number;
  @Input() index: number;

  constructor(
    private readonly dialogRef: MatDialogRef<SelectIndexComponent, number | void>,
    @Inject(MAT_DIALOG_DATA) public readonly data: SelectIndexParams,
  ) {
    this.count = data.count;
    this.index = 0;
  }

  onCancel() {
    this.dialogRef.close();
  }

  onSelect() {
    this.dialogRef.close(this.index);
  }

  onChange(value) {
    this.index = value;
  }
}
