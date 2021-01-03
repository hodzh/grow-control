import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompoteDailyComponent } from './compote-daily.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [CompoteDailyComponent],
  exports: [CompoteDailyComponent],
  imports: [CommonModule, MatFormFieldModule, MatInputModule]
})
export class CompoteDailyModule { }
