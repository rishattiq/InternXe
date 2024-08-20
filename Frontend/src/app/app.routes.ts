import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';

import { RegisterLoginComponent } from './register-login/register-login.component';
import { TshirtsComponent } from './product/tshirts/tshirts.component';
import { ProductTableComponent } from './admin-crud/admin-crud.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { LogInPageComponent } from './log-in-page/log-in-page.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CustomersComponent } from './admin-dashboard/customers/customers.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { CheckoutComponent } from './product/checkout/checkout.component';

export const routes: Routes = [

  { 
    path: '', 
    component: RegisterLoginComponent
  
  },



  {
    path: 'app-dashboard',
    component: DashboardComponent,
  },
  
    {
      path: 'hero',
      component:HeroSectionComponent
    },

    {
        path: "Home",
        component: HomeComponent
    },
    {
        path: 'Home/Product',
        component: ProductComponent,
  
        children:[
          {
            path: 'shirts',
            loadComponent: () => import('./product/tshirts/tshirts.component').then(m => m.TshirtsComponent)
          },
          {
            path: 'pants',
            loadComponent: () => import('./product/pants/pants.component').then(m => m.PantsComponent)
          },
          {
            path: 'accessories',
            loadComponent: () => import('./product/accessories/accessories.component').then(m => m.AccessoriesComponent)
          },
          {
            path: 'shoes',
            loadComponent: () => import('./product/shoes/shoes.component').then(m => m.ShoesComponent)
          }
        ]
         
    
    },
    // {
    //   path: 'Home/Product/shirts',
    //   component: TshirtsComponent,
    // },

    // {
    //   path: 'shirts',
    //   loadComponent: () => import('./product/tshirts/tshirts.component').then(m => m.TshirtsComponent)
    // },
    // {
    //   path: 'pants',
    //   loadComponent: () => import('./product/pants/pants.component').then(m => m.PantsComponent)
    // },
    // {
    //   path: 'accessories',
    //   loadComponent: () => import('./product/accessories/accessories.component').then(m => m.AccessoriesComponent)
    // },
    // {
    //   path: 'shoes',
    //   loadComponent: () => import('./product/shoes/shoes.component').then(m => m.ShoesComponent)
    // },

  {
    path: 'shirts',
    loadComponent: () =>
      import('./product/tshirts/tshirts.component').then(
        (m) => m.TshirtsComponent
      ),
  },
  {
    path: 'pants',
    loadComponent: () =>
      import('./product/pants/pants.component').then((m) => m.PantsComponent),
  },
  {
    path: 'accessories',
    loadComponent: () =>
      import('./product/accessories/accessories.component').then(
        (m) => m.AccessoriesComponent
      ),
  },
  {
    path: 'shoes',
    loadComponent: () =>
      import('./product/shoes/shoes.component').then((m) => m.ShoesComponent),
  },

  {
    path: 'About',
    component: AboutComponent,
    // children: [
    //     {
    //         path: 'Product',
    //         component: ProductComponent
    //     }
    // ]
  },
  {
    path: 'Contact',
    component: ContactComponent,
  },
  {
    path: 'AdminDashboard',
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
    ],
  },

  {
    path: 'Customers',
    component: CustomersComponent,
  },

  {
    path: 'ProductsList',
    component: ProductsListComponent,
  },

  {
    path: 'Invoice',
    component: InvoiceComponent,
  },

  {
    path: 'app-checkout',
    component: CheckoutComponent,
  },
];
