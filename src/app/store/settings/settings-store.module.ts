import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { settingsReducer } from './settings.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SettingsEffects } from './settings.effects';

@NgModule({
  declarations: [],
  exports: [],
  imports: [
    StoreModule,
    StoreModule.forFeature('settings', settingsReducer),
    EffectsModule.forFeature([SettingsEffects]),
  ],
})
export class SettingsStoreModule {
}
