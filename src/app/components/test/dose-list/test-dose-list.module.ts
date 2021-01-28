import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TestDoseListComponent} from './test-dose-list.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { PipesModule } from '../../../pipes/pipes.module';

@NgModule({
  declarations: [TestDoseListComponent],
  exports: [TestDoseListComponent],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    PipesModule,
  ],
})
export class TestDoseListModule {
}
