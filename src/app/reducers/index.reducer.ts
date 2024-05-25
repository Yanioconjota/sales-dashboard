import { ActionReducerMap } from "@ngrx/store";
import { AuthState } from "../modules/authorization/store/auth.state";
import { authReducer } from "../modules/authorization/store/reducers/auth.reducer";

export interface AppState {
  auth: AuthState;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
};
