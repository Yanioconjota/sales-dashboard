import { createReducer, on } from "@ngrx/store";
import { initialAuthState } from "../auth.state";
import * as AuthActions from "../actions/auth.actions";

export const AuthReducer = createReducer(
  initialAuthState,
  // Sets the authentication status
  on(AuthActions.setAuthenticated, (state, { isAuthenticated }) => ({
    ...state,
    isAuthenticated: isAuthenticated,
    error: null
  })),

  // Updates the user data
  on(AuthActions.setUserData, (state, { userData }) => ({
    ...state,
    user: userData,
    error: null
  })),

  // Handles errors
  on(AuthActions.setError, (state, { error }) => ({
    ...state,
    error: error
  })),

  // Resets the Auth state when the user logs out
  on(AuthActions.logout, (state) => ({
    ...state,
    isAuthenticated: false,
    user: null
  })),
);
