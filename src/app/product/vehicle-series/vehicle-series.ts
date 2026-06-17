import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VEHICLE_DATA } from '../vehicle-data';

@Component({
  selector: 'app-vehicle-series',
  standalone: false,
  templateUrl: './vehicle-series.html',
  styleUrl: './vehicle-series.css',
})
export class VehicleSeries implements OnInit, AfterViewInit {
  @ViewChild('swiper') swiperEl!: ElementRef;

  seriesData: any;
  activeIndex: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private document: Document,
  ) {}

  // ngOnInit() {
  //   const type = this.route.snapshot.data['type'];

  //   this.seriesData = VEHICLE_DATA[type];

  //   this.seriesData?.bikes?.forEach((b: any) => {
  //     b.selectedColor = b.selectedColor ?? 0;
  //   });
  // }

  ngOnInit() {
    const type = this.route.snapshot.data['type'];

    this.seriesData = VEHICLE_DATA[type];

    if (this.seriesData) {
      // Title
      this.titleService.setTitle(this.seriesData.metaTitle || this.seriesData.title);

      // Description
      this.meta.updateTag({
        name: 'description',
        content: this.seriesData.metaDescription || '',
      });

      // Keywords
      this.meta.updateTag({
        name: 'keywords',
        content: this.seriesData.keywords || '',
      });

      // Canonical URL
      let link: HTMLLinkElement =
        this.document.querySelector("link[rel='canonical']") || this.document.createElement('link');

      const canonicalUrl = window.location.href.split('?')[0];

      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', canonicalUrl);

      if (!this.document.head.contains(link)) {
        this.document.head.appendChild(link);
      }

      this.seriesData?.bikes?.forEach((b: any) => {
        b.selectedColor = b.selectedColor ?? 0;
      });
    }
  }
  toggleFaq(i: number) {
    this.activeIndex = this.activeIndex === i ? null : i;
  }

  enquiry = {
    fullName: '',
    mobileNumber: '',
    email: '',
    model: '',
    message: '',
  };

  submitForm() {
    if (!this.enquiry.fullName || !this.enquiry.mobileNumber || !this.enquiry.model) {
      alert('Please fill required fields');
      return;
    }

    console.log('Enquiry Data:', this.enquiry);

    alert('Submitted successfully');

    this.enquiry = {
      fullName: '',
      mobileNumber: '',
      email: '',
      model: '',
      message: '',
    };
  }

  ngAfterViewInit() {
    const swiper: any = this.swiperEl.nativeElement;

    Object.assign(swiper, {
      slidesPerView: 1,
      loop: true,
      pagination: {
        clickable: true,
      },
    });

    swiper.initialize();
  }

  changeColor(bike: any, i: number) {
    bike.selectedColor = i;
  }

  downloadBrochure(bike: any) {
    const a = document.createElement('a');
    a.href = bike.brochure;
    a.download = bike.name;
    a.click();
  }
}
