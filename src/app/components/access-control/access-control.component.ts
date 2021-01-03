import {Component, OnInit} from '@angular/core';
import {selectorAccessControlItems} from '../../store/access-control/access-control.reducer';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {DbAccessControlEpisode} from '../../services/storage/db.service';

@Component({
  selector: 'app-access-control',
  templateUrl: './access-control.component.html',
  styleUrls: ['./access-control.component.scss'],
})
export class AccessControlComponent implements OnInit {
  log$: Observable<DbAccessControlEpisode[]>;

  constructor(
    private readonly store: Store<any>,
  ) {
    this.log$ = this.store.pipe(select(selectorAccessControlItems));
  }

  ngOnInit() {
  }

  trackByKey(index, item) {
    return item.key;
  }
}
