import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { DrawerService } from '../../services/drawer.service';
import { Unsubscribable } from 'rxjs';
import { CombineSubscriptions, DestroySubscribers } from '../../decorators/destroy-subscribers.decorator';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
@DestroySubscribers()
export class SidenavComponent implements OnInit, AfterViewInit {
  @ViewChild('drawer') drawer!: MatDrawer;
  @CombineSubscriptions() subscriber?: Unsubscribable;
  sidenavStatusOpen = false;

  constructor(private drawerService: DrawerService) { }

  ngOnInit(): void {
    this.subscriber = this.drawerService.getDrawerStatus().subscribe(open => {
      this.sidenavStatusOpen = open;
    });
  }

  ngAfterViewInit(): void {
    this.drawerService.setDrawer(this.drawer);
  }

}
