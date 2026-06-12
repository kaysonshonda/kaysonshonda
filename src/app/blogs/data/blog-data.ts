import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlogData {
    blogs = [
    {
     slug: 'how-to-check-your-bikes-engine-oil-level-step-by-step-guide',
      title: 'How to Check Your Bike’s Engine Oil Level: Step-by-Step Guide',
      content: `
        <h2>Massage Spa Near Me</h2>
        <p>Full blog content here...</p>
      `
    },

    {
      slug: 'wellness-spa',
      title: 'Wellness Spa',
      image: 'assets/images/Wellness Spa.png',
      content: `
        <h2>Wellness Spa</h2>
        <p>Full blog content here...</p>
      `
    }
  ];


}
