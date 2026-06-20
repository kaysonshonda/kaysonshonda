import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../c-services/form-service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrls: ['./home.css'], // ✅ styleUrls
})
export class Home implements OnInit, AfterViewInit {
  // SWIPER REF

  @ViewChild('swiperRef', { static: false })
  swiperRef!: ElementRef;
  bookingForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private formService: FormService
  ) {
    this.bookingForm = this.fb.group({
      fullName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      model: ['Honda NX200', Validators.required],
      note: [''],
    });
  }
  // TESTIMONIALS

  testimonials = [
    {
      title: 'The Performance & Service Enthusiast',
      desc: `Bought the CB650R from Honda BigWing last year.
      The delivery day felt incredibly special and their
      maintenance service has been top-notch.`,
      name: 'Arjun Mehta',
      bike: 'Honda CB650R',
    },

    {
      title: 'The Test Ride & Buying Experience',
      desc: `The test ride experience at Honda BigWing
      was phenomenal. Staff guided me through every detail.`,
      name: 'Deepika Rao',
      bike: 'Honda CB125 Hornet',
    },

    {
      title: 'The Smooth Delivery & Financing Experience',
      desc: `Financing my H’ness CB350 was seamless and
      the bike delivery was perfect with all accessories.`,
      name: 'Vikram Malhotra',
      bike: 'Honda SP160',
    },

    {
      title: 'Best Honda Showroom',
      desc: `Excellent customer support and fast service.`,
      name: 'Rahul Sharma',
      bike: 'Honda Hornet 2.0',
    },

    {
      title: 'Premium Experience',
      desc: `Very professional staff and premium
      showroom atmosphere.`,
      name: 'Karan Verma',
      bike: 'Honda Hness',
    },
    {
      title: 'The Performance & Service Enthusiast',
      desc: `Bought the CB650R from Honda BigWing last year.
      The delivery day felt incredibly special and their
      maintenance service has been top-notch.`,
      name: 'Arjun Mehta',
      bike: 'Honda CB650R',
    },
  ];

  // COUNTERS

  happyCustomers = 0;
  yearsTrust = 0;
  hondaVehicles = 0;
  expertStaff = 0;
  commitment = 0;

  // SLIDER IMAGES

  images = [
    'assets/images/1.jpg',
    'assets/images/2.jpg',
    'assets/images/3.jpg',
    'assets/images/4.jpg',
  ];

  activeIndex = 0;

  // ON INIT

  ngOnInit(): void {
    this.startCounter(25000, (val) => (this.happyCustomers = val));

    this.startCounter(15, (val) => (this.yearsTrust = val));

    this.startCounter(80, (val) => (this.hondaVehicles = val));

    this.startCounter(20, (val) => (this.expertStaff = val));

    this.startCounter(100, (val) => (this.commitment = val));
  }

  // AFTER VIEW INIT

  ngAfterViewInit(): void {
    const swiperEl: any = this.swiperRef.nativeElement;

    Object.assign(swiperEl, {
      slidesPerView: 1,
      loop: true,

      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },

      speed: 800,

      on: {
        slideChange: () => {
          this.activeIndex = swiperEl.swiper.realIndex;
        },
      },
    });

    swiperEl.initialize();
  }

  // NEXT / PREV

  nextSlide(): void {
    this.swiperRef.nativeElement.swiper.slideNext();
  }

  prevSlide(): void {
    this.swiperRef.nativeElement.swiper.slidePrev();
  }

  // CLICK NUMBER

  slideTo(index: number): void {
    const swiperEl: any = this.swiperRef.nativeElement;

    swiperEl.swiper.slideToLoop(index);

    this.activeIndex = index;
  }

  // COUNTER FUNCTION

  startCounter(target: number, callback: (value: number) => void): void {
    let current = 0;

    const increment = target / 100;

    const interval = setInterval(() => {
      current += increment;

      if (current >= target) {
        current = target;
        clearInterval(interval);
      }

      callback(Math.floor(current));
    }, 30);
  }

  // FORMAT K+

  formatK(value: number): string {
    if (value >= 1000) {
      return Math.floor(value / 1000) + 'K+';
    }

    return value.toString() + '+';
  }

  // TABS

  activeTab: string = 'motorcycle';

  setTab(tab: string): void {
    this.activeTab = tab;
  }

  // TEST DRIVE FORM

  bikeModels: string[] = [
    'Honda NX200',
    'Honda Hornet 2.0',
    'Honda Shine',
    'Honda SP125',
    'Honda Unicorn',
  ];
  onSubmit(): void {
    if (this.bookingForm.invalid) {
      this.bookingForm.markAllAsTouched();
      alert('Please fill all required fields.');
      return;
    }

    console.log('Booking Data:', this.bookingForm.value);
    this.formService.submitTestDriveForm(this.bookingForm.value).subscribe(
      (response) => {
        console.log('Form submitted successfully:', response);
        alert('Your test drive booking has been submitted successfully!');
        this.bookingForm.reset();
      },
      (error) => {
        console.error('Error submitting form:', error);
        alert('There was an error submitting your booking. Please try again later.');
      }
    );
  }
}
