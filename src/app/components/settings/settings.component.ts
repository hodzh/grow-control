import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent {
  links = [
    {
      route: ['/', 'settings', 'program'],
      title: 'Program',
      icon: 'cogs',
    },
    {
      route: ['/', 'settings', 'compote'],
      title: 'Compote',
      icon: 'cup-water',
    },
    {
      route: ['/', 'settings', 'timer'],
      title: 'Timer',
      icon: 'alarm',
    },
    {
      route: ['/', 'settings', 'schedule'],
      title: 'Schedule',
      icon: 'clock-outline',
    },
    {
      route: ['/', 'settings', 'pump'],
      title: 'Pump',
      icon: 'water-pump',
    },
    {
      route: ['/', 'settings', 'dose'],
      title: 'Dose',
      icon: 'eyedropper',
    },
    {
      route: ['/', 'settings', 'mixer'],
      title: 'Mixer',
      icon: 'pinwheel',
    },
    {
      route: ['/', 'settings', 'pin-assignment'],
      title: 'Pin Assignment',
      icon: 'chip',
    },
  ];

  constructor() {
  }
}
