import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesGuard } from './services/sales.guard';
import { SalesComponent } from './components/sales/sales.component';
import { PeopleComponent } from './components/people/people.component';
import { PeopleResolver } from './resolvers/people.resolver';

const routes: Routes = [
  {
    path: '',
    component: SalesComponent,
    canActivate: [SalesGuard],
  },
  {
    path: 'people',
    component: PeopleComponent,
    canActivate: [SalesGuard],
    resolve: { people: PeopleResolver }
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
