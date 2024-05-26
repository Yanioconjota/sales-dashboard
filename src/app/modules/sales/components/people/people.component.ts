import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { IPersonDto } from '../../models/person.model';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  pageNumber: number = 1;
  pageSize: number = 10;
  orderBy: string = 'asc';

  constructor(private readonly peopleService: PeopleService) { }

  ngOnInit(): void {
    this.peopleService.getPeople(this.pageNumber, this.pageSize, this.orderBy).subscribe((people: IPersonDto[]) => {
      console.log(people);
    });
  }

}
