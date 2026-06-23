import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { FormService } from '../c-services/form-service';

@Component({
  selector: 'app-test-drive',
  standalone: false,
  templateUrl: './test-drive.html',
  styleUrl: './test-drive.css',
})
export class TestDrive {

  enquiryForm: FormGroup;
  financeForm: FormGroup;
  tab: string = 'enquiry';

  constructor(
    private formService: FormService,
    private fb: FormBuilder
  ) {
    this.enquiryForm = this.fb.group({
      fullName: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      model: ['', Validators.required],
      message: ['']
    });

    this.financeForm = this.fb.group({
      fullName: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      model: ['', Validators.required],
      message: ['']
    });
  }

  submitEnquiry() {
    if (this.enquiryForm.invalid) {
      this.enquiryForm.markAllAsTouched();
      alert('Please fill all required fields.');
      return;
    }

    this.formService.enquiryForm(this.enquiryForm.value).subscribe(
      (response) => {
        console.log('Form submitted successfully:', response);
        alert('Your enquiry has been submitted successfully!');
        this.enquiryForm.reset();
      },
      (error) => {
        console.error('Error submitting form:', error);
        alert('There was an error submitting your enquiry. Please try again later.');
      }
    );
  }

  submitFinance() {
    if (this.financeForm.invalid) {
      this.financeForm.markAllAsTouched();
      alert('Please fill all required fields.');
      return;
    }

    this.formService.financeForm(this.financeForm.value).subscribe(
      (response) => {
        console.log('Form submitted successfully:', response);
        alert('Your finance request has been submitted successfully!');
        this.financeForm.reset();
      },
      (error) => {
        console.error('Error submitting form:', error);
        alert('There was an error submitting your finance request. Please try again later.');
      }
    );
  }
}
