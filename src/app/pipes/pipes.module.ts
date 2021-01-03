import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimesPipe } from './times.pipe';
import { DateTimePipe } from './date-time.pipe';
import { MemoryPipe } from './memory.pipe';

@NgModule({
  declarations: [TimesPipe, DateTimePipe, MemoryPipe],
  exports: [TimesPipe, DateTimePipe, MemoryPipe],
  imports: [
    CommonModule,
  ],
})
export class PipesModule {
}
