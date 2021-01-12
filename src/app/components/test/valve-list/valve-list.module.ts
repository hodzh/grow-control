import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ValveListComponent} from './valve-list.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { PipesModule } from '../../../pipes/pipes.module';

@NgModule({
  declarations: [ValveListComponent],
  exports: [ValveListComponent],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    PipesModule,
  ],
})
export class ValveListModule {
}
