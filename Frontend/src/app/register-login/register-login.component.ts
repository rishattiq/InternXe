import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './register-login.component.html',
  styleUrls: ['./register-login.component.css'], // Corrected 'styleUrl' to 'styleUrls'
})
export class RegisterLoginComponent implements OnInit {
  signupUsers: any[] = [];
  registerForm: FormGroup; // Corrected the variable name
  loginForm: FormGroup; // Added the FormGroup for login

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required],
    });

    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if (typeof localStorage !== 'undefined') {
      const localData = localStorage.getItem('signUpUsers');
      if (localData != null) {
        this.signupUsers = JSON.parse(localData);
      }
    } else {
      console.error('localStorage is not available');
    }
  }

  onSignup() {
    if (this.registerForm.valid) {
      this.signupUsers.push(this.registerForm.value);
      localStorage.setItem('signUpUsers', JSON.stringify(this.signupUsers));

      this.http
        .post(
          'http://localhost:5079/api/Customer/register', // Corrected the API endpoint
          this.registerForm.value
        )
        .subscribe(
          (response) => {
            console.log('User registered successfully', response);
          },
          (error) => {
            console.error('Error registering user', error);
          }
        );
    }
  }

  onLogin() {
    const loginData = this.loginForm.value;
    if (this.loginForm.valid) {
      this.http
        .post(
          'http://localhost:5079/api/Customer/login',
          this.loginForm.value,
          { responseType: 'text' } // Expect a plain text response
        )
        .subscribe(
          (response: string) => {
            console.log('User logged in successfully');
            alert('User Login Successfully');
            // this.router.navigateByUrl('Home');
          },
          (error) => {
            console.error('Error logging user');
            alert('Wrong Credentials');
          }
        );
    }
  }
}
