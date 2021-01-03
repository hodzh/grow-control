import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-camshots',
  templateUrl: './camshots.component.html',
  styleUrls: ['./camshots.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CamshotsComponent {
  @Input() keys;

  constructor() { }

  trackByKey(index, key) {
    return key;
  }
}
