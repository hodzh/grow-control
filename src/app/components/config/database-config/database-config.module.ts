import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatabaseConfigComponent } from './database-config.component';
import {PipesModule} from '../../../pipes/pipes.module';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [DatabaseConfigComponent],
  exports: [DatabaseConfigComponent],
  imports: [
    CommonModule,
    PipesModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatButtonModule,
  ]
})
export class DatabaseConfigModule { }
