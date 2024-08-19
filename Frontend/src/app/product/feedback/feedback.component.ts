import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css',
})
export class FeedbackComponent {
  constructor(private router: Router) {}
  backToProduct() {
    this.router.navigateByUrl('Product');
  }
}
