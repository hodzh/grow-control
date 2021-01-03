import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {
  ActionSettingsChangeMixer,
  ActionSettingsChangeName, ActionSettingsLoadDose, ActionSettingsLoadMixer,
  ActionSettingsRemoveMixer,
  selectorMixers,
  selectorNames,
} from '../../../store/settings/settings.reducer';
import {Observable} from 'rxjs';
import {Mixer} from '../../../auto/struct';

@Component({
  selector: 'app-mixer-list',
  templateUrl: './mixer-list.component.html',
  styleUrls: ['./mixer-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MixerListComponent implements OnInit {
  mixers$: Observable<Mixer[]>;
  names$: Observable<string[]>;

  constructor(
    private readonly store: Store<any>,
  ) {
    this.mixers$ = this.store.pipe(select(selectorMixers));
    this.names$ = this.store.pipe(select(selectorNames('mixer')));
  }

  ngOnInit() {
    this.store.dispatch(new ActionSettingsLoadMixer());
  }

  onNameChange(index, value) {
    this.store.dispatch(new ActionSettingsChangeName({key: 'mixer', index, value}));
  }

  onChange(index, value) {
    this.store.dispatch(new ActionSettingsChangeMixer({index, value}));
  }

  onRemove(index) {
    this.store.dispatch(new ActionSettingsRemoveMixer(index));
  }

  trackByIndex(index, item) {
    return index;
  }
}
