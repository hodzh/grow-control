import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {
  ActionConfigChange, ActionConfigClearDatabase,
  ActionConfigSetDevice,
  ActionConfigUpdateDatabaseSize,
  ConfigState,
  DatabaseSize,
  MonitorConfig,
  selectorConfig,
  selectorConfigAccessControl,
  selectorDatabaseSizes,
  selectorMonitorConfig,
  selectorUpdateDatabaseSizes,
} from '../../store/config/config.reducer';
import {from, Observable} from 'rxjs';
import {AccessControlConfig} from '../../model/access-control-config';
import {DEVICE_CONNECT} from '../../platform/device-connect';
import {ConnectService} from '../../services/connect/connect.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigComponent implements OnInit {
  config$: Observable<ConfigState>;
  databaseSizes$: Observable<DatabaseSize[]>;
  updateDatabaseSizes$: Observable<boolean>;
  monitor$: Observable<MonitorConfig>;
  accessControl$: Observable<AccessControlConfig>;

  constructor(
    private readonly store: Store<any>,
    @Inject(DEVICE_CONNECT) private readonly connectService: ConnectService,
  ) {
  }

  ngOnInit() {
    this.config$ = this.store.pipe(select(selectorConfig));
    this.updateDatabaseSizes$ = this.store.pipe(select(selectorUpdateDatabaseSizes));
    this.databaseSizes$ = this.store.pipe(select(selectorDatabaseSizes));
    this.monitor$ = this.store.pipe(select(selectorMonitorConfig));
    this.accessControl$ = this.store.pipe(select(selectorConfigAccessControl));
    this.store.dispatch(new ActionConfigUpdateDatabaseSize());
  }

  selectDevice() {
    from(this.connectService.discover())
      .subscribe(device => {
        if (device?.length) {
          this.store.dispatch(new ActionConfigSetDevice(device[0]));
        }
      });
  }

  updateDb() {
    this.store.dispatch(new ActionConfigUpdateDatabaseSize());
  }

  clearDb(names) {
    this.store.dispatch(new ActionConfigClearDatabase(names));
  }

  onChange(changes) {
    this.store.dispatch(new ActionConfigChange(changes));
  }
}
