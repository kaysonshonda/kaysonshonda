import { Component, AfterViewInit, ElementRef, ViewChild, signal } from '@angular/core';

@Component({
  selector: 'app-honda-shine-series',
  standalone: false,
  templateUrl: './honda-shine-series.html',
  styleUrl: './honda-shine-series.css',
})
export class HondaShineSeries implements AfterViewInit {
  @ViewChild('swiper')
  swiperRef!: ElementRef;
  shineBikes = [
    {
      name: 'Honda Shine 100',
      subtitle: 'Powered by Honda',
      price: '₹68,000',
      year: '2025',
      type: 'Bike',
      make: 'Honda',
      engine: '4-Stroke SI Engine',
      power: '7.3 PS',
      displacement: '60-65 km/l',
      fuel: 'PGM-FI',
       brochure: '/assets/Brochure/Shine100-Std.pdf',

      colors: [
        {
          name: 'Red',
          image: '/assets/images/shine-series/Shine100/Red with Black.png',
          code: 'rgb(161, 26, 22)',
        },
        {
          name: 'Gray',
          image: '/assets/images/shine-series/Shine100/Gray with Black.png',
          code: 'rgb(107, 106, 105)',
        },
        {
          name: 'Blue',
          image: '/assets/images/shine-series/Shine100/Blue with Black.png',
          code: 'rgb(0, 99, 173)',
        },
        {
          name: 'Green',
          image: '/assets/images/shine-series/Shine100/Green with Black.png',
          code: 'rgb(0, 102, 106)',
        },
        {
          name: 'Orange',
          image: '/assets/images/shine-series/Shine100/Orange with Black.png',
          code: 'rgb(209, 88, 44)',
        },
      ],
      selectedColor: 0,
    },

    {
      name: 'Honda Shine 100 DX',
      subtitle: 'Powered by Honda',
      price: '₹74,000',
      year: '2025',
      type: 'Bike',
      make: 'Honda',
      engine: '4 Stroke, SI Engine',
      power: '7.3 PS',
      displacement: '60-65 km/l',
      fuel: 'PGM-FI',
      brochure: '/assets/Brochure/Shine100-DX.pdf',

      colors: [
        {
          name: 'Imperial Red Metallic',
          image: '/assets/images/shine-series/Shine100 DX/Imperial Red Metallic.png',
          code: 'rgb(161, 26, 22)',
        },
        {
          name: 'Pearl Igneous Black',
          image: '/assets/images/shine-series/Shine100 DX/Pearl Igneous Black.png',
          code: 'rgb(0, 0, 0)',
        },
        {
          name: 'Athletic Blue Metallic',
          image: '/assets/images/shine-series/Shine100 DX/Athletic Blue Metallic.png',
          code: 'rgb(0, 99, 173)',
        },
        {
          name: 'Geny Gray Metallic',
          image: '/assets/images/shine-series/Shine100 DX/Geny Gray Metallic.png',
          code: 'rgb(107, 106, 105)',
        },
      ],
      selectedColor: 0,
    },

    {
      name: 'Honda Shine 125',
      subtitle: 'Powered by Honda',
      price: '₹88,000',
      year: '2025',
      type: 'Bike',
      make: 'Honda',
      engine: '98.98 cc',
      power: '7.3 PS',
      displacement: '60-65 km/l',
      fuel: 'PGM-FI',
      brochure: '/assets/Brochure/Shine125-bruchure.pdf',

      colors: [
        {
          name: 'Decent Blue Metallic',
          image: '/assets/images/shine-series/Shine125/Decent Blue Metallic.png',
          code: 'rgb(25, 76, 117)',
        },
        {
          name: 'Matte Axis Gray Metallic',
          image: '/assets/images/shine-series/Shine125/Matte Axis Gray Metallic.png',
          code: 'rgb(84, 88, 100)',
        },
        {
          name: 'Pearl Igneous Black',
          image: '/assets/images/shine-series/Shine125/Pearl Igneous Black.png',
          code: 'rgb(40, 40, 40)',
        },
        {
          name: 'Pearl Siren Blue',
          image: '/assets/images/shine-series/Shine125/Pearl Siren Blue.png',
          code: 'rgb(33, 34, 43)',
        },
        {
          name: 'Rebel Red Metallic',
          image: '/assets/images/shine-series/Shine125/Rebel Red Metallic.png',
          code: 'rgb(131, 31, 43)',
        },
        {
          name: 'Geny Gray Metallic',
          image: '/assets/images/shine-series/Shine125/Geny Gray Metallic.png',
          code: 'rgb(88, 88, 88)',
        },
      ],
      selectedColor: 0,
    },

    {
      name: 'Honda Shine 125 Limited',
      subtitle: 'Powered by Honda',
      price: '₹90,000',
      year: '2025',
      type: 'Bike',
      make: 'Honda',
      engine: '98.98 cc',
      power: '7.3 PS',
      displacement: '60-65 km/l',
      fuel: 'PGM-FI',
      brochure: '/assets/Brochure/shine-125-limited-edition (1).pdf',

      colors: [
        {
          name: 'Pearl Siren Blue',
          image: '/assets/images/shine-series/Shine125/Decent Blue Metallic.png',
          code: '#0047ab',
        },
      ],
      selectedColor: 0,
    },
  ];

