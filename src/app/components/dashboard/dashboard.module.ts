import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {PageModule} from '../../shared/page/page.module';
import {PipesModule} from '../../pipes/pipes.module';
import {StatusModule} from './status/status.module';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {TimeChartModule} from './time-chart/time-chart.module';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule, DashboardRoutingModule, MatIconModule, MatButtonModule, MatCardModule,
    PageModule, PipesModule, StatusModule, TimeChartModule,
  ],
})
export class DashboardModule {
}
