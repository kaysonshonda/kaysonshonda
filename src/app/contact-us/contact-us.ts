import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: false,
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.css',
})
export class ContactUs {
  submitForm(form: NgForm) {
    if (form.valid) {
      console.log(form.value);

      alert('Message Sent Successfully');

      form.reset();
    }
  }
}
