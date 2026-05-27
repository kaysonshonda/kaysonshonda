import { NgModule,  CUSTOM_ELEMENTS_SCHEMA,
  provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { CommonModule } from '@angular/common';
import { CustomCommonModule } from './common/common-module';
import { Home } from './home/home';

@NgModule({
  declarations: [App, Home],
  imports: [BrowserModule, AppRoutingModule, CommonModule, CustomCommonModule,  FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
