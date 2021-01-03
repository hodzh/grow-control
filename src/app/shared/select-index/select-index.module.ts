import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectIndexComponent } from './select-index.component';
import { SelectIndexService } from './select-index.service';
import { PipesModule } from '../../pipes/pipes.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [SelectIndexComponent],
  entryComponents: [SelectIndexComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    PipesModule,
  ],
  providers: [SelectIndexService],
})
export class SelectIndexModule {
}
