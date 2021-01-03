import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MixerListComponent} from './mixer-list.component';
import {MixerModule} from './mixer/mixer.module';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [MixerListComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    MixerModule,
  ],
})
export class MixerListModule {
}
