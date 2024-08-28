import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../product/footer/footer.component';
import { FormsModule } from '@angular/forms';


interface Contact {
  id: number;
  name: string;
  email: '';
  message: '';
}
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NavbarComponent,FooterComponent, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: '',
    dateOfMessage: new Date().toISOString(), // Set to current date-time
    status: 'pending', // Set to a default value
  };
  apiUrl = 'http://localhost:5292/api/Contact/addmessage'; // Replace with your actual API endpoint
  constructor(private http: HttpClient) {}
  ContactForm() {
    this.http.post(this.apiUrl, this.contact).subscribe(
      (response) => {
        console.log('Thanks for contacting us', response);
        this.resetForm();
      },
      (error) => {
        console.log('Your message has not been forwarded', error);
      }
    );
  }

  resetForm() {
    this.contact = {
      name: '',
      email: '',
      message: '',
      dateOfMessage: new Date().toISOString(),
      status: 'pending',
    };
  }
}
