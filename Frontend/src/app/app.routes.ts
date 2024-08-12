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


 


export const routes: Routes = [

  { 
    path: '', 
    component: LogInPageComponent
  
  },

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
        component:RegisterComponent
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
    }
];
