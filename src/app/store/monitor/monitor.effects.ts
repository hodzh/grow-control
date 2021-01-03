import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { from, merge, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ActionMonitorUpdateFlow, ActionMonitorUpdateTemp, MonitorActionTypes } from './monitor.reducer';
import { DbService } from '../../services/storage/db.service';

@Injectable()
export class MonitorEffects {
  constructor(
    private readonly actions$: Actions<Action>,
    private readonly store: Store<any>,
    private readonly db: DbService,
  ) {
  }

  @Effect({ dispatch: true })
  init(): Observable<Action> {
    return this.actions$.pipe(ofType(MonitorActionTypes.INIT))
      .pipe(switchMap(() => merge(
        from(this.db.getTemp())
          .pipe(map(data => new ActionMonitorUpdateTemp(data))),
        from(this.db.getFlow())
          .pipe(map(data => new ActionMonitorUpdateFlow(data))),
      )))
      ;
  }
}
