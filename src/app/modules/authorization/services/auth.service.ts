import { Injectable } from '@angular/core';
import { AuthService as Auth0Service, User } from '@auth0/auth0-angular';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: Auth0Service, private readonly router: Router) { }

  handleCallback(): void {
    this.auth.handleRedirectCallback().subscribe({
      next: (result) => {
        console.log('Redirect success', result);
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error('Error handling redirect callback', error);
        this.router.navigate(['/']);
      }
    });
  }
  loginWithRedirect(): void {
    this.auth.loginWithRedirect();
  }

  logout(): void {
    this.auth.logout({ returnTo: window.location.origin });
  }

  isAuthenticated(): Observable<boolean> {
    return this.auth.isAuthenticated$;
  }

  userData(): Observable<User | null | undefined> {
    return this.auth.user$;
  }
}
