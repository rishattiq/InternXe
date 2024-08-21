import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

interface Contact {
  id: number;
  name: string;
  email: '';
  message: '';
}
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contact: Contact = {
    id: 0,
    name: '',
    email: '',
    message: '',
  };
  apiUrl = 'http://localhost:5292/api/Product/addproduct'; // Replace with your actual API endpoint
  contacts: any;
  constructor(private http: HttpClient) {}
  ContactForm() {
    this.http.post<Contact>(this.apiUrl, this.contacts).subscribe(
      (response) => {
        console.log('Thanks for contacting us', response);
      },
      (error) => {
        console.log('Your message has not been forwarded', error);
      }
    );
  }
}
