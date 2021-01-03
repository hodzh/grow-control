import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { connectReducer } from './connect.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ConnectEffects } from './connect.effects';

@NgModule({
  declarations: [],
  exports: [],
  imports: [
    StoreModule,
    StoreModule.forFeature('connect', connectReducer),
    EffectsModule.forFeature([ConnectEffects]),
  ],
})
export class ConnectStoreModule {
}
