import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-pin-select',
  templateUrl: './pin-select.component.html',
  styleUrls: ['./pin-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PinSelectComponent {
  @Input() pins: number[];
  @Input() allPins: number[];
  @Input() title: string;
  @Output() pinChange = new EventEmitter<{ index: number, value: number }>();

  constructor() {
  }

  onChange(index: number, value: number) {
    this.pinChange.next({index, value});
  }

  trackByValue(index: number, value: any): any {
    return value;
  }
}
