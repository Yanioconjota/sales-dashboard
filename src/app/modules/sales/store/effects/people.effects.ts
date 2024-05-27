import { Injectable } from "@angular/core";
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PeopleActions } from "../actions";
import { of } from "rxjs";
import { PeopleService } from "../../services/people.service";

@Injectable()

export class PeopleEffects {
  constructor(public peopleService: PeopleService, private actions$: Actions,) {}

  loadPeople$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PeopleActions.loadPeople),
      mergeMap(({ pageNumber, pageSize, orderBy }) =>
        this.peopleService.getPeople(pageNumber, pageSize, orderBy).pipe(
          map(people =>
            PeopleActions.setPeople({ people })
          ),
          catchError(() => of(PeopleActions.setError({ error: 'Failed to load people' })))
        )
      )
    )
  );

  loadPerson$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PeopleActions.loadPerson),
      mergeMap(({ id }) =>
        this.peopleService.getPersonById(id).pipe(
          map(person =>
            PeopleActions.setPerson({ person })
          ),
          catchError(() => of(PeopleActions.setError({ error: 'Failed to load person' })))
        )
      )
    )
  );

  loadPeopleByName$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PeopleActions.loadPeopleByName),
      mergeMap(({ name }) =>
        this.peopleService.getPeopleByName(name).pipe(
          map(people =>
            PeopleActions.setPeopleByName({ people })
          ),
          catchError(() => of(PeopleActions.setError({ error: 'Failed to load people by name' })))
        )
      )
    )
  );

  updatePerson$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PeopleActions.updatePerson),
      mergeMap(({ id, person }) =>
        this.peopleService.updatePerson(id, person).pipe(
          map(() =>
            PeopleActions.updatePersonSuccess({ person })
          ),
          catchError(() => of(PeopleActions.setError({ error: 'Failed to update person' }))
          )
        )
      )
    )
  );

  addPerson$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PeopleActions.addPerson),
      mergeMap(({ person }) =>
        this.peopleService.addPerson(person).pipe(
          map(() =>
            PeopleActions.addPersonSuccess({ person })
          ),
          catchError(() => of(PeopleActions.setError({ error: 'Failed to add person' }))
          )
        )
      )
    )
  );

  deletePerson$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PeopleActions.deletePerson),
      mergeMap(({ id }) =>
        this.peopleService.deletePerson(id).pipe(
          map(() =>
            PeopleActions.deletePersonSuccess({ id })
          ),
          catchError(() => of(PeopleActions.setError({ error: 'Failed to delete person' }))
          )
        )
      )
    )
  );
}
