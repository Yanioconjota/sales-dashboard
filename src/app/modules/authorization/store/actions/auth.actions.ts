import { createAction, props } from "@ngrx/store";
import { AUTH_ACTION_SOURCE } from "../auth.state";
import { User } from "@auth0/auth0-angular";

export const loadUserData = createAction(`${AUTH_ACTION_SOURCE} Load User Data`);
export const setUserData = createAction(`${AUTH_ACTION_SOURCE} Set User Data`, props<{ userData: User | null | undefined }>());
export const setError = createAction(`${AUTH_ACTION_SOURCE} Set Error`, props<{ error: string }>());
export const checkAuthentication = createAction(`${AUTH_ACTION_SOURCE} Check Authentication`);
export const setAuthenticated = createAction(`${AUTH_ACTION_SOURCE} Set Authenticated`, props<{ isAuthenticated: boolean }>());
export const logout = createAction(`${AUTH_ACTION_SOURCE} Logout`);
