import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit, ViewChild} from '@angular/core';
import {ConnectService} from '../../../services/connect/connect.service';
import {DeviceConnect} from '../../../model/device-connect';
import {SelectionModel} from '@angular/cdk/collections';
import {MatListOption, MatSelectionList} from '@angular/material/list';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-select-bt-device',
  templateUrl: './select-bt-device.component.html',
  styleUrls: ['./select-bt-device.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectBtDeviceComponent implements OnInit {
  devices: DeviceConnect[];
  @ViewChild(MatSelectionList, {static: true}) selectionList: MatSelectionList;

  constructor(
    private readonly connectService: ConnectService,
    private readonly dialogRef: MatDialogRef<SelectBtDeviceComponent>,
    @Inject(MAT_DIALOG_DATA) private readonly data: any,
    private readonly changeDetector: ChangeDetectorRef,
  ) {
  }

  ngOnInit() {
    this.selectionList.selectedOptions = new SelectionModel<MatListOption>(false);
    this.discover();
  }

  discover() {
    this.connectService.discover()
      .then(devices => {
        this.devices = devices;
        this.changeDetector.detectChanges();
      });
  }

  onCancel() {
    this.dialogRef.close();
  }

  onSelect() {
    this.dialogRef.close(this.selectionList.selectedOptions.selected[0].value);
  }

  compareWith(o1, o2) {
    return o1.id === o2.id;
  }
}
