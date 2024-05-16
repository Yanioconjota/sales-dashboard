import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Directives

//Components
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { CarouselComponent } from './components/carousel/carousel.component';

const imports = [
  CommonModule,
  RouterModule,
  MatFormFieldModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatListModule,
  MatButtonToggleModule,
  MatSelectModule,
  BrowserAnimationsModule
];

const components = [
  HeaderComponent,
  SidenavComponent,
  CarouselComponent
];

const directives = [];

@NgModule({
  declarations: [...components ],
  imports: [...imports],
  exports: [...imports, ...components ]
})
export class SharedModule { }
