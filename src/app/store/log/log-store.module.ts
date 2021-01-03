import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { logReducer } from './log.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LogEffects } from './log.effects';

@NgModule({
  declarations: [],
  exports: [],
  imports: [
    StoreModule,
    StoreModule.forFeature('log', logReducer),
    EffectsModule.forFeature([LogEffects]),
  ],
})
export class LogStoreModule {
}
