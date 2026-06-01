import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-services',
  standalone: false,
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {

   tab: string = 'vehicle';

  // ================= VEHICLE SERVICES =================
  submitVehicle(form: NgForm) {
    if (form.invalid) return;

    console.log('Vehicle Service Data:', form.value);

    // API call example
    // this.http.post('your-api-url/vehicle', form.value).subscribe();
    form.resetForm();
    this.tab = 'vehicle';
  }

  // ================= SPARE PARTS =================
  submitParts(form: NgForm) {
    if (form.invalid) return;

    console.log('Parts Enquiry:', form.value);

    // API call example
    // this.http.post('your-api-url/parts', form.value).subscribe();
    form.resetForm();
    this.tab = 'parts';
  }

  // ================= INSURANCE =================
  submitInsurance(form: NgForm) {
    if (form.invalid) return;

    console.log('Insurance Request:', form.value);

    // API call example
    // this.http.post('your-api-url/insurance', form.value).subscribe();
    form.resetForm();
    this.tab = 'insurance';
  }

  // ================= WARRANTY =================
  submitWarranty(form: NgForm) {
    if (form.invalid) return;

    console.log('Warranty Request:', form.value);

    // API call example
    // this.http.post('your-api-url/warranty', form.value).subscribe();
    form.resetForm();
    this.tab = 'warranty';
  }
}
