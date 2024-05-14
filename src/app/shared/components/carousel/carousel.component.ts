import { Component, OnInit, Input } from '@angular/core';
import { CarouselItem } from '../../models/carousel-item.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() images: CarouselItem[] = [];
  @Input() animationTime: number = 500; // tiempo en milisegundos
  @Input() height: string = 'auto';
  @Input() autoplay: boolean = false;
  currentSlideIndex: number = 0;
  autoplayInterval?: any;

  constructor() { }

  ngOnInit(): void {
    this.preloadImages();
    if (this.autoplay) {
      this.startAutoplay();
    }
  }

  preloadImages(): void {
    this.images.forEach(image => {
      const img = new Image();
      img.src = image.picture;
    });
  }

  startAutoplay(): void {
    console.log('startAutoplay');
    this.autoplay = true;
    this.autoplayInterval = setInterval(() => {
      this.nextSlide();
    }, this.animationTime + 3000); // 3 segundos entre cada slide
  }

  stopAutoplay(): void {
    console.log('stopAutoplay');
    this.autoplay = false;
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }

  nextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.images.length;
  }

  previousSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.images.length) % this.images.length;
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }
}
