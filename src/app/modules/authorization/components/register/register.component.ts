import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/shared/services/navigation.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  loading = false;

  constructor(private readonly navigationService: NavigationService) { }

  ngOnInit(): void {
  }

  navigateTo(route: string): void {
    this.navigationService.navigateTo(route);
  }

}
