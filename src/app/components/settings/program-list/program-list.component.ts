import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Program} from '../../../auto/struct';
import {select, Store} from '@ngrx/store';
import {
  ActionSettingsChangeName,
  ActionSettingsChangeProgram, ActionSettingsLoadProgram,
  ActionSettingsRemoveProgram,
  selectorNames,
  selectorPrograms,
} from '../../../store/settings/settings.reducer';
import {deviceConfig} from '../../../model/device-config';

@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgramListComponent implements OnInit, OnDestroy {
  programs$: Observable<Program[]>;
  compotes$: Observable<string[]>;
  names$: Observable<string[]>;
  valves: number[];
  private destroy$ = new Subject<void>();

  constructor(
    private readonly store: Store<any>,
  ) {
    this.programs$ = this.store.pipe(select(selectorPrograms));
    this.compotes$ = this.store.pipe(select(selectorNames('compote')));
    this.names$ = this.store.pipe(select(selectorNames('program')));
    this.valves = new Array(deviceConfig.valveCount);
    for (let i = 0; i < deviceConfig.valveCount; i++) {
      this.valves[i] = i + 1;
    }
  }

  ngOnInit() {
    this.store.dispatch(new ActionSettingsLoadProgram());
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  onNameChange(index, value) {
    this.store.dispatch(new ActionSettingsChangeName({key: 'program', index, value}));
  }

  onChange(index, value) {
    this.store.dispatch(new ActionSettingsChangeProgram({index, value}));
  }

  onRemove(index) {
    this.store.dispatch(new ActionSettingsRemoveProgram(index));
  }

  trackByIndex(index, item) {
    return index;
  }
}
