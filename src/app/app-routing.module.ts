import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallbackComponent } from './modules/authorization/components/callback/callback.component';
import { LandingComponent } from './modules/landing/components/landing/landing.component';
import { UserComponent } from './modules/authorization/components/user/user.component';
import { PeopleComponent } from './modules/sales/components/people/people.component';

const routes: Routes = [
  // { path: '', component: LandingComponent },
  { path: '', component: PeopleComponent },
  { path: 'callback', component: CallbackComponent },
  { path: 'user', loadChildren: () => import('./modules/authorization/authorization.module').then(m => m.AuthorizationModule) },
  { path: 'sales', loadChildren: () => import('./modules/sales/sales.module').then(m => m.SalesModule)},
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
