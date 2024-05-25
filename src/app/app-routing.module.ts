import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './modules/authorization/services/auth.guard';
import { SalesGuard } from './modules/sales/services/sales.guard';
import { LoginComponent } from './modules/authorization/components/login/login.component';
import { RegisterComponent } from './modules/authorization/components/register/register.component';
import { DemoComponent } from './modules/sales/components/demo/demo.component';
import { CallbackComponent } from './modules/authorization/components/callback/callback.component';
import { LandingComponent } from './modules/landing/components/landing/landing.component';
import { UserComponent } from './modules/authorization/components/user/user.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'callback', component: CallbackComponent },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard]},
  { path: 'sales', component: DemoComponent, canActivate: [SalesGuard]},
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
