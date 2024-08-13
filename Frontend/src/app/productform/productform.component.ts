import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productform',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],  // Include ReactiveFormsModule
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.css']  // Corrected from styleUrl to styleUrls
})
export class ProductformComponent {
  productForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      description: ['', Validators.required],
      imageUrl: ['', Validators.required],
      quantity: [0, [Validators.required, Validators.min(0)]],
      rating: [0, [Validators.required, Validators.min(0), Validators.max(5)]],
      comments: [''],
      category: ['', Validators.required],
      sale: [false],
      createdAt: [new Date(), Validators.required]
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      this.http.post('https://your-api-url/products', this.productForm.value)
        .subscribe(response => {
          console.log('Product submitted successfully', response);
        }, error => {
          console.error('Error submitting product', error);
        });
    }
  }
}
