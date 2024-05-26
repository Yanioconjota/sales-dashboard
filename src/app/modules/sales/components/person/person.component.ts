import { Component, Input, OnInit } from '@angular/core';
import { PersonDto } from '../../models/person.model';
import { MatDialog } from '@angular/material/dialog';
import { AddEditDialogComponent } from '../add-edit-dialog/add-edit-dialog.component';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  @Input() person: PersonDto | null | undefined;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  buildCardTitle(person: PersonDto): string {
    return `${person.title || ''} ${person.firstName} ${person.middleName || ''} ${person.lastName} ${person.suffix || ''}`;
  }

  editPerson(): void {
    console.log('Edit button clicked');
    const dialogRef = this.dialog.open(AddEditDialogComponent, {
      width: '600px',
      data: this.person
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

}
