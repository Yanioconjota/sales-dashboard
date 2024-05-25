import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesGuard } from './services/sales.guard';
import { DemoComponent } from './components/demo/demo.component';

const routes: Routes = [
  {
    path: '',
    component: DemoComponent,
    canActivate: [SalesGuard],
    //resolve: { user: UserResolver }
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
