import { Injectable, HostListener } from '@angular/core';
import { AuthService as Auth0Service, User } from '@auth0/auth0-angular';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers/index.reducer';
import * as AuthActions from 'src/app/modules/authorization/store/actions/auth.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public auth: Auth0Service,
    private readonly router: Router,
    private readonly store: Store<AppState>) {
    this.setupBeforeUnloadListener();
  }

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
    this.store.dispatch(AuthActions.logout());
  }

  isAuthenticated(): Observable<boolean> {
    return this.auth.isAuthenticated$;
  }

  userData(): Observable<User | null | undefined> {
    return this.auth.user$;
  }

  @HostListener('window:beforeunload')
  onBeforeUnload() {
    this.logout();
  }

  private setupBeforeUnloadListener() {
    window.addEventListener('beforeunload', this.onBeforeUnload.bind(this));
  }
}
