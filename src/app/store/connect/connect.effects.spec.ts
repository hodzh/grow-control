import { ConnectEffects } from './connect.effects';
import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { provideMockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, Subject } from 'rxjs';
import { ConnectService } from '../../services/connect/connect.service';

describe('ConnectEffects', () => {
  let effects: ConnectEffects;
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
        { provide: ConnectService, useValue: {} },
        ConnectEffects,
      ],
    });
    store = TestBed.get(Store);
    actions = TestBed.get(Actions);
    effects = TestBed.get(ConnectEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
