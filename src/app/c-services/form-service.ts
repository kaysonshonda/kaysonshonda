import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  baseUrl: string = environment.apiUrl
  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(
    private http: HttpClient
  ) { }

  submitTestDriveForm(formData: any) {
    const url = `${this.baseUrl}/index.php`;
    return this.http.post(url, formData, { headers: this.headers });
  }

  submitContactUsForm(formData: any) {
    const url = `${this.baseUrl}/contact-us.php`;
    return this.http.post(url, formData, { headers: this.headers });
  }

  enquiryForm(formData: any) {
    const url = `${this.baseUrl}/enquiry.php`;
    return this.http.post(url, formData, { headers: this.headers });
  }
}
