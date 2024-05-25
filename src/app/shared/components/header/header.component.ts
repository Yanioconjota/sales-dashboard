import { Component, Input, OnInit } from '@angular/core';
import { DrawerService } from '../../services/drawer.service';
import { NavigationService } from '../../services/navigation.service';
import { AuthService } from 'src/app/modules/authorization/services/auth.service';
import { CombineSubscriptions, DestroySubscribers } from '../../decorators/destroy-subscribers.decorator';
import { Unsubscribable, combineLatest } from 'rxjs';
import { User } from '@auth0/auth0-angular';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers/index.reducer';
import * as AuthSelectors from 'src/app/modules/authorization/store/selectors/auth.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
@DestroySubscribers()
export class HeaderComponent implements OnInit {
  @CombineSubscriptions() subscriber?: Unsubscribable;
  @Input() title: string = '';
  @Input() theme: string = '';
  @Input() icon: string = '';
  isAuthenticated = false;
  user: User | null | undefined;

  constructor(
    private drawerService: DrawerService,
    private readonly navigationService: NavigationService,
    private readonly auth: AuthService,
    private readonly store: Store<AppState>) { }

  ngOnInit(): void {
    this.setupSubscription();
  }

  toggleSidenav(): void {
    this.drawerService.toggleDrawer();
  }

  navigateTo(route: string): void {
    this.navigationService.navigateTo(route);
  }

  loginWithRedirect(): void {
    this.auth.loginWithRedirect();
  }

  logout(): void {
    this.auth.logout();
  }

  setupSubscription(): void {
    // this.subscriber = this.auth.isAuthenticated().subscribe(isAuthenticated => {
    //   this.isAuthenticated = isAuthenticated;
    // });

    this.subscriber = combineLatest([this.store.select(AuthSelectors.selectIsAuthenticated), this.store.select(AuthSelectors.selectUserData)]).subscribe(([isAuthenticated, user]) => {
      this.isAuthenticated = isAuthenticated;
      this.user = user;
    });
  }

}
