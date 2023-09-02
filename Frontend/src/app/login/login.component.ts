import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(private http: HttpClient, private router: Router) {}

  loginUser(formData: any) {
    // Assuming you have a backend API endpoint for authentication
    const apiUrl = 'http://localhost:4200/user/login';

    this.http.post(apiUrl, formData).subscribe(
      (response) => {
        // Handle successful login
        console.log('Login successful', response);

        // Redirect the user to the homepage using Angular Router
        this.router.navigate(['/home']);
      },
      (error) => {
        // Handle login error
        console.error('Login error', error);
      }
    );
  }
}
