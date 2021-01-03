import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PinSelectComponent} from './pin-select.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [PinSelectComponent],
  exports: [PinSelectComponent],
  imports: [CommonModule, MatFormFieldModule, MatSelectModule],
})
export class PinSelectModule {
}
