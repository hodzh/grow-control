import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimerListComponent} from './timer-list.component';
import {TimerModule} from './timer/timer.module';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [TimerListComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    TimerModule,
  ],
})
export class TimerListModule {
}
