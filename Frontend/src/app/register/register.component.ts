// register.component.ts
import { CommonModule } from '@angular/common';

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [FormsModule, CommonModule],
  standalone: true,
})
export class RegisterComponent {
  registrationData: any = {
    fullName: '',
    username: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    gender: '',
  };

  userDetails = [
    {
      label: 'Full Name',
      placeholder: 'name',
      type: 'text',
      model: 'fullName',
    },
    {
      label: 'Username',
      placeholder: 'username',
      type: 'text',
      model: 'username',
    },
    { label: 'Email', placeholder: 'email', type: 'email', model: 'email' },
    {
      label: 'Phone Number',
      placeholder: 'number',
      type: 'text',
      model: 'phoneNumber',
    },
    {
      label: 'Password',
      placeholder: 'password',
      type: 'password',
      model: 'password',
    },
    {
      label: 'Confirm Password',
      placeholder: 'password',
      type: 'password',
      model: 'confirmPassword',
    },
  ];
  form: any;

  onSubmit() {
    if (
      this.registrationData.password !== this.registrationData.confirmPassword
    ) {
      alert('Passwords do not match');
      return;
    }

    // Save to local storage
    localStorage.setItem(
      'registrationDeta  ils',
      JSON.stringify(this.registrationData)
    );
    // Provide feedback to the user
    alert('Registration successful!');
  }
}
