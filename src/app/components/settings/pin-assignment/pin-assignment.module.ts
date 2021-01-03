import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PinAssignmentComponent} from './pin-assignment.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatOptionModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { PipesModule } from '../../../pipes/pipes.module';
import { PinSelectModule } from './pin-select/pin-select.module';

@NgModule({
  declarations: [PinAssignmentComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    MatTabsModule,
    MatExpansionModule,
    PipesModule,
    PinSelectModule,
  ],
})
export class PinAssignmentModule {
}
