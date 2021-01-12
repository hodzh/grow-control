import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardModule} from './components/dashboard/dashboard.module';
import {SettingsModule} from './components/settings/settings.module';
import {ConnectModule} from './services/connect/connect.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {ActionReducer, StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {MonitorModule} from './components/monitor/monitor.module';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {LogModule} from './components/log/log.module';
import {SettingsStoreModule} from './store/settings/settings-store.module';
import {ConfigStoreModule} from './store/config/config-store.module';
import {PageModule} from './shared/page/page.module';
import {DevModule} from './components/dev/dev.module';
import {ConnectStoreModule} from './store/connect/connect-store.module';
import {DashboardStoreModule} from './store/dashboard/dashboard-store.module';
import {StorageModule} from './services/storage/storage.module';
import {MonitorStoreModule} from './store/monitor/monitor-store.module';
import {ConfigModule} from './components/config/config.module';
import {LogStoreModule} from './store/log/log-store.module';
import {CalibrateModule} from './components/calibrate/calibrate.module';
import {ManualControlModule} from './components/manual-control/manual-control.module';
import {AccessControlModule} from './components/access-control/access-control.module';
import {MatIconRegistry} from '@angular/material/icon';
import { TestModule } from './components/test/test.module';

export function logReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    const newState = reducer(state, action);
    console.log(`action ${action.type}`, {
      payload: (action as any).payload,
      oldState: state,
      newState,
    });
    return newState;
  };
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ConnectModule,
    PageModule,
    DashboardModule,
    SettingsModule,
    MonitorModule,
    LogModule,
    DevModule,
    ConfigModule,
    SettingsStoreModule,
    ConfigStoreModule,
    ConnectStoreModule,
    DashboardStoreModule,
    MonitorStoreModule,
    StorageModule,
    LogStoreModule,
    CalibrateModule,
    ManualControlModule,
    TestModule,
    AccessControlModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    StoreModule.forRoot({}, {metaReducers: environment.production ? [] : [logReducer]}),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconSet(sanitizer.bypassSecurityTrustResourceUrl(
      'assets/sprite.svg'));
  }
}
