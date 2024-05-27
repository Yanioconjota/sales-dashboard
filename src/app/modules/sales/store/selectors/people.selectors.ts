import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PeopleState } from '../sales.state';

export const selecPeopleState = createFeatureSelector<PeopleState>('people');

export const selectPeople = createSelector(
  selecPeopleState,
  (state: PeopleState) => state.people
);

export const selectPerson = createSelector(
  selecPeopleState,
  (state: PeopleState) => state.person
);

export const selectAuthError = createSelector(
  selecPeopleState,
  (state: PeopleState) => state.error
);

