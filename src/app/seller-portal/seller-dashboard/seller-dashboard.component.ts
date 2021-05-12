import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IOrder } from 'src/app/common/interfaces/model';
import { AuthService } from 'src/app/services/auth.service';
import { ShopOrderService } from 'src/app/shop-portal/shop-order/shop-order.service';
import { ShopProductService } from 'src/app/shop-portal/shop-product/shop-product.service';
import { ShopSellerService } from 'src/app/shop-portal/shop-seller/shop-seller.service';

@Component({
  selector: 'app-seller-dashboard',
  templateUrl: './seller-dashboard.component.html',
  styleUrls: ['./seller-dashboard.component.css']
})
export class SellerDashboardComponent implements OnInit {
  orders: IOrder;
  products: any[] = [];
  // sellers: any[] = [];
  // shops: any[] = [];
  shop_id: any;

  constructor(
    private route: ActivatedRoute,
    private shopOrderService: ShopOrderService,
    private shopProductService: ShopProductService,
    // private shopSellerService: ShopSellerService,
    public authService: AuthService
    ) {}

  ngOnInit() {
    this.getId();
    this.getOrders();
    this.getProducts();
    // this.getSellers();
  }

  getId() {
    // this.route.paramMap
    //   .subscribe(params => {
    //     this.shop_id = params.get('shop_id');
    //   });

    this.shop_id = this.route.snapshot.paramMap.get('shop_id');
  }

  getOrders() {
    this.shopOrderService.getShopAll(this.shop_id)
      .subscribe(
        (newOrder: IOrder) => {
          this.orders = newOrder;
      });
  }

  getProducts() {
    this.shopProductService.getShopAll(this.shop_id)
      .subscribe(
        (newProducts: any) => {
          this.products = newProducts;
      });
  }

  // getSellers() {
  //   this.shopSellerService.getShopAll(this.shop_id)
  //     .subscribe(
  //       (newSellers: any) => {
  //         this.sellers = newSellers;
  //     });
  // }

}
