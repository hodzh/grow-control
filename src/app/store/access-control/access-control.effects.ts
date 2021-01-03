import { Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { concat, defer, EMPTY, from, Observable, of, timer } from 'rxjs';
import {
  AccessControlActionTypes,
  ActionAccessControlAdd,
  ActionAccessControlUpdate,
  selectorAccessControlLastEpisode,
} from './access-control.reducer';
import {
  delay,
  distinctUntilKeyChanged,
  exhaustMap,
  filter,
  first,
  ignoreElements,
  map,
  mergeMap,
  repeat,
  switchMap,
  withLatestFrom,
} from 'rxjs/operators';
import { selectorConfigAccessControl } from '../config/config.reducer';
import { AccessControlService } from '../../services/access-control/access-control.service';
import { AccessControlConfig } from '../../model/access-control-config';
import { DbService } from '../../services/storage/db.service';

@Injectable()
export class AccessControlEffects {
  constructor(
    private readonly actions$: Actions<Action>,
    private readonly store: Store<any>,
    private readonly accessControl: AccessControlService,
    private readonly db: DbService,
  ) {
  }

  @Effect({ dispatch: true })
  init(): Observable<Action> {
    return this.actions$.pipe(ofType(AccessControlActionTypes.INIT))
      .pipe(switchMap(() => concat(
        from(this.db.getAccessControlEpisode()).pipe(map(items => new ActionAccessControlUpdate(items))),
        this.store.pipe(select(selectorConfigAccessControl), distinctUntilKeyChanged('enable'))
          .pipe(switchMap(config => config.enable ?
            concat(this.stop(), this.start(config), this.process(config)) : this.stop(),
          )),
      )))
      ;
  }

  @Effect({ dispatch: false })
  add(): Observable<any> {
    return this.actions$
      .pipe(ofType<ActionAccessControlAdd>(AccessControlActionTypes.ADD))
      .pipe(withLatestFrom(this.store.pipe(select(selectorAccessControlLastEpisode))))
      .pipe(mergeMap(([action, episode]) =>
        from(this.db.logAccessControl(episode.key, action.payload))))
      ;
  }

  private start(config: AccessControlConfig): Observable<never> {
    return concat(
      this.accessControl.state$.pipe(filter(state => state === 'idle'), first()),
      defer(() => this.accessControl.start(config)),
    ).pipe(ignoreElements());
  }

  private stop(): Observable<never> {
    return concat(
      this.accessControl.state$.pipe(filter(state => state === 'idle'), first()),
      defer(() => this.accessControl.stop()),
    ).pipe(ignoreElements());
  }

  private process(config: AccessControlConfig): Observable<Action> {
    return defer(() => of(Date.now())).pipe(switchMap(date =>
      defer(() => this.accessControl.process()).pipe(switchMap(result => {
        const ms = Math.max(1000 / config.fps - (Date.now() - date), 30);
        return concat(
          result ? of(new ActionAccessControlAdd({
            key: date,
            value: {
              processTime: Date.now() - date,
              image: this.accessControl.getImage(),
            },
          })) : EMPTY,
          of(1).pipe(delay(ms), ignoreElements()),
        );
      })),
    ), repeat());
  }

  private process2(config: AccessControlConfig): Observable<Action> {
    return timer(0, 1000 / config.fps)
      .pipe(exhaustMap(() => defer(() => of(Date.now()))
        .pipe(switchMap(date => defer(() => this.accessControl.process())
          .pipe(switchMap(result => {
            return result ? of(new ActionAccessControlAdd({
              key: date,
              value: {
                processTime: Date.now() - date,
                image: this.accessControl.getImage(),
              },
            })) : EMPTY;
          })),
        ))));
  }
}
