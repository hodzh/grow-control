import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageModule} from '../../shared/page/page.module';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { TestComponent } from './test.component';
import { TestRoutingModule } from './test-routing.module';
import { ValveListModule } from './valve-list/valve-list.module';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [TestComponent],
  exports: [TestComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    TestRoutingModule,
    PageModule,
    ValveListModule,
  ],
})
export class TestModule {
}
