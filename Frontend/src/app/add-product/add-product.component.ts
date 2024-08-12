import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {
  constructor() {}
  formData: any = {
    "name": '',
    "unitPrice": '',
    "stockQuantity":'' ,
    "description": '',
  };

  http = inject(HttpClient);
  onSubmit(formData: any) {
    this.http.post('http://localhost:5080/api/Product', formData).subscribe(
      (response) => {
        console.log('Data posted successfully:', response);
        // Handle successful response
      },
      (error) => {
        console.error('Error posting data:', error);
        // Handle error
      }
    );
  }
}