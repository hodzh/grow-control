import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { dashboardReducer } from './dashboard.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DashboardEffects } from './dashboard.effects';

@NgModule({
  declarations: [],
  exports: [],
  imports: [
    StoreModule,
    StoreModule.forFeature('dashboard', dashboardReducer),
    EffectsModule.forFeature([DashboardEffects]),
  ],
})
export class DashboardStoreModule {
}
