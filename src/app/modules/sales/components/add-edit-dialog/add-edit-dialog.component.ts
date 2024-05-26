import { Component, Inject, OnInit } from '@angular/core';
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
    @Inject(MAT_DIALOG_DATA) public data: PersonDto | null | undefined
  ) {
    this.form = this.fb.group({
      title: [data?.title, Validators.required],
      firstName: [data?.firstName, Validators.required],
      lastName: [data?.lastName, Validators.required],
      personType: [data?.personType, Validators.required]
    });
  }

  ngOnInit(): void {
    console.log(this.data);
  }

  onSave(): void {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
