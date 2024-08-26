import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductComponent } from '../product.component';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent {
  constructor(private router: Router) {}
  navigateToHome() {
    this.router.navigateByUrl('Product');
  }
}
