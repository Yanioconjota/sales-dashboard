import { PersonDto } from "../models/person.model";

export const SALES_ACTION_SOURCE = '[Sales]';
export const PEOPLE_ACTION_SOURCE = '[People]';

export interface PeopleState {
  people: PersonDto[] | null | undefined;
  person: PersonDto | null | undefined;
  error: string | null | undefined;
}

export const initialPeopleState: PeopleState = {
  people: null,
  person: null,
  error: null
}
