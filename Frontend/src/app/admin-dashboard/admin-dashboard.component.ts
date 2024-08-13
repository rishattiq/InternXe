// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { RouterLink } from '@angular/router';

// @Component({
//   selector: 'app-admin-dashboard',
//   standalone: true,
//   imports: [RouterLink,CommonModule],
//   templateUrl: './admin-dashboard.component.html',
//   styleUrl: './admin-dashboard.component.css'
// })
// export class AdminDashboardComponent {

//   constructor(){

//   }


//   toggleSidebar(): void {
//     const sidebar = document.querySelector('.sidebar') as HTMLElement;

//     if (sidebar) {
//         sidebar.classList.toggle('active');
//     }
// }
// }

import { Component, OnInit } from '@angular/core';
// Updated imports
import { ChartOptions, ChartType } from 'chart.js';

import { NgxChartsModule } from '@swimlane/ngx-charts';
// import { NgChartsModule } from 'ng2-charts';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './admin-dashboard.component.html',
   styleUrl: './admin-dashboard.component.css',
   imports: [NgxChartsModule] // Add NgxChartsModule here
})

export class AdminDashboardComponent implements OnInit {
  totalSales: number = 47600;
  totalOrders: number = 248000;
  totalCustomers: number = 189000;
  lowStockItems: number = 53;

  // Updated Chart.js Data
  salesData: any[] = [
    { data: [65000, 59000, 80000, 81000, 56000, 55000, 40000], label: 'Sales' }
  ];
  // Label array as strings or numbers
  salesLabels: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  chartOptions: ChartOptions = {
    responsive: true,
  };

  // ngx-charts Data remains the same
  customerData = [
    {
      "name": "New Customers",
      "value": 5240
    },
    {
      "name": "Returning Customers",
      "value": 8340
    }
  ];

  ngOnInit(): void {
    // Any initialization logic here
  }
}
