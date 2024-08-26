import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
  selector: 'app-product-add',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent {
  newProduct: Product = {
    id: 0,
    name: '',
    price: 0,
    description: '',
    imageUrl: '',
    quantity: 0,
    rating: 0,
    comments: '',
    category: '',
    sale: false,
    createdAt: new Date(),
  };
  apiUrl = 'https://476d-39-40-97-214.ngrok-free.app/api/Product/addproduct'; // Replace with your actual API endpoint
  products: any;
  constructor(private http: HttpClient, private router: Router) {}
  addProduct() {
    this.http.post<Product>(this.apiUrl, this.newProduct).subscribe(
      (response) => {
        console.log('Product added successfully:', response);
        // Optionally, you can reset the form or redirect the user after a successful post
        this.resetForm();
      },
      (error) => {
        console.error('Error adding product:', error);
      }
    );
  }
  resetForm() {
    this.newProduct = {
      id: 0,
      name: '',
      price: 0,
      description: '',
      imageUrl: '',
      quantity: 0,
      rating: 0,
      comments: '',
      category: '',
      sale: false,
      createdAt: new Date(),
    };
  }

  Products() {
    this.router.navigateByUrl('app-admin-crud');
  }
}
