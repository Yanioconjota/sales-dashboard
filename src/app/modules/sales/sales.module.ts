import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './components/demo/demo.component';
import { SalesRoutingModule } from './sales-routing.module';

const imports = [
  CommonModule,
  SalesRoutingModule
];

const components = [
  DemoComponent
];

@NgModule({
  declarations: [...components],
  imports: [...imports],
  exports: [...components]
})
export class SalesModule { }
