import { Component, Input, OnInit } from '@angular/core';
import { DrawerService } from '../../services/drawer.service';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title: string = '';
  @Input() theme: string = '';
  @Input() icon: string = '';

  constructor(
    private drawerService: DrawerService,
    private readonly navigationService: NavigationService) { }

  ngOnInit(): void {
  }

  toggleSidenav(): void {
    this.drawerService.toggleDrawer();
  }

  navigateTo(route: string): void {
    this.navigationService.navigateTo(route);
  }

}
