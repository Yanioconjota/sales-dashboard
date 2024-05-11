import { Component, Input, OnInit } from '@angular/core';
import { DrawerService } from '../../services/drawer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title: string = '';
  @Input() theme: string = '';
  @Input() icon: string = '';

  constructor(private drawerService: DrawerService) { }

  ngOnInit(): void {
  }

  toggleSidenav(): void {
    this.drawerService.toggleDrawer();
  }

}
