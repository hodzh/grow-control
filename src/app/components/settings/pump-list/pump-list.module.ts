import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PumpListComponent} from './pump-list.component';
import {PumpModule} from './pump/pump.module';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [PumpListComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    PumpModule,
  ],
})
export class PumpListModule {
}
