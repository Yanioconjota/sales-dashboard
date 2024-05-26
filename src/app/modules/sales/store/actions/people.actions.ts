import { createAction, props } from "@ngrx/store";
import { PEOPLE_ACTION_SOURCE } from "../sales.state";
import { PersonDto } from "../../models/person.model";

export const loadPeople = createAction(`${PEOPLE_ACTION_SOURCE} Load People`, props<{ pageNumber?: number, pageSize?: number, orderBy?: string }>());
export const setPeople = createAction(`${PEOPLE_ACTION_SOURCE} Set People`, props<{ people: PersonDto[] | null | undefined }>());
export const setError = createAction(`${PEOPLE_ACTION_SOURCE} Set Error`, props<{ error: string }>());
