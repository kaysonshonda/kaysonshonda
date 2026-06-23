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

  financeForm(formData: any) {
    const url = `${this.baseUrl}/finance.php`;
    return this.http.post(url, formData, { headers: this.headers });
  }

  vehicleServiceForm(formData: any) {
    const url = `${this.baseUrl}/vehicle-service.php`;
    return this.http.post(url, formData, { headers: this.headers });
  }

  sparePartsForm(formData: any) {
    const url = `${this.baseUrl}/spare-parts.php`;
    return this.http.post(url, formData, { headers: this.headers });
  }

  insuranceForm(formData: any) {
    const url = `${this.baseUrl}/insurance.php`;
    return this.http.post(url, formData, { headers: this.headers });
  }

  warrantyForm(formData: any) {
    const url = `${this.baseUrl}/warranty.php`;
    return this.http.post(url, formData, { headers: this.headers });
  }
}
