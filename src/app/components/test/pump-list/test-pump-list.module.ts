import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TestPumpListComponent} from './test-pump-list.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { PipesModule } from '../../../pipes/pipes.module';

@NgModule({
  declarations: [TestPumpListComponent],
  exports: [TestPumpListComponent],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    PipesModule,
  ],
})
export class TestPumpListModule {
}
