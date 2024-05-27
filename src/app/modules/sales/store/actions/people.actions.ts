import { createAction, props } from "@ngrx/store";
import { PEOPLE_ACTION_SOURCE } from "../sales.state";
import { PersonDto } from "../../models/person.model";

export const loadPeople = createAction(`${PEOPLE_ACTION_SOURCE} Load People`, props<{ pageNumber?: number, pageSize?: number, orderBy?: string }>());
export const setPeople = createAction(`${PEOPLE_ACTION_SOURCE} Set People`, props<{ people: PersonDto[] }>());
export const setError = createAction(`${PEOPLE_ACTION_SOURCE} Set Error`, props<{ error: string }>());
export const loadPerson = createAction(`${PEOPLE_ACTION_SOURCE} Load Person`, props<{ id: number }>());
export const setPerson = createAction(`${PEOPLE_ACTION_SOURCE} Set Person`, props<{ person: PersonDto | null | undefined }>());
export const loadPeopleByName = createAction(`${PEOPLE_ACTION_SOURCE} Load Person By Name`, props<{ name: string }>());
export const setPeopleByName = createAction(`${PEOPLE_ACTION_SOURCE} Set Person By Name`, props<{ people: PersonDto[] | null | undefined }>());
export const updatePerson = createAction(`${PEOPLE_ACTION_SOURCE} Update Person`, props<{ id: number, person: PersonDto }>());
export const addPerson = createAction(`${PEOPLE_ACTION_SOURCE} Add Person`, props<{ person: PersonDto }>());
export const deletePerson = createAction(`${PEOPLE_ACTION_SOURCE} Delete Person`, props<{ id: number }>());
export const updatePersonSuccess = createAction(`${PEOPLE_ACTION_SOURCE} Update Person Success`, props<{ person: PersonDto }>());
export const addPersonSuccess = createAction(`${PEOPLE_ACTION_SOURCE} Add Person Success`, props<{ person: PersonDto }>());
export const deletePersonSuccess = createAction(`${PEOPLE_ACTION_SOURCE} Delete Person Success`, props<{ id: number }>());
