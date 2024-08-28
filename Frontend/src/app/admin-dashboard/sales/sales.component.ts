import { inject, Component } from '@angular/core';
import { APIService } from '../../service/api-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.css',
})
export class SalesComponent {
  userservice = inject(APIService);
  orderlist: Array<any> = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.Orders();
  }

  Orders() {
    this.userservice.get_orders().subscribe({
      next: (data: any) => {
        console.log('Orders data:', data);
        this.orderlist = data;
      },
      error: (error: any) => {
        console.error('Error fetching orders:', error);
        if (error.status === 200 && typeof error.error.text === 'string') {
          console.log('Received HTML instead of JSON:', error.error.text);
        } else {
          console.error('Error:', error.message);
        }
      },
    });
  }

  Admin() {
    this.router.navigateByUrl('app-admin-dashboard');
  }

  Notifications() {
    this.router.navigateByUrl('app-notifications');
  }

  Products() {
    this.router.navigateByUrl('app-admin-crud');
  }

  Sales() {
    this.router.navigateByUrl('app-sales');
  }

  Users() {
    this.router.navigateByUrl('app-customers');
  }

  toggleSidebar(): void {
    const sidebar = document.querySelector('.sidebar') as HTMLElement;

    if (sidebar) {
      sidebar.classList.toggle('active');
    }
  }
}
