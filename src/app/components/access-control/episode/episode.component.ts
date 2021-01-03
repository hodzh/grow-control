import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {DbAccessControlEpisode, DbService} from '../../../services/storage/db.service';
import {BehaviorSubject, from, Subject} from 'rxjs';
import {switchMap, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EpisodeComponent implements OnInit {
  @Input() set episode(value: DbAccessControlEpisode) {
    this.episodeSubject.next(value);
  }
  get episode(): DbAccessControlEpisode {
    return this.episodeSubject.value;
  }
  episodeKeys;
  private episodeSubject = new BehaviorSubject<DbAccessControlEpisode>(null);

  constructor(
   db: DbService,
   cd: ChangeDetectorRef,
  ) {
    this.episodeSubject.pipe(switchMap(episode =>
      from(db.getAccessControlEpisodeKeys(episode))
        // .pipe(startWith([]))
    ))
      .subscribe(keys => {
        this.episodeKeys = keys;
        cd.markForCheck();
      });
  }

  ngOnInit() {
  }
}
