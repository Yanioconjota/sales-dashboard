import { ActionReducerMap } from "@ngrx/store";
import { AuthState } from "../modules/authorization/store/auth.state";
import { AuthReducer } from "../modules/authorization/store/reducers/auth.reducer";
import { PeopleState } from "../modules/sales/store/sales.state";
import { PeopleReducer } from "../modules/sales/store/reducers/people.reducer";

export interface AppState {
  auth: AuthState;
  people: PeopleState;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: AuthReducer,
  people: PeopleReducer
};
