import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DoseListComponent} from './dose-list.component';
import {DoseModule} from './dose/dose.module';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [DoseListComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    DoseModule,
  ],
})
export class DoseListModule {
}
