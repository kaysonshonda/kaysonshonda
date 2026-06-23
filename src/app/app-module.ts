import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { CommonModule } from '@angular/common';
import { CustomCommonModule } from './common/common-module';
import { Home } from './home/home';
import { TestDrive } from './test-drive/test-drive';
import { Services } from './services/services';
import { AboutUs } from './about-us/about-us';
import { ContactUs } from './contact-us/contact-us';
import { Blog } from './blogs/blog/blog';
import { BlogDetails } from './blogs/blog-details/blog-details';
import { VehicleSeries } from './product/vehicle-series/vehicle-series';
import { PrivacyPolicy } from './privacy-policy/privacy-policy';

@NgModule({
  declarations: [
    App,
    Home,
    TestDrive,
    Services,
    AboutUs,
    ContactUs,
    Blog,
    BlogDetails,
    VehicleSeries,
    PrivacyPolicy,
  ],
  imports: [BrowserModule, AppRoutingModule, CommonModule, CustomCommonModule, FormsModule,ReactiveFormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
