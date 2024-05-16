import { Component, OnInit } from '@angular/core';
import { CarouselItem } from 'src/app/shared/models/carousel-item.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  url = 'assets/img/slides/';
  animationTime = 1000;
  selectedImageAlignment = 'center';
  selectedSize = 'cover';

  images: CarouselItem[] = [
    { picture: `${this.url}cp001.png` },
    { picture: `${this.url}cp002.png` },
    { picture: `${this.url}cp003.png` },
    { picture: `${this.url}cp004.png` },
    { picture: `${this.url}cp005.png` },
    { picture: `${this.url}cp006.png` },
    { picture: `${this.url}cp007.png` },
  ];

  constructor() { }

  ngOnInit(): void {
  }


}
