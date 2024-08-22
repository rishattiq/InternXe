import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  quantity: number;
  rating: number;
  comments: string;
  category: string;
  sale: boolean;
  createdAt: Date;
}

@Component({
  selector: 'app-admin-crud',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './admin-crud.component.html',
  styleUrls: ['./admin-crud.component.css'],
})
export class ProductTableComponent implements OnInit {
  products: Product[] = [];
  apiUrl = 'https://724c-39-40-5-153.ngrok-free.app/api/Product/getallproducts'; // API endpoint for fetching products
  deleteUrl = 'https://localhost:5079/api/Products/deleteproductbyid'; // Change to HTTPS as well

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.http.get<Product[]>(this.apiUrl, { responseType: 'json' }).subscribe(
      (products) => {
        this.products = products;
      },
      (error: HttpErrorResponse) => {
        console.error('Error fetching products:', error);
        alert('An error occurred while fetching products. Please try again later.');
      }
    );
  }
  

  deleteProduct(id: number) {
    const url = `${this.deleteUrl}/${id}`;
    this.http.delete(url).subscribe(
      () => {
        this.products = this.products.filter((product) => product.id !== id);
        console.log(`Product with ID ${id} deleted successfully.`);
      },
      (error: HttpErrorResponse) => {
        console.error('Error deleting product:', error);
      }
    );
  }
  Admin(){
    this.router.navigateByUrl('app-admin-dashboard')
  }

  Notifications(){
    this.router.navigateByUrl('app-notifications')
  }

  Products(){
    this.router.navigateByUrl('app-admin-crud')
  }
 
  Sales(){
    this.router.navigateByUrl('app-sales')
  }

  Users(){
    this.router.navigateByUrl('app-customers')
  }

  

  toggleSidebar(): void {
    const sidebar = document.querySelector('.sidebar') as HTMLElement;

    if (sidebar) {
        sidebar.classList.toggle('active');
    }
}

Productform(){
  this.router.navigateByUrl('app-product-add')
}
}
