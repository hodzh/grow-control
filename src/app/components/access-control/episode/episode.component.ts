import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input} from '@angular/core';
import {DbAccessControlEpisode, DbService} from '../../../services/storage/db.service';
import {BehaviorSubject, from} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EpisodeComponent {
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
}
