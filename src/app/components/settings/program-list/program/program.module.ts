import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProgramComponent} from './program.component';
import {BitsPipe} from './bits.pipe';
import {DateDayPipe} from './date-day.pipe';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatNativeDateModule, MatOptionModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [ProgramComponent, BitsPipe, DateDayPipe],
  exports: [ProgramComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
})
export class ProgramModule {
}
