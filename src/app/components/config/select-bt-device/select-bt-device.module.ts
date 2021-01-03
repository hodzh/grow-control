import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SelectBtDeviceComponent} from './select-bt-device.component';
import {SelectBtDeviceService} from './select-bt-device.service';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [SelectBtDeviceComponent],
  entryComponents: [SelectBtDeviceComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatListModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatDividerModule,
  ],
  providers: [SelectBtDeviceService],
})
export class SelectBtDeviceModule {
}
