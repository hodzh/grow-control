import { LogEffects } from './log.effects';
import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { provideMockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, Subject } from 'rxjs';

describe('LogEffects', () => {
  let effects: LogEffects;
  let store: Store<any>;
  let actions: Actions;
  let actionsSource: Observable<any>;

  beforeEach(() => {
    actionsSource = new Subject<any>();
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        provideMockStore(),
        provideMockActions(actionsSource),
        LogEffects,
      ],
    });
    store = TestBed.get(Store);
    actions = TestBed.get(Actions);
    effects = TestBed.get(LogEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
