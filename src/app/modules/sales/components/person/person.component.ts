import { Component, Input, OnInit } from '@angular/core';
import { IPersonDto, PersonDto } from '../../models/person.model';
import { MatDialog } from '@angular/material/dialog';
import { AddEditDialogComponent } from '../add-edit-dialog/add-edit-dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers/index.reducer';
import { PeopleActions } from '../../store/actions';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  @Input() person: PersonDto | null | undefined;

  constructor(public dialog: MatDialog, private readonly store: Store<AppState>, private readonly ps: PeopleService) { }

  ngOnInit(): void {
  }

  buildCardTitle(person: PersonDto): string {
    return `${person.title || ''} ${person.firstName} ${person.middleName || ''} ${person.lastName} ${person.suffix || ''}`;
  }

  editPerson(): void {
    const dialogRef = this.dialog.open(AddEditDialogComponent, {
      width: '600px',
      data: new PersonDto(this.person as IPersonDto)
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const updatedPerson = new PersonDto({...result});
        //this.ps.updatePersonAlt(updatedPerson.businessEntityId, updatedPerson);
        this.store.dispatch(PeopleActions.updatePerson({ id: updatedPerson.businessEntityId, person: updatedPerson }));
      }
    });
  }

}
