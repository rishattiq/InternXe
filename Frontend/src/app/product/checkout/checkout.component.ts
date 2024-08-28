import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule, FormsModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'], // Corrected to styleUrls
})
export class CheckoutComponent {
  // Dependency Injection using `inject` for the service
  apiService = inject(ServiceService);
  customerid = this.apiService.getCustomerId(); // Assuming this is correctly implemented

  constructor(private router: Router, private http: HttpClient) {}

  // Define `order` object with appropriate types
  order: any = {
    customerId: this.customerid,
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    shippingAddress: '',
  };

  apiUrl = 'http://localhost:5292/api/Order/createorder'; // Replace with your actual API endpoint

  // Method to handle order creation and navigation
  navigateToHome() {
    this.http.post(this.apiUrl, this.order).subscribe(
      (response) => {
        console.log('Order created successfully:', response);
        this.router.navigateByUrl('Invoice');
      },
      (error) => {
        console.error('Error creating order:', error);
      }
    );
  }
}
