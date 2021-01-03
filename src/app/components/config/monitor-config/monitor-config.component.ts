import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {MonitorConfig} from '../../../store/config/config.reducer';

@Component({
  selector: 'app-monitor-config',
  templateUrl: './monitor-config.component.html',
  styleUrls: ['./monitor-config.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MonitorConfigComponent {
  @Input() config: MonitorConfig;
  @Output() configChange = new EventEmitter<MonitorConfig>();

  constructor() {
  }

  onChange(changes) {
    this.configChange.emit({...this.config, ...changes});
  }
}
