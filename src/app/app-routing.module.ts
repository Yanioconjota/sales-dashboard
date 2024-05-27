import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallbackComponent } from './modules/authorization/components/callback/callback.component';
import { LandingComponent } from './modules/landing/components/landing/landing.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/sales/people', pathMatch: 'full' },
  { path: '', component: LandingComponent },
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
