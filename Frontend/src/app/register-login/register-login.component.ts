import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register-login.component.html',
  styleUrl: './register-login.component.css'
})
export class RegisterLoginComponent implements OnInit {
  signupUsers: any[] = [];
  signupObj: any = {
    userName: '',
    email: '',
    password: ''
  };
  loginObj: any = {
    userName: '',
    password: ''
  }


  constructor(private router: Router) { }
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
    console.log("runing");
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signUpUsers', JSON.stringify(this.signupUsers));
    this.signupObj = {
      userName: '',
      email: '',
      password: ''
    };


  }
  onLogin() {
    const isUserExist = this.signupUsers.find(m => m.userName == this.loginObj.userName && m.password == this.loginObj.password);
    if (isUserExist != undefined) {
      alert('User Login Sucessfully')
      this.router.navigateByUrl('Home');
    }
    else {
      alert('Wrong Credentials')
    }
  }



}
