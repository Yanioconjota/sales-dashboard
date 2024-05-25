import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { DrawerService } from '../../services/drawer.service';
import { Unsubscribable } from 'rxjs';
import { CombineSubscriptions, DestroySubscribers } from '../../decorators/destroy-subscribers.decorator';
import { NavigationService } from '../../services/navigation.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers/index.reducer';
import * as AuthSelectors from 'src/app/modules/authorization/store/selectors/auth.selectors';

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
  isAuthenticated$ = this.store.select(AuthSelectors.selectIsAuthenticated);

  constructor(
    private readonly drawerService: DrawerService,
    private readonly navigationService: NavigationService,
    private readonly store: Store<AppState>) { }

  ngOnInit(): void {
    this.subscriber = this.drawerService.getDrawerStatus().subscribe(open => {
      this.sidenavStatusOpen = open;
    });
  }

  ngAfterViewInit(): void {
    this.drawerService.setDrawer(this.drawer);
  }

  navigateTo(route: string): void {
    console.log(route);
    this.navigationService.navigateTo(route);
  }

}
