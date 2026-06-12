import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { TestDrive } from './test-drive/test-drive';
import { Services } from './services/services';
import { HondaShineSeries } from './product/honda-shine-series/honda-shine-series';
import { AboutUs } from './about-us/about-us';
import { ContactUs } from './contact-us/contact-us';
import { Blog } from './blogs/blog/blog';
import { BlogDetails } from './blogs/blog-details/blog-details';


TestDrive;
const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'about-us',
    component: AboutUs,
  },
  {
    path: 'contact-us',
    component: ContactUs,
  },
  {
    path: 'test-drive',
    component: TestDrive,
  },
  {
    path: 'services',
    component: Services,
  },
  {
    path: 'honda-shine-series',
    component: HondaShineSeries,
  },
  {
    path: 'blog',
    component: Blog,
  },
  {
    path: 'blog/:slug', // ':id' allows you to pass a dynamic parameter for specific blog posts
    component: BlogDetails,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
