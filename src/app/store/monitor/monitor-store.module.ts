import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { monitorReducer } from './monitor.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MonitorEffects } from './monitor.effects';

@NgModule({
  declarations: [],
  exports: [],
  imports: [
    StoreModule,
    StoreModule.forFeature('monitor', monitorReducer),
    EffectsModule.forFeature([MonitorEffects]),
  ],
})
export class MonitorStoreModule {
}
