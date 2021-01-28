import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TestMixerListComponent} from './test-mixer-list.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { PipesModule } from '../../../pipes/pipes.module';

@NgModule({
  declarations: [TestMixerListComponent],
  exports: [TestMixerListComponent],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    PipesModule,
  ],
})
export class TestMixerListModule {
}
