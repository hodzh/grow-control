import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import {PageModule} from '../../shared/page/page.module';
import { TestComponent } from './test.component';
import { TestRoutingModule } from './test-routing.module';
import { TestValveListModule } from './valve-list/test-valve-list.module';
import { TestPumpListModule } from './pump-list/test-pump-list.module';
import { TestDoseListModule } from './dose-list/test-dose-list.module';
import { TestMixerListModule } from './mixer-list/test-mixer-list.module';

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
    TestDoseListModule,
    TestMixerListModule,
  ],
})
export class TestModule {
}
