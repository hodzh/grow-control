import { DashboardEffects } from './dashboard.effects';
import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { provideMockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, Subject } from 'rxjs';

describe('DashboardEffects', () => {
  let effects: DashboardEffects;
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
        DashboardEffects,
      ],
    });
    store = TestBed.get(Store);
    actions = TestBed.get(Actions);
    effects = TestBed.get(DashboardEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
