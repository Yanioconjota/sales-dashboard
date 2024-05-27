import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PersonDto } from '../../models/person.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-dialog',
  templateUrl: './add-edit-dialog.component.html',
  styleUrls: ['./add-edit-dialog.component.scss']
})
export class AddEditDialogComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PersonDto
  ) {
    this.form = this.fb.group({
      title: [this.data.title || ''],
      firstName: [this.data.firstName || '', Validators.required],
      middleName: [this.data.middleName || ''],
      lastName: [this.data.lastName || '', Validators.required],
      personType: [this.data.personType || ''],
      suffix: [this.data.suffix || ''],
      nameStyle: [this.data.nameStyle || false],
      emailPromotion: [this.data.emailPromotion || 0]
    });

  }

  ngOnInit(): void {
  }

  onSave(): void {
    if (this.form.valid) {
      const personToUpdate = new PersonDto({
        businessEntityId: this.data.businessEntityId,
        personType: this.form.get('personType')?.value,
        nameStyle: Boolean(this.form.get('nameStyle')?.value),
        title: this.form.get('title')?.value,
        firstName: this.form.get('firstName')?.value,
        middleName: this.form.get('middleName')?.value,
        lastName: this.form.get('lastName')?.value,
        suffix: this.form.get('suffix')?.value,
        emailPromotion: +this.form.get('emailPromotion')?.value,
        additionalContactInfo: null,
        demographics: this.data.demographics,
        rowguid: this.data.rowguid,
        modifiedDate: new Date().toISOString(),
        businessEntity: null,
        businessEntityContacts: [],
        customers: [],
        emailAddresses: [],
        password: null,
        personCreditCards: [],
        personPhones: []
      });
      this.dialogRef.close(personToUpdate);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
