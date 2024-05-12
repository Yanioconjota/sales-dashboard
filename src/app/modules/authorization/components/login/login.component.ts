import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/shared/services/navigation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loading = false;

  constructor(private readonly navigationService: NavigationService) { }

  ngOnInit(): void {
  }

  navigateTo(route: string): void {
    this.navigationService.navigateTo(route);
  }

}
