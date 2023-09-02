import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  constructor(private http: HttpClient) {}

  registerUser(formData: any) {
    // Assuming you have a backend API endpoint for registration
    const apiUrl = 'http://localhost:4200/user/register';

    this.http.post(apiUrl, formData).subscribe(
      (response) => {
        // Handle successful registration
        console.log('Registration successful', response);
      },
      (error) => {
        // Handle registration error
        console.error('Registration error', error);
      }
    );
  }
}
