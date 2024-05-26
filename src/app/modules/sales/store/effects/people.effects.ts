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
}
