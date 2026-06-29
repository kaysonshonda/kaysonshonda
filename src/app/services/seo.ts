import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })

@Injectable({
  providedIn: 'root',
})
export class Seo {
  private readonly baseUrl = 'https://www.kaysonshonda.com';

  constructor(
    private meta: Meta,
    private title: Title,
    private router: Router
  ) {}

  updateMetaTags(config: {
    title: string;
    description: string;
    keywords: string;
  }) {

    // Title
    this.title.setTitle(config.title);

    // Meta Tags
    this.meta.updateTag({
      name: 'description',
      content: config.description
    });

    this.meta.updateTag({
      name: 'keywords',
      content: config.keywords
    });

    // Canonical URL
    this.updateCanonicalUrl(this.baseUrl + this.router.url);
  }

  private updateCanonicalUrl(url: string): void {
    let link: HTMLLinkElement =
      document.querySelector("link[rel='canonical']") || document.createElement('link');

    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', url);

    if (!link.parentNode) {
      document.head.appendChild(link);
    }
  }
}
