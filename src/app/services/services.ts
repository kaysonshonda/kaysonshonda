import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { FormService } from '../c-services/form-service';

@Component({
  selector: 'app-services',
  standalone: false,
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
successMessage = '';
  tab: string = 'vehicle';
  vehicleServiceForm: FormGroup;
  sparePartsForm: FormGroup;
  insuranceForm: FormGroup
  warrantyForm: FormGroup;

  constructor(
    private formService: FormService,
    private fb: FormBuilder
  ) {
    // Initialize forms here if needed
    this.vehicleServiceForm = this.fb.group({
      fullName: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      model: ['', Validators.required],
      serviceType: ['', Validators.required],
      message: ['']
    });

    this.sparePartsForm = this.fb.group({
      fullName: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      model: ['', Validators.required],
      partName: ['', Validators.required],
      message: ['']
    });

    this.insuranceForm = this.fb.group({
      fullName: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      model: ['', Validators.required],
      date: ['', Validators.required],
      message: ['']
    });

    this.warrantyForm = this.fb.group({
      fullName: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      model: ['', Validators.required],
      date: ['', Validators.required],
      message: ['']
    });
  }
  // VEHICLE SERVICES
  submitVehicle() {
    if (this.vehicleServiceForm.invalid) {
      this.vehicleServiceForm.markAllAsTouched();
      alert('Please fill all required fields.');
      return;
    }

    this.formService.vehicleServiceForm(this.vehicleServiceForm.value).subscribe(
      (response) => {
        console.log('Form submitted successfully:', response);
        // alert('Your Vehicle Service form has been submitted successfully!');
          this.successMessage = 'Thank you! Your Vehicle Service request has been submitted successfully.';

        this.vehicleServiceForm.reset();
      },
      (error) => {
        console.error('Error submitting form:', error);
        alert('There was an error submitting your Vehicle Service form. Please try again later.');
      }
    );
    this.tab = 'vehicle';
  }

  // SPARE PARTS
  submitParts() {
    if (this.sparePartsForm.invalid) {
      this.sparePartsForm.markAllAsTouched();
      alert('Please fill all required fields.');
      return;
    }

    this.formService.sparePartsForm(this.sparePartsForm.value).subscribe(
      (response) => {
        console.log('Form submitted successfully:', response);
        // alert('Your Spare Parts form has been submitted successfully!');
          this.successMessage = 'Thank you! Your Spare Parts request has been submitted successfully.';
        this.sparePartsForm.reset();
      },
      (error) => {
        console.error('Error submitting form:', error);
        alert('There was an error submitting your Spare Parts form. Please try again later.');
      }
    );
    this.tab = 'parts';
  }

  // INSURANCE
  submitInsurance() {
    if (this.insuranceForm.invalid) {
      this.insuranceForm.markAllAsTouched();
      alert('Please fill all required fields.');
      return;
    }

    this.formService.insuranceForm(this.insuranceForm.value).subscribe(
      (response) => {
        console.log('Form submitted successfully:', response);
        // alert('Your Insurance form has been submitted successfully!');
        this.successMessage = 'Thank you! Your Vehicle Insurance Service request has been submitted successfully.';

        this.insuranceForm.reset();
      },
      (error) => {
        console.error('Error submitting form:', error);
        alert('There was an error submitting your Insurance form. Please try again later.');
      }
    );
    this.tab = 'insurance';
  }

  // WARRANTY
  submitWarranty() {
    if (this.warrantyForm.invalid) {
      this.warrantyForm.markAllAsTouched();
      alert('Please fill all required fields.');
      return;
    }

    this.formService.warrantyForm(this.warrantyForm.value).subscribe(
      (response) => {
        console.log('Form submitted successfully:', response);
        alert('Your Warranty form has been submitted successfully!');
        this.warrantyForm.reset();
      },
      (error) => {
        console.error('Error submitting form:', error);
        alert('There was an error submitting your Warranty form. Please try again later.');
      }
    );
    this.tab = 'warranty';
  }
}
