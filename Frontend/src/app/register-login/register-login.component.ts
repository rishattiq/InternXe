import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { APIService } from '../service/api-service.service';
import { ServiceService } from '../product/service.service';

@Component({
  selector: 'app-register-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterOutlet],
  templateUrl: './register-login.component.html',
  styleUrls: ['./register-login.component.css'],
})
export class RegisterLoginComponent implements OnInit {
  signupUsers: any[] = [];
  registerForm: FormGroup;
  loginForm: FormGroup;
  passwordMismatch: boolean = false;
  loginError: boolean = false;

  private readonly adminCredentials = {
    username: 'internxe',
    password: '1234',
  };
  apiService = inject(ServiceService);

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {
    this.registerForm = this.fb.group(
      {
        username: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        confirmpassword: ['', Validators.required],
      },
      { validators: this.passwordMatchValidator }
    );

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

  passwordMatchValidator(form: FormGroup): { [key: string]: boolean } | null {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmpassword')?.value;
    return password && confirmPassword && password !== confirmPassword
      ? { mismatch: true }
      : null;
  }

  onSignup() {
    if (this.registerForm.valid && !this.passwordMismatch) {
      this.signupUsers.push(this.registerForm.value);
      localStorage.setItem('signUpUsers', JSON.stringify(this.signupUsers));

      this.http
        .post(
          'http://localhost:5292/api/Customer/register',
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
    } else {
      if (this.registerForm.invalid) {
        Object.keys(this.registerForm.controls).forEach((field) => {
          const control = this.registerForm.get(field);
          control?.markAsTouched({ onlySelf: true });
        });
      }
      if (this.passwordMismatch) {
        this.registerForm.get('confirmpassword')?.markAsTouched();
      }
    }
  }

  onLogin() {
    const loginData = this.loginForm.value;

    // Check if credentials match admin credentials
    if (
      loginData.username === this.adminCredentials.username &&
      loginData.password === this.adminCredentials.password
    ) {
      this.router.navigateByUrl('/app-admin-dashboard'); // Adjust the route as needed
      return;
    }

    // Normal login logic
    if (this.loginForm.valid) {
      this.http
        .post<number>(
          'http://localhost:5292/api/Customer/login',
          this.loginForm.value,
          { responseType: 'text' as 'json' }
        )
        .subscribe(
          (response: number) => {
            console.log('User logged in successfully');
            alert('User Login Successfully');
            this.apiService.setCustomerId(response);
            console.log(this.apiService.getCustomerId());
            this.router.navigateByUrl('home');
          },
          (error) => {
            console.error('Error logging user');
            alert('Wrong Credentials');
          }
        );
    } else {
      Object.keys(this.loginForm.controls).forEach((field) => {
        const control = this.loginForm.get(field);
        control?.markAsTouched({ onlySelf: true });
      });
      this.loginError = true;
    }
  }

  get passwordControl(): AbstractControl | null {
    return this.registerForm.get('password');
  }

  get confirmPasswordControl(): AbstractControl | null {
    return this.registerForm.get('confirmpassword');
  }

  get emailControl(): AbstractControl | null {
    return this.registerForm.get('email');
  }
}
