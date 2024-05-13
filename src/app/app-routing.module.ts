import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './modules/authorization/services/auth.guard';
import { LoginComponent } from './modules/authorization/components/login/login.component';
import { RegisterComponent } from './modules/authorization/components/register/register.component';
import { DemoComponent } from './modules/sales/components/demo/demo.component';
import { CallbackComponent } from './modules/authorization/components/callback/callback.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'sales' ,component: DemoComponent, canActivate: [AuthGuard]},
  { path: 'callback', component: CallbackComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
