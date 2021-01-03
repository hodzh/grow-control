import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {CompoteDaily} from '../../../../auto/struct';
import {Dose} from '../../../../auto/struct';

@Component({
  selector: 'app-compote-daily',
  templateUrl: './compote-daily.component.html',
  styleUrls: ['./compote-daily.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompoteDailyComponent {
  @Input() compoteDaily: CompoteDaily;
  @Output() compoteDailyChange = new EventEmitter<CompoteDaily>();
  @Input() soils: Dose[];

  constructor() {
  }

  onChange(changes) {
    this.compoteDailyChange.next({...this.compoteDaily, ...changes});
  }

  onDoseChange(index, value) {
    const dose = this.compoteDaily.dose.slice(0);
    dose[index] = value;
    this.onChange({dose});
  }

  trackByIndex(index) {
    return index;
  }
}
