import {Component} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {
  ActionSettingsAddCompote,
  ActionSettingsAddProgram,
  ActionSettingsInit,
  ActionSettingsSync,
  selectorSettingsSync
} from './store/settings/settings.reducer';
import {ActionConfigInit} from './store/config/config.reducer';
import {ActivatedRoute, ActivationStart, Router, UrlSegment} from '@angular/router';
import {Observable} from 'rxjs';
import {filter, map, take} from 'rxjs/operators';
import {ActionConnectConnect, ActionConnectDisconnect, selectorConnectStatus} from './store/connect/connect.reducer';
import {ConnectStatus} from './model/connect-status';
import {ActionDashboardInit} from './store/dashboard/dashboard.reducer';
import {ActionLogInit} from './store/log/log.reducer';
import {ActionAccessControlInit} from './store/access-control/access-control.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  pageOptions$: Observable<any>;
  btStatus$: Observable<ConnectStatus>;
  sync$: Observable<boolean>;

  constructor(
    private readonly store: Store<any>,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
  ) {
    this.pageOptions$ = this.router.events
      .pipe(filter(event => event instanceof ActivationStart))
      .pipe(map(event => (event as ActivationStart).snapshot.data))
    ;
    this.btStatus$ = this.store.pipe(select(selectorConnectStatus));
    this.sync$ = this.store.pipe(select(selectorSettingsSync));
    this.store.dispatch(new ActionSettingsInit());
    this.store.dispatch(new ActionConfigInit());
    this.store.dispatch(new ActionDashboardInit());
    this.store.dispatch(new ActionLogInit());
    this.store.dispatch(new ActionAccessControlInit());
  }

  onBack() {
    const route = this.getRoute();
    const pathFromRoot = route.snapshot.pathFromRoot;
    pathFromRoot.pop();
    const segments = pathFromRoot.map(p => p.url).reduce((p, v) => [...p, ...v], []);
    const path = ['/', ...segments.map((p: UrlSegment) => p.path)];
    this.router.navigate(path);
  }

  onAdd() {
    const route = this.getRoute();
    switch (route.routeConfig.path) {
      case 'compote':
        this.store.dispatch(new ActionSettingsAddCompote());
        break;
      case 'program':
        this.store.dispatch(new ActionSettingsAddProgram());
        break;
    }
  }

  onBt() {
    this.store.pipe(select(selectorConnectStatus))
      .pipe(take(1))
      .subscribe(status => {
        if (status === ConnectStatus.DISCONNECTED) {
          this.store.dispatch(new ActionConnectConnect());
        } else if (status === ConnectStatus.CONNECTED) {
          this.store.dispatch(new ActionConnectDisconnect());
        }
      });
  }

  onSync() {
    this.store.dispatch(new ActionSettingsSync());
  }

  private getRoute() {
    let route = this.activatedRoute.firstChild;
    let child = route;
    while (child) {
      if (child.firstChild) {
        child = child.firstChild;
        route = child;
      } else {
        child = null;
      }
    }
    return route;
  }
}
