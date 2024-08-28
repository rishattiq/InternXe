import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private selectedProduct: any;
  setProduct(Product: any) {
    this.selectedProduct = Product;
  }

  getProduct() {
    return this.selectedProduct;
  }
  constructor() {}

  customerId: number = 0;

  setCustomerId(id: number) {
    this.customerId = id;
    localStorage.setItem('customerid', id.toString());
  }

  getCustomerId(): number | null {
    this.customerId = Number(localStorage.getItem('customerid'));
    return this.customerId;
  }
}
