import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about-us',
  standalone: false,
  templateUrl: './about-us.html',
  styleUrl: './about-us.css',
})
export class AboutUs implements AfterViewInit {

  @ViewChild('swiper')
  swiper!: ElementRef;

  ngAfterViewInit() {

    const swiperEl = this.swiper.nativeElement;

Object.assign(swiperEl, {
  slidesPerView: 'auto',
  centeredSlides: true,
  loop: true,
  loopedSlides: 3, // Tells Swiper to safely handle the 3-image cycle
  speed: 4000,
  allowTouchMove: false,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  },
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 0,
    stretch: 20,
    depth: 100,
    modifier: 1,
    scale: 0.85,
  },
  navigation: true,
});
swiperEl.initialize();

  }
}
