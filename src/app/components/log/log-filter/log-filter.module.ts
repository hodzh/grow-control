import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LogFilterComponent} from './log-filter.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTreeModule} from '@angular/material/tree';

@NgModule({
  declarations: [LogFilterComponent],
  exports: [LogFilterComponent],
  entryComponents: [LogFilterComponent],
  imports: [
    CommonModule, MatIconModule, MatButtonModule, MatCheckboxModule, MatDialogModule, MatTreeModule,
  ],
})
export class LogFilterModule {
}
