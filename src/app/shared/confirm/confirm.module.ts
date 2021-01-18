import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConfirmComponent} from './confirm.component';
import {ConfirmService} from './confirm.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [ConfirmComponent],
  entryComponents: [ConfirmComponent],
  exports: [ConfirmComponent],
  providers: [ConfirmService],
})
export class ConfirmModule {
}
