import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { IOrder } from 'src/app/common/interfaces/model';
import { OrderService } from './../../services/order.service';
import { AppError } from './../../common/errors/app-error';
import { BadInput } from './../../common/errors/bad-input';
import { ProductService } from 'src/app/product/product.service';
import { ManagerService } from 'src/app/manager/manager.service';
import { ShopService } from 'src/app/shop/shop.service';
import { SellerService } from 'src/app/seller/seller.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  shops: any;
  managers: any;
  sellers: any;
  products: any;
  @Output() submit = new EventEmitter();

  @Output() closeModalEvent = new EventEmitter<boolean>();

  constructor(
    private orderService: OrderService,
    private productService: ProductService,
    private managerService: ManagerService,
    private shopService: ShopService,
    private sellerService: SellerService,
  ) { }

  ngOnInit(): void {
    this.getShops();
    this.getManagers();
    this.getSellers();
    this.getProducts();
  }

  form = new FormGroup({
    'shop': new FormControl('', Validators.required),
    'seller': new FormControl('', Validators.required),
    'product': new FormControl('', Validators.required),
    'customer_name': new FormControl('', Validators.required),
    'customer_phone': new FormControl('', Validators.required),
    'order_description': new FormControl(),
  });

  addOrder() {
    this.orderService.create(this.form.value)
      .subscribe(
        (response: IOrder) => {
          window.location.reload();
          this.submit.emit();
        },
        (error: AppError) => {
          if (error instanceof BadInput) {
            this.form.setErrors(error.originalError);
          }
          else throw error;
        });
  }

  getShops() {
    this.shopService.getAll()
      .subscribe(
        (response: IOrder) => {
          console.log(response);
          this.shops = response;
        });
  }

  getManagers() {
    this.managerService.getAll()
      .subscribe(
        (response: IOrder) => {
          console.log(response);
          this.managers = response;
        });
  }

  getSellers() {
    this.sellerService.getAll()
      .subscribe((response: IOrder) => {
        console.log(response);
        this.sellers = response;
      });
  }

  getProducts() {
    this.productService.getAll()
      .subscribe(
        (response: IOrder) => {
          console.log(response);
          this.products = response;
        });
  }

  onCloseModal(event: any){
    this.addOrder();
    this.closeModalEvent.emit(false);
   }

}
