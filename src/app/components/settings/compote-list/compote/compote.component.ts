import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import { Compote, CompoteDaily } from '../../../../auto/struct';
import {Dose} from '../../../../auto/struct';

@Component({
  selector: 'app-compote',
  templateUrl: './compote.component.html',
  styleUrls: ['./compote.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompoteComponent {
  @Input() compote: Compote;
  @Input() name: string;
  @Input() soils: Dose[];
  @Output() compoteChange = new EventEmitter<Compote>();
  @Output() compoteDailyChange = new EventEmitter<{index: number, value: CompoteDaily}>();
  @Output() nameChange = new EventEmitter<string>();
  @Output() add = new EventEmitter<void>();

  constructor() {
  }

  onChange(changes) {
    this.compoteChange.next({...this.compote, ...changes});
  }

  onNameChange(name) {
    this.nameChange.next(name);
  }

  onDailyChange(index, value) {
    this.compoteDailyChange.next({index, value});
  }

  onAdd() {
    this.add.emit();
  }

  trackByIndex(index) {
    return index;
  }
}
