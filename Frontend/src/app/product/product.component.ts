import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CardProductComponent } from './card-product/card-product.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    CardProductComponent,
    FeedbackComponent,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  categoryList = ['All-Products', 'Shoes', 'T-Shirts', 'Jeans', 'Bags'];
  // prdocutlist2 = [
  //   {
  //     productId: 1,
  //     rating: 4,
  //     isOffer: true,
  //     quantity: 11,
  //     productName: 'Nike TurboFlex 3000',
  //     category: 'Shoes',
  //     price: 1050,
  //     discount: 10,
  //     availability: true,
  //     imageUrl:
  //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQGNXqEgY63RQ9WmYDGpjmXAEEjABiBqBHBg&s',
  //   },
  // ];
  productList = [
    {
      productId: 1,
      rating: 4,
      isOffer: true,
      quantity: 11,
      productName: 'Nike TurboFlex 3000',
      category: 'Shoes',
      price: 1050,
      discount: 10,
      availability: true,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQGNXqEgY63RQ9WmYDGpjmXAEEjABiBqBHBg&s',
    },
    // {
    //   productId: 1,
    //   rating: 4,
    //   isOffer: true,
    //   quantity: 11,
    //   productName: 'Nike TurboFlex 3000',
    //   category: 'Bags',
    //   price: 1050,
    //   discount: 10,
    //   availability: true,
    //   imageUrl:
    //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQGNXqEgY63RQ9WmYDGpjmXAEEjABiBqBHBg&s',
    // },
    {
      productId: 2,
      rating: 3,
      isOffer: false,
      quantity: 8,
      productName: 'Eclipse Denim',
      category: 'Jeans',
      price: 799,
      discount: 5,
      availability: true,
      imageUrl:
        'https://assets.ajio.com/medias/sys_master/root/20240430/C6Hk/6630475505ac7d77bb332482/-1117Wx1400H-467162954-black-MODEL.jpg',
    },
    {
      productId: 3,
      rating: 3,
      isOffer: false,
      quantity: 0,
      productName: 'Brown Quantum Henley',
      category: 'T-Shirts',
      price: 349,
      discount: 15,
      availability: false,
      imageUrl:
        'https://www.marni.com/dw/image/v2/AAPK_PRD/on/demandware.static/-/Sites-marni-master-catalog/default/dwd9430673/images/large/HUMU0223X2_UTCZ68_00R10_F.jpg?sw=837&sh=1116',
    },
    {
      productId: 4,
      rating: 5,
      isOffer: true,
      quantity: 29,
      productName: 'Nike Horizon X',
      category: 'Shoes',
      price: 1199,
      discount: 0,
      availability: true,
      imageUrl:
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D',
    },
    {
      productId: 5,
      rating: 1,
      isOffer: true,
      quantity: 3,
      productName: 'White Phantom Glide',
      category: 'Shoes',
      price: 89,
      discount: 20,
      availability: true,
      imageUrl:
        'https://rukminim2.flixcart.com/image/450/500/xif0q/shoe/7/z/r/8-white-leaf-8-urbanbox-white-black-original-imagvgf4cuzs2hrw.jpeg?q=90&crop=true',
    },
    {
      productId: 6,
      rating: 4,
      isOffer: false,
      quantity: 17,
      productName: 'Black Zenith Casual',
      category: 'T-Shirts',
      price: 2399,
      discount: 0,
      availability: true,
      imageUrl:
        'https://cdn-img.prettylittlething.com/4/3/7/0/43700742a339775e9f9cee8b0acf863ceb14a07b_cmn7259_2.jpg?imwidth=600',
    },
    {
      productId: 7,
      rating: 4,
      isOffer: true,
      quantity: 0,
      productName: 'Ridge Fade',
      category: 'Jeans',
      price: 149,
      discount: 25,
      availability: false,
      imageUrl:
        'https://assets.ajio.com/medias/sys_master/root/20240430/C6Hk/6630475505ac7d77bb332482/-1117Wx1400H-467162954-black-MODEL.jpg',
    },
    {
      productId: 8,
      rating: 5,
      isOffer: false,
      quantity: 7,
      productName: 'Steel Blue Slims',
      category: 'Jeans',
      price: 2999,
      discount: 0,
      availability: true,
      imageUrl:
        'https://www.houseofcalibre.com/wp-content/uploads/2024/02/DC-Men-Classic-Look-Original-Regular-Fit-Denim-Jeans-Pant.jpg',
    },
    {
      productId: 9,
      rating: 5,
      isOffer: true,
      quantity: 0,
      productName: 'Red-Crystal Pulse Lx2',
      category: 'Shoes',
      price: 749,
      discount: 10,
      availability: false,
      imageUrl:
        'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?cs=srgb&dl=pexels-mstudio-360817-1240892.jpg&fm=jpg',
    },
    {
      productId: 10,
      rating: 4,
      isOffer: false,
      quantity: 12,
      productName: 'Vanguard Tee',
      category: 'T-shirts',
      price: 299,
      discount: 0,
      availability: true,
      imageUrl:
        'https://ih1.redbubble.net/image.2256653451.7998/ssrco,active_tshirt,womens,101010:01c5ca27c6,front,tall_three_quarter,750x1000.jpg',
    },
  ];

  newProductListForFilterVar: any[] = [];
  constructor(private router: Router) {
    this.newProductListForFilterVar = this.productList;
  }

  categoryFilter(categoryFromFunction: string) {
    if (categoryFromFunction == 'All-Products') {
      this.newProductListForFilterVar = this.productList;
    } else {
      const newProduct = this.productList.filter(
        (prod) => prod.category == categoryFromFunction
      );
      // console.log(newProduct);
      this.newProductListForFilterVar = newProduct;
    }
  }
  //cart fuctionality
  cartNum: number = 0;
  addToCart() {
    // console.log('CLicked from Home Linked succesfully');

    this.cartNum = this.cartNum + 1;
  }

  feedBack() {
    this.router.navigateByUrl('app-feedback');
  }
  isCartVisible: boolean = false;
  toggleCart() {
    this.isCartVisible = true;
  }
  closeCartList() {
    this.isCartVisible = false;
    // console.log('clicked');
  }

  checkoutPage() {
    this.router.navigateByUrl('app-checkout');
  }
}
