import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-log-in-page',
  standalone: true,
  imports: [RouterLink, RouterOutlet, FormsModule],
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.css'], // Corrected to 'styleUrls'
})
export class LogInPageComponent {
  userObj: any = {
    email: '',
    password: '',
  };

  constructor(private router: Router) {}

  onLogin() {
    if (
      this.userObj.email === 'admin@gmail.com' &&
      this.userObj.password === '1234'
    ) {
      alert('Login successful');
      localStorage.setItem('loginUser', this.userObj.email); // Use email or username as needed
      this.router.navigateByUrl('app-dashboard');
    } else {
      alert('Wrong credentials');
      this.userObj.email = '';
      this.userObj.password = '';
    }
  }

  onRegister() {
    console.log('Register clicked');
    this.router.navigateByUrl('app-register');
  }
}
