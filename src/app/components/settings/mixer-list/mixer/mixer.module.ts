import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MixerComponent} from './mixer.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [MixerComponent],
  exports: [MixerComponent],
  imports: [CommonModule, MatFormFieldModule, MatInputModule],
})
export class MixerModule {
}
