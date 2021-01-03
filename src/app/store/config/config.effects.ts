import { Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { concat, EMPTY, from, Observable, of } from 'rxjs';
import { debounceTime, exhaustMap, map, mergeMap, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import {
  ActionConfigClearDatabase,
  ActionConfigSetDatabaseSizes,
  ActionConfigUpdate,
  ConfigActionTypes,
  selectorConfig,
  selectorDatabaseSizes,
} from './config.reducer';
import { LocalStorageService } from '../../services/storage/local-storage.service';
import { DbService } from '../../services/storage/db.service';

@Injectable()
export class ConfigEffects {
  constructor(
    private readonly actions$: Actions<Action>,
    private readonly store: Store<any>,
    private readonly storage: LocalStorageService,
    private readonly db: DbService,
  ) {
  }

  @Effect({ dispatch: true })
  init(): Observable<Action> {
    return this.actions$.pipe(ofType(ConfigActionTypes.INIT))
      .pipe(switchMap(() => concat(
        of(new ActionConfigUpdate(this.storage.loadConfig())),
        this.store.pipe(select(selectorConfig))
          .pipe(debounceTime(300))
          .pipe(tap(state => this.storage.saveConfig(state)))
          .pipe(mergeMap(() => EMPTY)),
      )))
      ;
  }

  @Effect({ dispatch: true })
  updateSize(): Observable<Action> {
    return this.actions$.pipe(ofType(ConfigActionTypes.UPDATE_DATABASE_SIZES))
      .pipe(exhaustMap(() => from(this.db.getDatabaseSize())))
      .pipe(map(sizes => new ActionConfigSetDatabaseSizes(sizes)))
      ;
  }

  @Effect({ dispatch: true })
  clear(): Observable<Action> {
    return this.actions$.pipe(
      ofType<ActionConfigClearDatabase>(ConfigActionTypes.CLEAR_DATABASE),
      exhaustMap(action => from(this.db.clear(action.payload)).pipe(map(() => action.payload))),
      withLatestFrom(this.store.pipe(select(selectorDatabaseSizes))),
      map(([names, sizes]) => new ActionConfigSetDatabaseSizes(sizes.map(s =>
        names.includes(s.name) ? { name: s.name, size: 0, count: 0 } : s))),
    );
  }
}
