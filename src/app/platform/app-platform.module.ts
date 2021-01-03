import { NgModule } from '@angular/core';
import { environment } from '../../environments/environment';
import { AppBrowserModule } from './browser/browser.module';
import { AndroidModule } from './android/android.module';
import { AppMockModule } from './mock/mock.module';

@NgModule({
  imports: [
    ...(environment.platform === 'browser'
      ? [AppBrowserModule]
      : environment.platform === 'android'
        ? [AndroidModule]
        : [AppMockModule]),
  ],
})
export class AppPlatformModule {
}
