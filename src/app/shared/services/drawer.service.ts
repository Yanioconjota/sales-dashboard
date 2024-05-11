import { Injectable } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrawerService {
  private drawer: MatDrawer | null = null;
  private drawerStatus = new BehaviorSubject<boolean>(false);

  constructor() { }

  setDrawer(drawer: MatDrawer): void {
    this.drawer = drawer;
  }

  toggleDrawer(): void {
    if (this.drawer) {
      this.drawer.toggle();
      this.drawerStatus.next(this.drawer.opened);
    }
  }

  getDrawerStatus() {
    return this.drawerStatus.asObservable();
  }
}
