import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CompoteListComponent} from './compote-list.component';
import {CompoteModule} from './compote/compote.module';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [CompoteListComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    CompoteModule,
  ],
})
export class CompoteListModule {
}
