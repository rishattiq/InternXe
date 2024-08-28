import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css',
})
export class InvoiceComponent {
  constructor(private route: Router) {}
  backToProduct() {
    this.route.navigateByUrl('Product');
  }
}
