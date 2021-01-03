import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-database-config',
  templateUrl: './database-config.component.html',
  styleUrls: ['./database-config.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatabaseConfigComponent implements OnInit {
  @Input() sizes;
  @Input() update;
  @Output() updateSizes = new EventEmitter<void>();
  @Output() clear = new EventEmitter<string[]>();
  selection = new SelectionModel<string>(true);

  constructor() { }

  ngOnInit() {
  }

  onClear() {
    this.clear.emit(this.selection.selected);
    this.selection.clear();
  }
}
