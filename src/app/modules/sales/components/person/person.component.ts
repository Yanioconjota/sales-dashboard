import { Component, Input, OnInit } from '@angular/core';
import { PersonDto } from '../../models/person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  @Input() person: PersonDto | null | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  buildCardTitle(person: PersonDto): string {
    return `${person.title || ''} ${person.firstName} ${person.middleName || ''} ${person.lastName} ${person.suffix || ''}`;
  }

}
