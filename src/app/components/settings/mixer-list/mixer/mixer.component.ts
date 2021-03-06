import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Mixer} from '../../../../auto/struct';

@Component({
  selector: 'app-mixer',
  templateUrl: './mixer.component.html',
  styleUrls: ['./mixer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MixerComponent {
  @Input() mixer: Mixer;
  @Output() mixerChange = new EventEmitter<Mixer>();
  @Input() name: string;
  @Output() nameChange = new EventEmitter<string>();

  constructor() {
  }

  onChange(changes) {
    this.mixerChange.next({...this.mixer, ...changes});
  }

  onNameChange(name) {
    this.nameChange.next(name);
  }
}
