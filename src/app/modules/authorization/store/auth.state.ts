import { User } from "@auth0/auth0-angular";

export const AUTH_ACTION_SOURCE = '[Auth]';

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null | undefined;
  error: string | null;
}

export const initialAuthState: AuthState = {
  isAuthenticated: false,
  user: null,
  error: null
};
