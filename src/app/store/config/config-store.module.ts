import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { configReducer } from './config.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ConfigEffects } from './config.effects';

@NgModule({
  declarations: [],
  exports: [],
  imports: [
    StoreModule,
    StoreModule.forFeature('config', configReducer),
    EffectsModule.forFeature([ConfigEffects]),
  ],
})
export class ConfigStoreModule {
}
