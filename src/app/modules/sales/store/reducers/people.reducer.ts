import { createReducer, on } from "@ngrx/store";
import { initialPeopleState } from "../sales.state";
import { PeopleActions } from "../actions";

export const PeopleReducer = createReducer(
  initialPeopleState,

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

  // Load a single person by ID
  on(PeopleActions.setPerson, (state, { person }) => ({
    ...state,
    person,
    error: null
  })),

  // Load a people by name
  on(PeopleActions.setPeopleByName, (state, { people }) => ({
    ...state,
    people,
    error: null
  })),

  on(PeopleActions.updatePersonSuccess, (state, { person }) => {
    const updatedPeople = state.people ? state.people.map(p => {
      if (p.businessEntityId === person.businessEntityId) {
        return person; // Replace the person with the updated one
      }
      return p; // Return unchanged person
    }) : null;

    return {
      ...state,
      person,
      people: updatedPeople, // Update the people list
      error: null
    };
  }),


  on(PeopleActions.addPersonSuccess, (state, { person }) => ({
    ...state,
    person,
    error: null
  })),

  on(PeopleActions.deletePersonSuccess, (state, { id }) => ({
    ...state,
    people: state.people?.filter(p => p.businessEntityId !== id),
    error: null
  }))
);
