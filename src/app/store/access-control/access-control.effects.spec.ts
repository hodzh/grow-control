import { AccessControlEffects } from './access-control.effects';
import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { provideMockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, Subject } from 'rxjs';
import { DbService } from '../../services/storage/db.service';
import { AccessControlService } from '../../services/access-control/access-control.service';

describe('AccessControlEffects', () => {
  let effects: AccessControlEffects;
  let store: Store<any>;
  let actions: Actions;
  let actionsSource: Observable<any>;
  let accessControl: AccessControlService;
  let db: DbService;

  beforeEach(() => {
    actionsSource = new Subject<any>();
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        provideMockStore(),
        provideMockActions(actionsSource),
        { provide: AccessControlService, useValue: {} },
        { provide: DbService, useValue: {} },
        AccessControlEffects,
      ],
    });
    store = TestBed.get(Store);
    actions = TestBed.get(Actions);
    effects = TestBed.get(AccessControlEffects);
    accessControl = TestBed.get(AccessControlService);
    db = TestBed.get(DbService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
