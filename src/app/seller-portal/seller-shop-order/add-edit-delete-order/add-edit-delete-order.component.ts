import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppError } from 'src/app/common/errors/app-error';
import { BadInput } from 'src/app/common/errors/bad-input';
import { NotFoundError } from 'src/app/common/errors/not-found-error';
import { IOrder } from 'src/app/common/interfaces/model';
import { ManagerService } from 'src/app/manager/manager.service';
import { ProductService } from 'src/app/product/product.service';
import { SellerService } from 'src/app/seller/seller.service';
import { OrderService } from 'src/app/services/order.service';
import { ShopOrderService } from 'src/app/shop-portal/shop-order/shop-order.service';
import { ShopProductService } from 'src/app/shop-portal/shop-product/shop-product.service';
import { ShopSellerService } from 'src/app/shop-portal/shop-seller/shop-seller.service';
import { ShopService } from 'src/app/shop/shop.service';

@Component({
  selector: 'app-add-edit-delete-order',
  templateUrl: './add-edit-delete-order.component.html',
  styleUrls: ['./add-edit-delete-order.component.css']
})
export class AddEditDeleteOrderComponent implements OnInit {
  shops: any;
  managers: any;
  // sellers: any;
  products: any;
  @Input() order: any;
  @Input() fake_id: any;
  @Output() submit = new EventEmitter();

  @Output() closeModalEvent = new EventEmitter<boolean>();

  constructor(
    private shopOrderService: ShopOrderService,
    private orderService: OrderService,
    private productService: ProductService,
    private shopProductService: ShopProductService,
    private managerService: ManagerService,
    private shopService: ShopService,
    private sellerService: SellerService,
    private shopSellerService: ShopSellerService,
  ) { }

  ngOnInit(): void {
    this.loadOrder();
    // this.getSellers();
    this.getProducts();
  }

  form = new FormGroup({
    'id': new FormControl('', Validators.required),
    'shop': new FormControl('', Validators.required),
    // 'seller': new FormControl('', Validators.required),
    'product': new FormControl('', Validators.required),
    'customer_name': new FormControl('', Validators.required),
    'customer_phone': new FormControl('', Validators.required),
    'order_description': new FormControl(),
  });

  loadOrder() {
    this.form.patchValue({
      id: this.order.id,
      shop: this.order.shop,
      // seller: this.order.seller,
      product: this.order.product,
      customer_name: this.order.customer_name,
      customer_phone: this.order.customer_phone,
      order_description: this.order.order_description,
    });
  }

  deleteOrder() {
    if (confirm('Are you sure ?')) {
      this.orderService.delete(this.order.id)
        .subscribe(
          () => {
            window.location.reload();
          },
          (error: AppError) => {
            if (error instanceof NotFoundError) {
              alert('This product has been already deleted.')
            }
            else throw error;
          });
    }
  }

  editOrder() {
    this.orderService.patching(this.form.value)
      .subscribe(
        (updatedProduct: any) => {
          window.location.reload();
        },
        (error: AppError) => {
          if (error instanceof BadInput) {
            this.form.setErrors(error.originalError);
          }
          else throw error;
        });
  }

  addOrder() {
    this.shopOrderService.shopCreate(this.order.shop, this.form.value)
      .subscribe(
        (response: IOrder) => {
          window.location.reload();
          this.submit.emit();
          console.log(response);
        },
        (error: AppError) => {
          if (error instanceof BadInput) {
            console.log(error?.originalError.error.response);
            alert(error?.originalError.error.response);
            this.form.setErrors(error.originalError);
          }
          else throw error;
        });
  }

  // getSellers() {
  //   this.shopSellerService.getShopAll(this.order.shop)
  //     .subscribe((response: IOrder) => {
  //       this.sellers = response;
  //     });
  // }

  getProducts() {
    this.shopProductService.getShopAll(this.order.shop)
      .subscribe(
        (response: IOrder) => {
          this.products = response;
        });
  }

}
