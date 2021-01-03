import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DoseComponent} from './dose.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [DoseComponent],
  exports: [DoseComponent],
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatSlideToggleModule],
})
export class DoseModule {
}
