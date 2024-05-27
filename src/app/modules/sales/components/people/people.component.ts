import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { PersonDto } from '../../models/person.model';
import { CombineSubscriptions, DestroySubscribers } from 'src/app/shared/decorators/destroy-subscribers.decorator';
import { Unsubscribable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers/index.reducer';
import { PeopleSelectors } from '../../store/selectors';
import { PeopleActions } from '../../store/actions';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
@DestroySubscribers()
export class PeopleComponent implements OnInit {
  @CombineSubscriptions() subscriber?: Unsubscribable;
   pageNumber: number = 1;
  pageSize: number = 4;
  orderBy: string = 'asc';
  people: PersonDto[] = [];
  person: PersonDto | null | undefined;

  constructor(private readonly store: Store<AppState>) { }

  ngOnInit(): void {
    this.loadPeople();
    this.setupSubsctiptions();
  }

  loadPeople(): void {
    this.store.dispatch(PeopleActions.loadPeople({ pageNumber: this.pageNumber, pageSize: this.pageSize, orderBy: this.orderBy }));
  }

  setupSubsctiptions(): void {
    this.subscriber = this.store.select(PeopleSelectors.selectPeople).subscribe((people: PersonDto[] | null | undefined) => {
      if (people) {
        this.people = people;
      }
    });
  }
}
