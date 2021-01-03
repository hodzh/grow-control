import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pin-select',
  templateUrl: './pin-select.component.html',
  styleUrls: ['./pin-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PinSelectComponent implements OnInit {
  @Input() pins: number[];
  @Input() allPins: number[];
  @Input() title: string;
  @Output() pinChange = new EventEmitter<{ index: number, value: number }>();

  constructor() {
  }

  ngOnInit() {
  }

  onChange(index: number, value: number) {
    this.pinChange.next({index, value});
  }

  trackByValue(index: number, value: any): any {
    return value;
  }
}
