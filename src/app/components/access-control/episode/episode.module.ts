import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EpisodeComponent} from './episode.component';
import {CamshotsModule} from '../camshots/camshots.module';

@NgModule({
  declarations: [
    EpisodeComponent,
  ],
  exports: [
    EpisodeComponent,
  ],
  imports: [
    CommonModule,
    CamshotsModule,
  ]
})
export class EpisodeModule { }
