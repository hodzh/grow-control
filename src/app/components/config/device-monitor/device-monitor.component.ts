import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DeviceMonitor} from '../../../store/config/config.reducer';

@Component({
  selector: 'app-device-monitor',
  templateUrl: './device-monitor.component.html',
  styleUrls: ['./device-monitor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeviceMonitorComponent implements OnInit {
  @Input() config: DeviceMonitor;
  @Output() configChange = new EventEmitter<DeviceMonitor>();

  constructor() {
  }

  ngOnInit() {
  }

  onChange(changes) {
    this.configChange.emit({...this.config, ...changes});
  }
}
