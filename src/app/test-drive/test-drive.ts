import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-test-drive',
  standalone: false,
  templateUrl: './test-drive.html',
  styleUrl: './test-drive.css',
})
export class TestDrive {

    tab: string = 'enquiry';

  submitEnquiry(form: NgForm) {
    console.log('Test Drive Enquiry:', form.value);
    form.reset();
  }

  submitFinance(form: NgForm) {
    console.log('Finance Request:', form.value);
    form.reset();
  }
}
