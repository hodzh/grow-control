import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageModule} from '../../shared/page/page.module';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { TestComponent } from './test.component';
import { TestRoutingModule } from './test-routing.module';
import { TestValveListModule } from './valve-list/test-valve-list.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { TestPumpListModule } from './pump-list/test-pump-list.module';

@NgModule({
  declarations: [TestComponent],
  exports: [TestComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    PageModule,
    TestRoutingModule,
    TestValveListModule,
    TestPumpListModule,
  ],
})
export class TestModule {
}
