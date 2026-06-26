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
  successMessage = '';
  isLoading = false;
  @ViewChild('swiperRef', { static: false })
  swiperRef!: ElementRef;
  bookingForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private formService: FormService,
  ) {
    this.bookingForm = this.fb.group({
      fullName: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[6-9][0-9]{9}$')]],
      email: ['', [Validators.required, Validators.email]],
      model: [this.bikeModels[0], Validators.required],
      note: [''],
    });
  }
  // TESTIMONIALS

  testimonials = [
    {
      desc: `I recently purchased a Honda SP125 DLX DISK OBD2B, and the delivery experience was exceptional. The process was seamless, with the bike delivered within two hours, including the completion of all EMI formalities and other paperwork. The staff were courteous, professional, and highly efficient, making the entire experience enjoyable. I highly recommend their service for a smooth and hassle-free purchase.`,
      name: 'Sanjay Basak',
    },

    {
      desc: `I recently purchased my scooty from Kaysons Honda, Siliguri, and had a great experience. The staff was very helpful, professional, and guided me through the entire process smoothly. The delivery was timely, and all my queries were handled with patience. Highly satisfied with the service and would definitely recommend Kaysons Honda to anyone planning to buy a two-wheeler!`,
      name: 'Mrinmoy Paul',
    },

    {
      desc: `Excellent service! I am very happy and impressed with the service they provide. The finance team really cares about their customers. Their sales staff made my vehicle buying experience easy and enjoyable. I would 100% recommend Kaysons Honda for a great vehicle purchase and service experience!`,
      name: 'Sanjoy Mallick',
    },

    {
      desc: `Excellent service experience. Special thanks to Ms. Puja and Mr. Shib for their professionalism and clear communication. They ensured all issues were addressed and kept me updated throughout the process. The bike feels great post-service. Highly satisfied with the quality and customer support. Will definitely recommend and return for future servicing needs.`,
      name: 'Shovan',
    },

    {
      desc: `Got my Honda Activa insurance claim done here. The service was outstanding with instant claim processing and timely delivery. The advisor was very polite, and the customer lounge was neat and clean. I was guided step by step throughout the process. I highly recommend Kaysons Honda Service Center to every Honda two-wheeler owner. Truly Siliguri's No.1 Honda showroom and service center.`,
      name: 'Yash Agarwal',
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
    'NX200',
  'CB 125',
  'Hornet 2.0',
  'Shine100',
  'Shine100 DX',
  'Shine125',
  'Shine 125 Limited',
  'SP125',
  'SP125 Nav',
  'SP160',
  'Unicorn',
  'Livo',
  'Activa 110',
  'Activa 125',
  'Activa 110 Anniversary Edition',
  'Activa 125 Anniversary Edition',
  'Dio 110',
  'Dio 125',
  'Dio X Edition'
  ];
  onSubmit(): void {
    if (this.bookingForm.invalid) {
      this.bookingForm.markAllAsTouched();
      // alert('Please fill all required fields.');
      return;
    }
    this.isLoading = true;
    console.log('Booking Data:', this.bookingForm.value);
    this.formService.submitTestDriveForm(this.bookingForm.value).subscribe({
      next: (response) => {
        this.successMessage = 'Thank you! Your test drive booking has been submitted successfully.';

        this.bookingForm.reset();
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error submitting form:', error);
        this.isLoading = false;
      },
    });
  }
  scrollToVehicles(): void {
  const section = document.getElementById('vehicle-section');

  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// motor cycle
showAllMotorcycles = false;
viewMoreMotorcycles(): void {
  this.showAllMotorcycles = true;
}
}
