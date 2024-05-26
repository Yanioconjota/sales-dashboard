import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Input() showButton? = false;
  @Input() customButtonText = 'Custom Action';
  @Input() buttonText1? = 'Back';
  @Input() isNavigation? = true;
  @Input() navigateToRoute = '/';
  @Output() onCustomAction = new EventEmitter<void>();
  constructor(private readonly navigationService: NavigationService) { }

  ngOnInit(): void {
  }

  navigateTo(route: string): void {
    this.navigationService.navigateTo(route);
  }

  emitCustomAction(): void {
    this.onCustomAction.emit();
  }

}
