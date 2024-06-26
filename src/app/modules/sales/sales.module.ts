import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesComponent } from './components/sales/sales.component';
import { SalesRoutingModule } from './sales-routing.module';
import { PersonComponent } from './components/person/person.component';
import { PeopleComponent } from './components/people/people.component';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { PeopleEffects } from './store/effects';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEditDialogComponent } from './components/add-edit-dialog/add-edit-dialog.component';

const imports = [
  CommonModule,
  SharedModule,
  ReactiveFormsModule,
  HttpClientModule,
  SalesRoutingModule,
  EffectsModule.forFeature([PeopleEffects])
];

const components = [
  SalesComponent,
  PeopleComponent,
  PersonComponent,
  AddEditDialogComponent
];

@NgModule({
  declarations: [...components],
  imports: [...imports],
  exports: [...components]
})
export class SalesModule { }
