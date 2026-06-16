import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { TestDrive } from './test-drive/test-drive';
import { Services } from './services/services';
import { AboutUs } from './about-us/about-us';
import { ContactUs } from './contact-us/contact-us';
import { Blog } from './blogs/blog/blog';
import { BlogDetails } from './blogs/blog-details/blog-details';
import { VehicleSeries } from './product/vehicle-series/vehicle-series';

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
    path: 'blog',
    component: Blog,
  },
  {
    path: 'blog/:slug', // ':id' allows you to pass a dynamic parameter for specific blog posts
    component: BlogDetails,
  },

  {
    path: 'nx-series',
    component: VehicleSeries,
    data: { type: 'nx' },
  },
  {
    path: 'hornet-series',
    component: VehicleSeries,
    data: { type: 'hornet' },
  },
  {
    path: 'shine-series',
    component: VehicleSeries,
    data: { type: 'shine' },
  },
  {
    path: 'sp-series',
    component: VehicleSeries,
    data: { type: 'sp' },
  },
  {
    path: 'unicorn-series',
    component: VehicleSeries,
    data: { type: 'unicorn' },
  },
  {
    path: 'commuter-series',
    component: VehicleSeries,
    data: { type: 'commuter' },
  },
  {
    path: 'activa-series',
    component: VehicleSeries,
    data: { type: 'activa' },
  },
  {
    path: 'dio-series',
    component: VehicleSeries,
    data: { type: 'dio' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
