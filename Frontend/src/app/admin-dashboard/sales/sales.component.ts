import { inject, Component } from '@angular/core';
import { APIService } from '../../service/api-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.css',
})
export class SalesComponent {
  userservice = inject(APIService);
  orderlist: any[] = [];

  constructor() {}

  ngOnInit() {
    this.orderList();
  }

  orderList() {
    this.userservice.get_orders().subscribe((data: any) => {
      this.orderlist = data;
    });
  }
}
