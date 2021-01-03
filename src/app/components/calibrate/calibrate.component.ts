import {ChangeDetectionStrategy, Component} from '@angular/core';
import {deviceConfig, PumpType} from '../../model/device-config';

@Component({
  selector: 'app-calibrate',
  templateUrl: './calibrate.component.html',
  styleUrls: ['./calibrate.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalibrateComponent {
  links = [
    ...new Array(deviceConfig.pumpCount).fill(0).map((_, index) => ({
      route: ['/', 'calibrate', 'pump', '' + index],
      title: `Pump ${PumpType[index]}`,
      icon: index === PumpType.in ? 'water-pump' : 'fountain',
    })),
    ...new Array(deviceConfig.doseCount).fill(0).map((_, index) => ({
      route: ['/', 'calibrate', 'dose', '' + index],
      title: `Dose ${index + 1}`,
      icon: 'eyedropper',
    })),
  ];

  constructor() {
  }
}
