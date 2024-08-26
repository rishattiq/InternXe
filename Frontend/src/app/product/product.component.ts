import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CardProductComponent } from './card-product/card-product.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';

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
    FooterComponent,
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  categoryList = ['All-Products', 'Shoes', 'T-Shirts', 'Jeans', 'Bags'];

  productList = [
    {
      productId: 1,
      rating: 4,
      isOffer: true,
      quantity: 'HIGH',
      productName: 'Reebok Classic Leather',
      category: 'Shoes',
      price: 1050,
      discount: 10,
      availability: true,
      imageUrl:
        'https://assets.ajio.com/medias/sys_master/root/20240704/lAO8/668730b31d763220fae92916/-473Wx593H-467339243-tan-MODEL2.jpg',
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
      quantity: 'LOW',
      productName: 'Nike Air Max 270',
      category: 'Shoes',
      price: 799,
      discount: 5,
      availability: true,
      imageUrl:
        'https://assets.ajio.com/medias/sys_master/root/20240731/an4z/66aa44d11d763220fa5127ce/-473Wx593H-466345463-white-MODEL2.jpg',
    },
    {
      productId: 3,
      rating: 3,
      isOffer: false,
      quantity: '0',
      productName: 'Brown Sandal RS-X3',
      category: 'Shoes',
      price: 349,
      discount: 15,
      availability: false,
      imageUrl:
        'https://assets.ajio.com/medias/sys_master/root/20230623/W7b5/64957cd3eebac147fcd5f82e/-473Wx593H-465024721-olive-MODEL.jpg',
    },
    {
      productId: 4,
      rating: 5,
      isOffer: true,
      quantity: 'HIGH',
      productName: 'Nike Sleeper X',
      category: 'Shoes',
      price: 1199,
      discount: 0,
      availability: true,
      imageUrl:
        'https://assets.ajio.com/medias/sys_master/root/20240801/4fJl/66ab67f41d763220fa53726a/-473Wx593H-469647360-blue-MODEL2.jpg',
    },
    {
      productId: 5,
      rating: 1,
      isOffer: true,
      quantity: 'HIGH',
      productName: 'White Phantom Glide',
      category: 'T-Shirts',
      price: 89,
      discount: 20,
      availability: true,
      imageUrl:
        'https://assets.ajio.com/medias/sys_master/root/20240823/u1ir/66c8060b1d763220fa926019/-473Wx593H-469631435-offwhite-MODEL.jpg',
    },
    {
      productId: 6,
      rating: 4,
      isOffer: false,
      quantity: 'LOW',
      productName: 'Cream Zenith Casual',
      category: 'T-Shirts',
      price: 2399,
      discount: 0,
      availability: true,
      imageUrl:
        'https://assets.ajio.com/medias/sys_master/root/20240822/c1Qn/66c7473e6f60443f3120a182/-473Wx593H-469651736-stone-MODEL.jpg',
    },
    {
      productId: 7,
      rating: 4,
      isOffer: true,
      quantity: '0',
      productName: 'Ridge Fade',
      category: 'T-Shirts',
      price: 149,
      discount: 25,
      availability: false,
      imageUrl:
        'https://assets.ajio.com/medias/sys_master/root/20240822/co8N/66c730b86f60443f311f95c0/-473Wx593H-469647857-oatmeal-MODEL.jpg',
    },
    {
      productId: 8,
      rating: 5,
      isOffer: false,
      quantity: 'LOW',
      productName: 'Steel Sun Yellow-3',
      category: 'T-Shirts',
      price: 2999,
      discount: 0,
      availability: true,
      imageUrl:
        'https://assets.ajio.com/medias/sys_master/root/20240822/vixt/66c753ec6f60443f3120e782/-473Wx593H-469651563-mustard-MODEL.jpg',
    },
    {
      productId: 9,
      rating: 5,
      isOffer: true,
      quantity: '0',
      productName: 'Red-Crystal Pulse Lx2',
      category: 'T-Shirts',
      price: 749,
      discount: 10,
      availability: false,
      imageUrl:
        'https://assets.ajio.com/medias/sys_master/root/20240530/dWhj/6657d50616fd2c6e6a3c851a/-473Wx593H-700023846-beige-MODEL.jpg',
    },
    {
      productId: 10,
      rating: 4,
      isOffer: false,
      quantity: 'HIGH',
      productName: 'Levi 501 Original Fit',
      category: 'Jeans',
      price: 299,
      discount: 0,
      availability: true,
      imageUrl:
        'https://assets.ajio.com/medias/sys_master/root/20240821/bnor/66c5f35b1d763220fa8bc544/-473Wx593H-469631205-brown-MODEL.jpg',
    },
    {
      productId: 11,
      rating: 4,
      isOffer: false,
      quantity: 'HIGH',
      productName: 'Wrangler Relaxed Fit',
      category: 'Jeans',
      price: 299,
      discount: 0,
      availability: true,
      imageUrl:
        'https://assets.ajio.com/medias/sys_master/root/20240821/7teO/66c5ed076f60443f311af131/-473Wx593H-469631236-washedblack-MODEL.jpg',
    },
    {
      productId: 12,
      rating: 4,
      isOffer: false,
      quantity: 'HIGH',
      productName: 'Diesel D-Strukt Slim Fit',
      category: 'Jeans',
      price: 299,
      discount: 0,
      availability: true,
      imageUrl:
        'https://assets.ajio.com/medias/sys_master/root/20240821/zCNt/66c5ed2a1d763220fa8b6c73/-473Wx593H-469631211-lightwashblue-MODEL.jpg',
    },
    {
      productId: 13,
      rating: 4,
      isOffer: false,
      quantity: 'HIGH',
      productName: 'Gap Vintage Wash Skinny Jeans',
      category: 'Jeans',
      price: 299,
      discount: 0,
      availability: true,
      imageUrl:
        'https://assets.ajio.com/medias/sys_master/root/20240821/Y4xA/66c5efaf1d763220fa8bb242/-473Wx593H-469631237-lightwashblue-MODEL.jpg',
    },
  ];

  newProductListForFilterVar: any[] = []; //for filter
  productNameListnew: any[] = []; //for items in cart

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
  cartNum: number = 0; //for cart number 1,2,3 etc
  subtotal: number = 0; //for total payment in cart

  calculateSubtotal() {
    this.subtotal = this.productNameListnew.reduce((acc, item) => {
      const discountedPrice = item.price - item.price * (item.discount / 100);
      return acc + discountedPrice;
    }, 0);
  }

  addToCart(productDataFromcardComp: any) {
    // console.log('CLicked from Home Linked succesfully');

    this.cartNum = this.cartNum + 1;

    this.productNameListnew.push(productDataFromcardComp);
    this.calculateSubtotal();

    // console.log(this.productNameListnew);
  }

  removeItemFromTheCart(
    productIdGettingFromFuncParameterfromProductComp: number
  ) {
    const index = this.productNameListnew.findIndex(
      (item) =>
        (item.productId = productIdGettingFromFuncParameterfromProductComp)
    );
    if (index !== -1) {
      this.productNameListnew.splice(index, 1);
    }
    this.calculateSubtotal();
    this.cartNum = this.cartNum - 1;
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
