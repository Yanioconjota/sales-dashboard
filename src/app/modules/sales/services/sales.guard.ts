import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers/index.reducer';
import { map } from 'rxjs/operators';
import * as AuthActions from 'src/app/modules/authorization/store/actions/auth.actions';

@Injectable({
  providedIn: 'root'
})
export class SalesGuard implements CanActivate {
  constructor(private readonly store: Store<AppState>, private router: Router) {
    this.store.dispatch(AuthActions.checkAuthentication());
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.store.select(state => state.auth.isAuthenticated).pipe(
      map(isAuthenticated => {
        if (!isAuthenticated && state.url !== '/') {
          console.log('User is not authenticated');
          return this.router.parseUrl('/');
        }
        return true;
      })
    );
  }
}
