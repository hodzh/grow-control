import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Dose} from '../../../../auto/struct';

@Component({
  selector: 'app-dose',
  templateUrl: './dose.component.html',
  styleUrls: ['./dose.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoseComponent implements OnInit {
  @Input() dose: Dose;
  @Output() doseChange = new EventEmitter<Dose>();
  @Input() name: string;
  @Output() nameChange = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  onChange(changes) {
    this.doseChange.next({...this.dose, ...changes});
  }

  onNameChange(name) {
    this.nameChange.next(name);
  }
}