  activeIndex: number | null = null;

  heroSlides = [
    {
      title: 'Honda Shine100',
      image: '/assets/images/shine-series/Shine100/Red with Black.png',
    },
    {
      title: 'Honda Shine100 DX',
      image: '/assets/images/shine-series/Shine100 DX/Imperial Red Metallic.png',
    },
    {
      title: 'Honda Shine125',
      image: '/assets/images/shine-series/Shine125/Decent Blue Metallic.png',
    },
    {
      title: 'Honda Shine 125 Limited',
      image: '/assets/images/shine-series/Shine125/Decent Blue Metallic.png',
    },
  ];

  faqs = [
    {
      question: 'What is the standard warranty period?',
      answer:
        'Honda Shine 125 comes with a standard warranty of 3 years or 42,000 km (whichever is earlier) from the date of purchase.',
    },
    {
      question: 'What does standard warranty cover?',
      answer:
        'The standard warranty covers major components and systems of the motorcycle, including repairs related to manufacturing defects in components or workmanship.',
    },
    {
      question: 'What is the mileage of the Honda Shine Series?',
      answer:
        'The Honda Shine Series offers impressive fuel efficiency, making it one of the most economical commuter motorcycles in its segment.',
    },
    {
      question: 'What is the fuel tank capacity of the Honda Shine?',
      answer:
        'The fuel tank capacity varies by model and generally ranges between 9 and 10.5 litres.',
    },
    {
      question: 'Why should I choose the Honda Shine Series?',
      answer:
        'The Honda Shine Series is known for reliability, fuel efficiency, comfortable ride quality, low maintenance costs, and trusted Honda engineering.',
    },
  ];
  bikes = [
    {
      image: '/assets/images/shine-series/honda-sun-shine/Generative Fill 3.png',
      name: 'Appealing Front Cowl',
    },
    {
      image: '/assets/images/shine-series/honda-sun-shine/Placeholder image.png',
      name: 'Stylish Alloy Wheels',
    },
    {
      image: '/assets/images/shine-series/honda-sun-shine/Strong Grab Rail.png',
      name: 'Stylish Graphics',
    },
    {
      image: '/assets/images/shine-series/honda-sun-shine/Generative Fill.png',
      name: 'Simplistic Instrument Panel',
    },
    {
      image: '/assets/images/shine-series/honda-sun-shine/Generative Fill 2.png',
      name: 'Placeholder image',
    },
    {
      image: '/assets/images/shine-series/honda-sun-shine/Design.png',
      name: 'Efficient CBS Braking ',
    },

  ];

  enquiry = {
    fullName: '',
    mobileNumber: '',
    email: '',
    model: '',
    message: '',
  };

  changeColor(bike: any, index: number) {
    bike.selectedColor = index;
  }

  // faq
  toggleFaq(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
  // from
  submitForm() {
    console.log(this.enquiry);

    alert('Enquiry Submitted Successfully');

    this.enquiry = {
      fullName: '',
      mobileNumber: '',
      email: '',
      model: '',
      message: '',
    };
  }
  ngAfterViewInit() {
    const swiperEl: any = this.swiperRef.nativeElement;

    Object.assign(swiperEl, {
      slidesPerView: 1,

      loop: true,

      pagination: {
        clickable: true,
      },
    });

    swiperEl.initialize();

    document.querySelector('.bike-swiper');

    document.querySelector('.next-btn')?.addEventListener('click', () => {
      swiperEl.swiper.slideNext();
    });

    document.querySelector('.prev-btn')?.addEventListener('click', () => {
      swiperEl.swiper.slidePrev();
    });
  }


  downloadBrochure(bike: any) {
  const link = document.createElement('a');
  link.href = bike.brochure;
  link.download = bike.name + '-brochure.pdf';
  link.click();
}
}
