import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { IOrder } from '../common/interfaces/model';
import { ProductService } from '../product/product.service';
import { SellerService } from '../seller/seller.service';
import { OrderService } from '../services/order.service';
import { ShopService } from '../shop/shop.service';
import { AuthService } from './../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  orders: IOrder;
  products: any[] = [];
  sellers: any[] = [];
  shops: any[] = [];

  constructor(
    private orderService: OrderService,
    private productService: ProductService,
    private sellerService: SellerService,
    private shopService: ShopService,
    public authService: AuthService) {}

  ngOnInit() {
    this.getOrders();
    this.getProducts();
    this.getSellers();
    this.getShops();
  }

  getOrders() {
    this.orderService.getAll()
      .subscribe(
        (newOrder: IOrder) => {
          this.orders = newOrder;
      });
  }

  getProducts() {
    this.productService.getAll()
      .subscribe(
        (newProducts: any) => {
          this.products = newProducts;
      });
  }

  getSellers() {
    this.sellerService.getAll()
      .subscribe(
        (newSellers: any) => {
          // console.log(newProducts);
          this.sellers = newSellers;
      });
  }

  getShops() {
    this.shopService.getAll()
      .subscribe(
        (newShops: any) => {
          // console.log(newProducts);
          this.shops = newShops;
      });
  }

}
