import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface ChooseDialogParams {
  title: string;
  options: { title: string; value: any; }[];
}

@Component({
  selector: 'app-choose-dialog',
  templateUrl: './choose-dialog.component.html',
  styleUrls: ['./choose-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChooseDialogComponent implements OnInit {
  value: any;

  constructor(
    private readonly dialogRef: MatDialogRef<ChooseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private readonly data: ChooseDialogParams,
  ) {
  }

  get options(): { title: string; value: any; }[] {
    return this.data?.options;
  }

  ngOnInit() {
  }

  onCancel() {
    this.dialogRef.close();
  }

  onSelect() {
    this.dialogRef.close(this.value);
  }
}
