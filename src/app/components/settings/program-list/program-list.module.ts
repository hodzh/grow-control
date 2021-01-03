import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProgramListComponent} from './program-list.component';
import {ProgramModule} from './program/program.module';
import {SettingsStoreModule} from '../../../store/settings/settings-store.module';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [ProgramListComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    SettingsStoreModule,
    ProgramModule,
  ],
})
export class ProgramListModule {
}
