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
  successMessage = '';
  isLoadingEnquiry = false;
  isLoadingFinance = false;
  enquiryForm: FormGroup;
  financeForm: FormGroup;
  tab: string = 'enquiry';

  constructor(
    private formService: FormService,
    private fb: FormBuilder,
  ) {
    this.enquiryForm = this.fb.group({
      fullName: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      model: ['', Validators.required],
      message: [''],
    });

    this.financeForm = this.fb.group({
      fullName: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      model: ['', Validators.required],
      message: [''],
    });
  }

  submitEnquiry() {
    if (this.enquiryForm.invalid) {
      this.enquiryForm.markAllAsTouched();
      // alert('Please fill all required fields.');
      return;
    }
    this.isLoadingEnquiry = true;
    this.formService.enquiryForm(this.enquiryForm.value).subscribe({
      next: (response) => {
        this.successMessage = 'Thank you! Your enquiry has been submitted successfully.';
        this.enquiryForm.reset();
        this.isLoadingEnquiry = false;
      },
      error: (error) => {
        console.error(error);
        this.isLoadingEnquiry = false;
      },
    });
  }

  submitFinance() {
    if (this.financeForm.invalid) {
      this.financeForm.markAllAsTouched();
      // alert('Please fill all required fields.');
      return;
    }

    this.isLoadingFinance = true;

    this.formService.financeForm(this.financeForm.value).subscribe({
      next: (response) => {
        this.successMessage = 'Thank you! Your finance request has been submitted successfully.';
        this.financeForm.reset();
        this.isLoadingFinance = false;
      },
      error: (error) => {
        console.error(error);
        this.isLoadingFinance = false;
      },
    });
  }
}
