import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AccessControlConfig} from '../../../model/access-control-config';

@Component({
  selector: 'app-access-control-config',
  templateUrl: './access-control-config.component.html',
  styleUrls: ['./access-control-config.component.scss'],
})
export class AccessControlConfigComponent implements OnInit {
  @Input() accessControl: AccessControlConfig;
  @Output() accessControlChange = new EventEmitter<AccessControlConfig>();

  constructor() {
  }

  ngOnInit() {
  }

  onChange(changes) {
    this.accessControlChange.emit({...this.accessControl, ...changes});
  }
}
