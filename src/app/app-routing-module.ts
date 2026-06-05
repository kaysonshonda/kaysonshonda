import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { TestDrive } from './test-drive/test-drive';
import { Services } from './services/services';
import { ShineSeries } from './product/shine-series/shine-series';

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
    path: 'test-drive',
    component: TestDrive,
  },
  {
    path: 'services',
    component: Services,
  },
  {
    path: 'shine-series',
    component: ShineSeries,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
