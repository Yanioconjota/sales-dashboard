import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthModule } from '@auth0/auth0-angular';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    AuthModule.forRoot({
      domain:  process.env.AUTH0_ISSUER_BASE_URL || '',
      clientId: process.env.AUTH0_CLIENT_ID || '',
      redirectUri: `${window.location.origin}/callback`
    }),
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthorizationModule { }
