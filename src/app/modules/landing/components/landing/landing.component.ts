import { Component, OnInit } from '@angular/core';
import { CarouselItem } from 'src/app/shared/models/carousel-item.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  url = 'assets/img/slides/';

  images: CarouselItem[] = [
    { picture: `${this.url}cp001.png` },
    { picture: `${this.url}cp002.png`, text: 'Texto imagen 2' },
    { picture: `${this.url}cp003.png`, text: 'Texto imagen 3' },
    { picture: `${this.url}cp004.png`, text: 'Texto imagen 4' },
    { picture: `${this.url}cp005.png`, text: 'Texto imagen 5' },
    { picture: `${this.url}cp006.png`, text: 'Texto imagen 6' },
    { picture: `${this.url}cp007.png`, text: 'Texto imagen 7' },
  ];

  constructor() { }

  ngOnInit(): void {
  }


}
