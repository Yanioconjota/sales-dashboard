import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesGuard } from './modules/sales/services/sales.guard';
import { DemoComponent } from './modules/sales/components/demo/demo.component';
import { CallbackComponent } from './modules/authorization/components/callback/callback.component';
import { LandingComponent } from './modules/landing/components/landing/landing.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'callback', component: CallbackComponent },
  { path: 'user', loadChildren: () => import('./modules/authorization/authorization.module').then(m => m.AuthorizationModule) },
  { path: 'sales', component: DemoComponent, canActivate: [SalesGuard]},
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
