import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlogData {

  blogs = [

    {
      slug: 'best-honda-showroom-in-siliguri-west-bengal-why-choose-kaysons-honda',
      title: 'Best Honda Showroom in Siliguri West Bengal: Why Choose Kaysons Honda?',
      image: 'assets/images/img-home-slideshow-2.jpg',

      content: `
      <h1>Best Honda Showroom in Siliguri West Bengal: Why Choose Kaysons Honda?</h1>

      <p>Purchasing a two-wheeler involves more than selecting a model. Customers also look for reliable dealership support, access to genuine products, and after-sales service.</p>

      <h3>Honda Two-Wheeler Range Available</h3>

      <ul>
        <li>Activa 110</li>
        <li>Activa 125</li>
        <li>Dio</li>
        <li>Shine 100</li>
        <li>Shine 125</li>
        <li>SP125</li>
        <li>SP160</li>
        <li>Unicorn</li>
        <li>Hornet 2.0</li>
        <li>NX200</li>
      </ul>

      <h3>Conclusion</h3>

      <p>Kaysons Honda provides motorcycle sales, servicing, spare parts and customer support.</p>
      `,

      faqs: [
        {
          question: 'What products are available at Kaysons Honda?',
          answer: 'Honda motorcycles and scooters including Activa, Dio, Shine, SP125, Unicorn and Hornet 2.0.'
        },
        {
          question: 'Does Kaysons Honda provide test rides?',
          answer: 'Yes, customers can enquire about test rides.'
        },
        {
          question: 'Can I get genuine Honda spare parts?',
          answer: 'Yes, genuine Honda spare parts and accessories are available.'
        },
        {
          question: 'Does Kaysons Honda offer servicing?',
          answer: 'Yes, inspections, maintenance and repairs are available.'
        },
        {
          question: 'Why choose an authorized Honda showroom?',
          answer: 'Because it provides genuine parts and trained technicians.'
        }
      ]
    },

    {
      slug: 'best-honda-scooters-in-2026-features-mileage-price-comparison',
      title: 'Best Honda Scooters in 2026: Features, Mileage & Price Comparison',
      image: 'assets/images/img-home-slideshow-3.jpg',

      content: `
      <h1>Best Honda Scooters in 2026</h1>

      <p>Honda continues to be one of India's leading scooter manufacturers.</p>

      <h3>Honda Activa Features</h3>

      <ul>
        <li>LED Headlamp</li>
        <li>Smart Key</li>
        <li>Digital Console</li>
      </ul>

      <h3>Honda Dio Features</h3>

      <ul>
        <li>LED Lighting</li>
        <li>Alloy Wheels</li>
        <li>Sporty Graphics</li>
      </ul>
      `,

      faqs: [
        {
          question: 'Which are the best Honda scooters?',
          answer: 'Honda Activa and Honda Dio.'
        },
        {
          question: 'Does Activa have Smart Key?',
          answer: 'Yes, on selected variants.'
        },
        {
          question: 'Is Dio suitable for city riding?',
          answer: 'Yes.'
        },
        {
          question: 'Where can I check the Activa price?',
          answer: 'Visit Kaysons Honda.'
        },
        {
          question: 'Which scooter gives good mileage?',
          answer: 'Both Activa and Dio.'
        }
      ]
    },

    {
      slug: 'how-to-maintain-your-honda-bike-for-better-performance-and-mileage',
      title: 'How to Maintain Your Honda Bike for Better Performance and Mileage',
      image: 'assets/images/img-home-slideshow-2.jpg',

      content: `
      <h1>How to Maintain Your Honda Bike</h1>

      <p>Regular maintenance improves performance and mileage.</p>

      <h3>Maintenance Tips</h3>

      <ul>
        <li>Change engine oil</li>
        <li>Maintain tyre pressure</li>
        <li>Clean air filter</li>
        <li>Lubricate chain</li>
      </ul>
      `,

      faqs: [
        {
          question: 'How often should I service my bike?',
          answer: 'Follow the owners manual.'
        },
        {
          question: 'Does tyre pressure affect mileage?',
          answer: 'Yes.'
        },
        {
          question: 'Why change engine oil?',
          answer: 'It protects the engine.'
        },
        {
          question: 'Can a dirty air filter reduce mileage?',
          answer: 'Yes.'
        },
        {
          question: 'Why use genuine spare parts?',
          answer: 'They ensure reliability and compatibility.'
        }
      ]
    }

  ];

}
