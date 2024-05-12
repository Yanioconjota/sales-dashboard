import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './components/demo/demo.component';



@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DemoComponent
  ]
})
export class SalesModule { }
