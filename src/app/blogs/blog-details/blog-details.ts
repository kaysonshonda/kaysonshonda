import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogData } from '../data/blog-data';

@Component({
  selector: 'app-blog-details',
  standalone: false,
  templateUrl: './blog-details.html',
  styleUrl: './blog-details.css',
})
export class BlogDetails implements OnInit  {
  blog: any;

  constructor(
    private route: ActivatedRoute,
    private blogData: BlogData
  ) {}

  ngOnInit(): void {

    const slug = this.route.snapshot.paramMap.get('slug');

    this.blog = this.blogData.blogs.find(
      x => x.slug === slug
    );

  }

}
