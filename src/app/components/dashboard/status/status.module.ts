import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StatusComponent} from './status.component';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [StatusComponent],
  exports: [StatusComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class StatusModule {
}
