import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Directives

//Components
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { CarouselComponent } from './components/carousel/carousel.component';

const imports = [
  CommonModule,
  RouterModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatListModule,
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
  exports: [...components ]
})
export class SharedModule { }
