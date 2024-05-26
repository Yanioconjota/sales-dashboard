import { createReducer, on } from "@ngrx/store";
import { initialPeopleState } from "../sales.state";
import { PeopleActions } from "../actions";

export const PeopleReducer = createReducer(
  initialPeopleState,
  // Load people with pagination and ordering
  on(PeopleActions.loadPeople, (state, { pageNumber, pageSize, orderBy }) => ({
    ...state,
    pageNumber,
    pageSize,
    orderBy,
    error: null
  })),

  // Set the people list
  on(PeopleActions.setPeople, (state, { people }) => ({
    ...state,
    people,
    error: null
  })),

  // Handles errors
  on(PeopleActions.setError, (state, { error }) => ({
    ...state,
    error: error
  })),
);
