import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ConnectStatus } from '../../model/connect-status';

type PageActions = 'add' | 'back' | 'menu' | 'bt' | 'sync';

interface PageOptions {
  title: string;
  actions: PageActions[];
}

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageComponent {
  @Input() options: PageOptions;
  @Input() title: PageOptions;
  @Input() btStatus: ConnectStatus;
  @Input() syncStatus: boolean;
  @Output() back = new EventEmitter();
  @Output() add = new EventEmitter();
  @Output() sync = new EventEmitter();
  @Output() bt = new EventEmitter();
  links = [
    {
      route: ['/'],
      title: 'Dashboard',
      icon: 'view-dashboard',
    },
    {
      route: ['/', 'settings'],
      title: 'Settings',
      icon: 'cog-outline',
    },
    {
      route: ['/', 'monitor'],
      title: 'Monitor',
      icon: 'chart-bar',
    },
    {
      route: ['/', 'calibrate'],
      title: 'Calibrate',
      icon: 'gauge',
    },
    {
      route: ['/', 'manual-control'],
      title: 'Manual control',
      icon: 'cursor-pointer',
    },
    {
      route: ['/', 'access-control'],
      title: 'Access control',
      icon: 'webcam',
    },
    {
      route: ['/', 'log'],
      title: 'Log',
      icon: 'format-list-bulleted',
    },
    {
      route: ['/', 'config'],
      title: 'Config',
      icon: 'cellphone-settings',
    },
    {
      route: ['/', 'test'],
      title: 'Test',
      icon: 'cursor-pointer',
    },
    {
      route: ['/', 'dev'],
      title: 'Development',
      icon: 'dev-to',
    },
  ];

  constructor() {
  }

  get showMenu(): boolean {
    return (
      this.options &&
      this.options.actions &&
      this.options.actions.includes('menu')
    );
  }

  get showAdd(): boolean {
    return (
      this.options &&
      this.options.actions &&
      this.options.actions.includes('add')
    );
  }

  get showBack(): boolean {
    return (
      this.options &&
      this.options.actions &&
      this.options.actions.includes('back')
    );
  }

  get showSync(): boolean {
    return (
      this.options &&
      this.options.actions &&
      this.options.actions.includes('sync') &&
      this.syncStatus
    );
  }

  get showBt(): boolean {
    return (
      this.options &&
      this.options.actions &&
      this.options.actions.includes('bt')
    );
  }

  onBack() {
    this.back.next();
  }

  onAdd() {
    this.add.next();
  }

  onSync() {
    this.sync.next();
  }

  onBt() {
    this.bt.next();
  }
}
