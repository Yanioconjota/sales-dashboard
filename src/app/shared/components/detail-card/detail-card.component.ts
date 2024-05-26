import { Component, Input, OnInit } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.scss']
})
export class DetailCardComponent implements OnInit {

  @Input() title? = 'Card Title';
  @Input() subtitle? = 'Card Sub Title';
  @Input() contentImage? = 'https://via.placeholder.com/1024';
  @Input() showContentImage? = false;
  @Input() content? = 'Card Content';
  @Input() altImageText? = 'Card Image';
  @Input() showButton? = true;
  @Input() buttonText1? = 'Back';
  @Input() buttonText2? = '';
  @Input() isNavigation? = true;
  @Input() navigateToRoute = '/';
  constructor(private readonly navigationService: NavigationService) { }

  ngOnInit(): void {
  }

  navigateTo(route: string): void {
    this.navigationService.navigateTo(route);
  }

}
