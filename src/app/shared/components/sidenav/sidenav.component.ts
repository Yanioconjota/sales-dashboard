import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { DrawerService } from '../../services/drawer.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, AfterViewInit {
  @ViewChild('drawer') drawer!: MatDrawer;

  constructor(private drawerService: DrawerService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.drawerService.setDrawer(this.drawer);
  }

}
