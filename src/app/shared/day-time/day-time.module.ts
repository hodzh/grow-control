import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayTimeComponent } from './day-time.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [DayTimeComponent],
  exports: [DayTimeComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
  ],
})
export class DayTimeModule {
}
