import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit {
  productUsedInDetails: any;
  constructor(private router: Router, private productService: ServiceService) {}
  ngOnInit(): void {
    this.productUsedInDetails = this.productService.getProduct();
    console.log('getting Products', this.productUsedInDetails);
  }
  navigateToProductPage() {
    this.router.navigateByUrl('Product');
  }
}
