import { Component, signal } from '@angular/core';
import { Router, NavigationStart  } from '@angular/router';
import { ViewportScroller } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('kaysonshonda');

  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {

    this.router.events.subscribe(event => {

      if (event instanceof NavigationStart) {
        this.viewportScroller.scrollToPosition([0, 0]);
      }

    });

  }

}
