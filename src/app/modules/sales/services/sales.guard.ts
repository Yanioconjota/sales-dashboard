import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers/index.reducer';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SalesGuard implements CanActivate {
  constructor(private readonly store: Store<AppState>) { }

  canActivate(): Observable<boolean> {
    return this.store.select(state => state.auth.isAuthenticated).pipe(
      map(isAuthenticated => {
        if (!isAuthenticated) {
          console.log('User is not authenticated');
          return false;
        }
        return true;
      })
    )
  }

}
