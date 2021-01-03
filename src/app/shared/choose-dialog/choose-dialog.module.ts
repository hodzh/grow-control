import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChooseDialogComponent } from './choose-dialog.component';
import { ChooseDialogService } from './choose-dialog.service';
import { PipesModule } from '../../pipes/pipes.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ChooseDialogComponent],
  entryComponents: [ChooseDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    PipesModule,
  ],
  providers: [ChooseDialogService],
})
export class ChooseDialogModule {
}
