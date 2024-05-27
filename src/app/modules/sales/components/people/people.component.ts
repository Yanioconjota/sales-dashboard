import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { PersonDto } from '../../models/person.model';
import { CombineSubscriptions, DestroySubscribers } from 'src/app/shared/decorators/destroy-subscribers.decorator';
import { Unsubscribable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers/index.reducer';
import { PeopleSelectors } from '../../store/selectors';
import { PeopleActions } from '../../store/actions';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private readonly store: Store<AppState>, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.setupSubsctiptions();
  }

  setupSubsctiptions(): void {
    this.activatedRoute.data.subscribe(data => {
      this.people = data.people;
    });
  }
}
