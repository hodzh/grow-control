import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TestValveListComponent} from './test-valve-list.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { PipesModule } from '../../../pipes/pipes.module';

@NgModule({
  declarations: [TestValveListComponent],
  exports: [TestValveListComponent],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    PipesModule,
  ],
})
export class TestValveListModule {
}
