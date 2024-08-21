import { Routes } from '@angular/router';

import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

import { RegisterLoginComponent } from './register-login/register-login.component';

import { ProductTableComponent } from './admin-crud/admin-crud.component';
import { ProductAddComponent } from './product-add/product-add.component';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CustomersComponent } from './admin-dashboard/customers/customers.component';

import { InvoiceComponent } from './invoice/invoice.component';
import { CheckoutComponent } from './product/checkout/checkout.component';

import { FeedbackComponent } from './product/feedback/feedback.component';

export const routes: Routes = [
  {
    path: '',
    component: RegisterLoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'app-feedback',
    component: FeedbackComponent,
  },

  {
    path: 'Product',
    component: ProductComponent,
  },

  {
    path: 'About',
    component: AboutComponent,
  },
  {
    path: 'Contact',
    component: ContactComponent,
  },
  {
    path: 'admindashboard',
    component: AdminDashboardComponent,
    children: [
      {
        path: 'Customers',
        loadComponent: () =>
          import('./admin-dashboard/customers/customers.component').then(
            (m) => m.CustomersComponent
          ),
      },
      {
        path: 'Notifications',
        loadComponent: () =>
          import(
            './admin-dashboard/notifications/notifications.component'
          ).then((m) => m.NotificationsComponent),
      },
      {
        path: 'Sales',
        loadComponent: () =>
          import('./admin-dashboard/sales/sales.component').then(
            (m) => m.SalesComponent
          ),
      },
      {
        path: 'Adminproduct',
        loadComponent: () =>
          import('./admin-crud/admin-crud.component').then(
            (m) => m.ProductTableComponent
          ),
      },
    ],
  },

  {
    path: 'Customers',
    component: CustomersComponent,
  },

  {
    path: 'Invoice',
    component: InvoiceComponent,
  },

  {
    path: 'app-checkout',
    component: CheckoutComponent,
  },
  {
    path: 'app-admin-crud',
    component: ProductTableComponent,
  },
  {
    path: 'app-product-add',
    component: ProductAddComponent,
  },
];
