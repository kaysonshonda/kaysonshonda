import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { FormService } from '../c-services/form-service';

@Component({
  selector: 'app-contact-us',
  standalone: false,
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.css',
})
export class ContactUs {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder,
    private formService: FormService
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['']
    });
  }

  submitForm() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      alert('Please fill all required fields.');
      return;
    }

    this.formService.submitContactUsForm(this.contactForm.value).subscribe(
      (response) => {
        console.log('Form submitted successfully:', response);
        alert('Your message has been sent successfully!');
        this.contactForm.reset();
      },
      (error) => {
        console.error('Error submitting form:', error);
        alert('There was an error submitting your message. Please try again later.');
      }
    );
  }
}
