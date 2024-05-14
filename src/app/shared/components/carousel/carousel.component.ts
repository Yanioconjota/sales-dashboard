import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() images: { picture: string; text: string }[] = [];
  @Input() animationTime: number = 500; // tiempo en milisegundos
  @Input() height: string = 'auto';
  currentSlideIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.preloadImages();
  }

  preloadImages(): void {
    this.images.forEach(image => {
      const img = new Image();
      img.src = image.picture;
    });
  }

  nextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.images.length;
  }

  previousSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.images.length) % this.images.length;
  }

}
