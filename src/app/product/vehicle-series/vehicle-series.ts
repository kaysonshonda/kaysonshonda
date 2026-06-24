import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VEHICLE_DATA } from '../vehicle-data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../../c-services/form-service';

@Component({
  selector: 'app-vehicle-series',
  standalone: false,
  templateUrl: './vehicle-series.html',
  styleUrl: './vehicle-series.css',
})
export class VehicleSeries implements OnInit, AfterViewInit {
  @ViewChild('swiper') swiperEl!: ElementRef;
  successMessage = '';
  isLoading = false;
  seriesData: any;
  activeIndex: number | null = null;
  enquiryForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private document: Document,
    private fb: FormBuilder,
    private formService: FormService,
  ) {
    this.enquiryForm = this.fb.group({
      fullName: ['', Validators.required],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[6-9][0-9]{9}$')]],
      email: ['', [Validators.required, Validators.email]],
      model: ['', Validators.required],
      message: [''],
    });
  }

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

submitForm() {
  if (this.enquiryForm.invalid) {
    this.enquiryForm.markAllAsTouched();
    return;
  }

  this.isLoading = true;

  this.formService.enquiryForm(this.enquiryForm.value).subscribe({
    next: (response) => {
      this.successMessage =
        'Thank you! Your enquiry has been submitted successfully.';

      this.enquiryForm.reset();
      this.isLoading = false;
    },
    error: (error) => {
      console.error(error);
      this.isLoading = false;
    },
  });
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

  openWhatsapp() {
    const element = document.getElementById('get-in-touch-form');

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
}
