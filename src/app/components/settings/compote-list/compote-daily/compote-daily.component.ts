import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CompoteDaily} from '../../../../auto/struct';
import {Dose} from '../../../../auto/struct';

@Component({
  selector: 'app-compote-daily',
  templateUrl: './compote-daily.component.html',
  styleUrls: ['./compote-daily.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompoteDailyComponent implements OnInit {
  @Input() compoteDaily: CompoteDaily;
  @Output() compoteDailyChange = new EventEmitter<CompoteDaily>();
  @Input() soils: Dose[];

  constructor() {
  }

  ngOnInit() {
  }

  onChange(changes) {
    this.compoteDailyChange.next({...this.compoteDaily, ...changes});
  }

  onDoseChange(index, value) {
    const dose = this.compoteDaily.dose.slice(0);
    dose[index] = value;
    this.onChange({dose});
  }

  trackByIndex(index, item) {
    return index;
  }
}
