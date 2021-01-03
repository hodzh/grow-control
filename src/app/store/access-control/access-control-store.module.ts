import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { accessControlReducer } from './access-control.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AccessControlEffects } from './access-control.effects';
import { AccessControlServiceModule } from '../../services/access-control/access-control-service.module';

@NgModule({
  declarations: [],
  exports: [],
  imports: [
    StoreModule,
    AccessControlServiceModule,
    StoreModule.forFeature('accessControl', accessControlReducer),
    EffectsModule.forFeature([AccessControlEffects]),
  ],
})
export class AccessControlStoreModule {
}
