import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { LogInPageComponent } from './log-in-page/log-in-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { TshirtsComponent } from './product/tshirts/tshirts.component';
import { ProductformComponent } from './productform/productform.component';
import { CustomersComponent } from './admin-dashboard/customers/customers.component';


 


export const routes: Routes = [

  
  {
    path: 'app-register',
    component: RegisterComponent,
  },

  {
    path: 'app-dashboard',
    component: DashboardComponent,
  },
  
    {
        path: '',
        pathMatch: 'full',
        component:HomeComponent
    },
    {
      path: 'hero',
      component:HeroSectionComponent
    },

    {

      path: 'Register',
      component: RegisterComponent
    },

    {
        path: "Home",
        component: HomeComponent
    },
    {
        path: 'Product',
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
        component: ContactComponent
    },
    {
      path: 'AdminDashboard',
      component: AdminDashboardComponent,
      children:[
        {
          path: 'Customers',
          loadComponent: () => import('./admin-dashboard/customers/customers.component').then(m => m.CustomersComponent)
        },
        {
          path: 'Notifications',
          loadComponent: () => import('./admin-dashboard/notifications/notifications.component').then(m => m.NotificationsComponent)
        },
        {
          path: 'Sales',
          loadComponent: () => import('./admin-dashboard/sales/sales.component').then(m => m.SalesComponent)
        }
      ]
    },

    {
      path: 'Customers',
      component: CustomersComponent
    },

  {
    path: 'ProuctsList',
    component: ProductsListComponent
  }

  
];
