import { Injectable } from "@angular/core";
import { User } from "@auth0/auth0-angular";
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as AuthActions from "../actions/auth.actions";
import { of } from "rxjs";
import { AuthService } from "../../services/auth.service";

@Injectable()

export class AuthEffects {
  constructor(public authService: AuthService, private actions$: Actions,) {}

  checkAuthentication$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.checkAuthentication),
      mergeMap(() =>
        this.authService.isAuthenticated().pipe(
          map(isAuthenticated =>
            AuthActions.setAuthenticated({ isAuthenticated })
          ),
          catchError(() => of(AuthActions.setError({ error: 'Failed to check authentication' })))
        )
      )
    )
  );

  loadUserData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loadUserData),
      mergeMap(() =>
        this.authService.userData().pipe(
          map(userData =>
            AuthActions.setUserData({ userData })
          ),
          catchError(() => of(AuthActions.setError({ error: 'Failed to load user data' })))
        )
      )
    )
  );
}
