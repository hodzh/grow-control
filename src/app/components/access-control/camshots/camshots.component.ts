import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-camshots',
  templateUrl: './camshots.component.html',
  styleUrls: ['./camshots.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CamshotsComponent implements OnInit {
  @Input() keys;

  constructor() { }

  ngOnInit() {
  }

  trackByKey(index, key) {
    return key;
  }
}
