import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CompoteComponent} from './compote.component';
import {CompoteDailyModule} from '../compote-daily/compote-daily.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [CompoteComponent],
  exports: [CompoteComponent],
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatExpansionModule, CompoteDailyModule],
})
export class CompoteModule {
}
