import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesGuard } from './services/sales.guard';
import { SalesComponent } from './components/sales/sales.component';
import { PersonComponent } from './components/person/person.component';
import { PeopleComponent } from './components/people/people.component';

const routes: Routes = [
  {
    path: '',
    component: SalesComponent,
    canActivate: [SalesGuard],
    //resolve: { user: UserResolver }
  },
  {
    path: 'people',
    component: PeopleComponent,
    canActivate: [SalesGuard]
  },
  {
    path: 'person/:id',
    component: PersonComponent,
    canActivate: [SalesGuard]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
