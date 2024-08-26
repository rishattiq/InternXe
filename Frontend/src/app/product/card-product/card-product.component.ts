import { Component, Input } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-card-product',
  standalone: true,
  imports: [ProductDetailComponent, RouterOutlet],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.css',
})
export class CardProductComponent {
  @Input() Product: any;
  @Input() addTOcartFunc: any;
  // @Input() QuanFunc: any;

  dataForDetail: any[] = [];

  constructor(private router: Router, private productService: ServiceService) {}
  navigateToProductDetail(gettingDataForDetail: any) {
    // console.log(gettingDataForDetail);
    this.productService.setProduct(gettingDataForDetail);
    this.router.navigateByUrl('app-product-detail');
  }
}
