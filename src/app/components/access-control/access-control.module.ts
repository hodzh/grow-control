import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccessControlComponent} from './access-control.component';
import {AccessControlRoutingModule} from './access-control-routing.module';
import {AccessControlStoreModule} from '../../store/access-control/access-control-store.module';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {EpisodeModule} from './episode/episode.module';

@NgModule({
  declarations: [
    AccessControlComponent,
  ],
  exports: [
    AccessControlComponent,
  ],
  imports: [
    CommonModule,
    ScrollingModule,
    AccessControlRoutingModule,
    AccessControlStoreModule,
    EpisodeModule,
  ],
})
export class AccessControlModule {
}
