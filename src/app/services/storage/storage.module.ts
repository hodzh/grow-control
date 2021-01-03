import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalStorageService } from './local-storage.service';
import { DbService } from './db.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    LocalStorageService,
    DbService,
    {
      provide: APP_INITIALIZER,
      useFactory: (dbService: DbService) => () => dbService.init(),
      deps: [DbService],
      multi: true,
    },
  ],
})
export class StorageModule {
}
