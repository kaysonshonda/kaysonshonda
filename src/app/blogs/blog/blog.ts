import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  standalone: false,
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {
  blogs = [
    {
      id: 1,
      title: 'Best Honda Showroom in Siliguri West Bengal: Why Choose Kaysons Honda?',
      image: 'assets/images/img-home-slideshow-2.jpg',
      date: 'Jun 27, 2026',
      description:
        'Purchasing a two-wheeler involves more than selecting a model. Customers also look for reliable dealership support, access to genuine products, and after-sales service.',
      slug: 'best-honda-showroom-in-siliguri-west-bengal-why-choose-kaysons-honda',
    },
    {
      id: 2,
      title: 'Best Honda Scooters in 2026: Features, Mileage & Price Comparison',
      image: 'assets/images/img-home-slideshow-3.jpg',
      date: 'Jun 27, 2026',
      description:
        'Honda continues to be one of the leading scooter manufacturers in India, offering models designed for daily commuting, urban mobility, and practical transportation.',
      slug: 'best-honda-scooters-in-2026-features-mileage-price-comparison',
    },
    {
      id: 3,
      title: 'How to Maintain Your Honda Bike for Better Performance and Mileage',
      image: 'assets/images/img-home-slideshow-2.jpg',
      date: 'Jun 27, 2026',
      description:
        'Regular maintenance plays an important role in keeping a Honda Bike running efficiently. Proper care helps improve performance, supports fuel efficiency,',
      slug: 'how-to-maintain-your-honda-bike-for-better-performance-and-mileage',
    },
  ];
}
