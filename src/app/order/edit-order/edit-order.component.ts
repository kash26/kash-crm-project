import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IOrder } from 'src/app/common/interfaces/model';
import { OrderService } from './../../services/order.service';
import { AppError } from './../../common/errors/app-error';
import { BadInput } from './../../common/errors/bad-input';
import { ProductService } from './../../product/product.service';
import { ManagerService } from './../../manager/manager.service';
import { ShopService } from './../../shop/shop.service';
import { SellerService } from './../../seller/seller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {
  shops: any;
  managers: any;
  sellers: any;
  products: any;
  orders: any;
  @Input() order: any;

  @Output() closeModalEvent = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private orderService: OrderService,
    private productService: ProductService,
    private managerService: ManagerService,
    private shopService: ShopService,
    private sellerService: SellerService,
  ) {
  }

  ngOnInit(): void {
    this.loadOrder();
    this.getShops();
    this.getManagers();
    this.getSellers();
    this.getProducts();
  }

  form = new FormGroup({
    'id': new FormControl(),
    'shop': new FormControl('', Validators.required),
    'seller': new FormControl('', Validators.required),
    'product': new FormControl('', Validators.required),
    'customer_name': new FormControl('', Validators.required),
    'customer_phone': new FormControl('', Validators.required),
    'order_description': new FormControl('', Validators.required),
  });

  loadOrder() {
    this.form.patchValue({
      id: this.order.id,
      shop: this.order.shop,
      seller: this.order.seller,
      product: this.order.product,
      customer_name: this.order.customer_name,
      customer_phone: this.order.customer_phone,
      order_description: this.order.order_description,
    });
  }

  editOrder() {
    this.orderService.update(this.form.value)
      .subscribe(
        (updatedOrder: IOrder) => {
          window.location.reload();
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
        (shops: IOrder) => {
          this.shops = shops;
        });
  }

  getManagers() {
    this.managerService.getAll()
      .subscribe(
        (managers: IOrder) => {
          this.managers = managers;
      });
  }

  getSellers() {
    this.sellerService.getAll()
      .subscribe(
        (sellers: IOrder) => {
          this.sellers = sellers;
      });
  }

  getProducts() {
    this.productService.getAll()
      .subscribe(
        (products: IOrder) => {
          this.products = products;
      });
  }

  onCloseModal(event: any){
    this.editOrder();
    this.router.navigate(['/orders'], {
      queryParams: { page: 2, order: 'newest' }
    });
    this.closeModalEvent.emit(false);
  }

}
