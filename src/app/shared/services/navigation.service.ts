import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private readonly router: Router) { }

  navigateTo(route: string): void {
    this.router.navigate([`/${route}`]);
  }
}
