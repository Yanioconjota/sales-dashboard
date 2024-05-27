import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers/index.reducer';
import { PeopleActions } from '../store/actions';
import { filter, take } from 'rxjs/operators';
import { PersonDto } from '../models/person.model';
import { PeopleSelectors } from '../store/selectors';

@Injectable({
  providedIn: 'root'
})
export class PeopleResolver implements Resolve<PersonDto[]> {
  constructor(private store: Store<AppState>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PersonDto[]> {
    this.store.dispatch(PeopleActions.loadPeople({ pageNumber: 1, pageSize: 4, orderBy: 'asc' }));
    return this.store.select(PeopleSelectors.selectPeople).pipe(
      filter((people: PersonDto[] | null | undefined): people is PersonDto[] => people !== null && people !== undefined),
      take(1),
    );
  }
}
