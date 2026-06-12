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
      title: 'How to Check Your Bike’s Engine Oil Level: Step-by-Step Guide',
      image: 'assets/images/img-home-slideshow-2.jpg',
      date: 'Jun 12, 2026',
      description: 'Most of us think about engine oil only when something feels wrong. If your bike has ever felt rough, noisy, or off, your engine oil might need attention.',
      slug: 'how-to-check-your-bikes-engine-oil-level-step-by-step-guide'
    },
    {
      id: 2,
      title: 'How to Check Your Bike’s Engine Oil Level: Step-by-Step Guide',
      image: 'assets/images/img-home-slideshow-3.jpg',
      date: 'Jun 12, 2026',
      description: 'Most of us think about engine oil only when something feels wrong. If your bike has ever felt rough, noisy, or off, your engine oil might need attention.',
      slug: 'how-to-check-your-bikes-engine-oil-level-step-by-step-guide'
    },
    {
      id: 3,
      title: 'How to Check Your Bike’s Engine Oil Level: Step-by-Step Guide',
      image: 'assets/images/img-home-slideshow-2.jpg',
      date: 'Jun 12, 2026',
      description: 'Most of us think about engine oil only when something feels wrong. If your bike has ever felt rough, noisy, or off, your engine oil might need attention.',
      slug: 'how-to-check-your-bikes-engine-oil-level-step-by-step-guide'
    }
  ];
}
