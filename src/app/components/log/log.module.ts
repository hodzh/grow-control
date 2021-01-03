import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LogComponent} from './log.component';
import {PageModule} from '../../shared/page/page.module';
import {LogFilterModule} from './log-filter/log-filter.module';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {LogRoutingModule} from './log-routing.module';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [LogComponent],
  imports: [CommonModule, LogRoutingModule, PageModule, MatIconModule, MatButtonModule, ScrollingModule, LogFilterModule],
})
export class LogModule {
}
