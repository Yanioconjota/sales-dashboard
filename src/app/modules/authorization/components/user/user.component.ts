import { Component, OnInit } from '@angular/core';
import { Unsubscribable } from 'rxjs';
import { CombineSubscriptions, DestroySubscribers } from 'src/app/shared/decorators/destroy-subscribers.decorator';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers/index.reducer';
import * as AuthSelectors from 'src/app/modules/authorization/store/selectors/auth.selectors';
import { User } from '@auth0/auth0-angular';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
@DestroySubscribers()
export class UserComponent implements OnInit {
  @CombineSubscriptions() subscriber?: Unsubscribable;
  user?: User | null | undefined;

  constructor(private readonly store: Store<AppState>) { }

  ngOnInit(): void {
    this.setupSubsctiptions();
  }

  setupSubsctiptions(): void {
    this.subscriber = this.store.select(AuthSelectors.selectUserData).subscribe(user => {
      this.user = user;
    })
  }

}
