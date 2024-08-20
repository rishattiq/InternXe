import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

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
  imports: [CommonModule],
  templateUrl: './admin-crud.component.html',
  styleUrls: ['./admin-crud.component.css'],
})
export class ProductTableComponent implements OnInit {
  products: Product[] = [];
  apiUrl = 'http://localhost:5079/api/Products/getallproducts'; // Replace with your actual API endpoint
  apiUrl2 = 'http://localhost:5079/api/Products/deleteproductbyid'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Make the API call here instead of in the constructor
    this.http.get<Product[]>(this.apiUrl).subscribe(
      (products) => {
        this.products = products; // Assign the retrieved products to the array
      },
      (error) => {
        console.error('Error fetching products:', error);
        // Handle the error, possibly display an error message to the user
      }
    );
  }

  // Uncomment and implement the deleteProduct method if needed
  deleteProduct(id: number) {
    const url = `${this.apiUrl2}/${id}`;  // Fixed string interpolation here
    this.http.delete(url).subscribe(
      () => {
        this.products = this.products.filter((product) => product.id !== id);
      },
      (error) => {
        console.error('Error deleting product:', error);
      }
    );
  }
}
