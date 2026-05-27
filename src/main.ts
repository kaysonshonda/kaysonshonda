import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app-module';
// swiper element
import { register } from 'swiper/element/bundle';
register();


platformBrowser()
  .bootstrapModule(AppModule, {})
  .catch((err) => console.error(err));
