import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/product/product.service';
import { ManagerService } from 'src/app/manager/manager.service';
import { ShopService } from 'src/app/shop/shop.service';
import { AppError } from 'src/app/common/errors/app-error';
import { BadInput } from 'src/app/common/errors/bad-input';
import { NotFoundError } from 'src/app/common/errors/not-found-error';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent implements OnInit {
  shops: any;
  managers: any;
  @Input() product: any;
  @Input() fake_id: any;
  @Output() submit = new EventEmitter();

  constructor(
    private productService: ProductService,
    private managerService: ManagerService,
    private shopService: ShopService,
  ) { }

  ngOnInit(): void {
    this.loadOrder();
    this.getManagers();
    this.getShops();
  }

  form: any = new FormGroup({
    'id': new FormControl(),
    'shop': new FormControl('', Validators.required),
    'product_name': new FormControl('', Validators.required),
    'product_price': new FormControl('', Validators.required),
    'product_description': new FormControl('', Validators.required),
    'product_quantity': new FormControl('', Validators.required),
  });

  loadOrder() {
    this.form.patchValue({
      id: this.product.id,
      shop: this.product.shop,
      product_name: this.product.product_name,
      product_price: this.product.product_price,
      product_quantity: this.product.product_quantity,
      product_description: this.product.product_description,
    });
  }

  deleteClick() {
    if (confirm('Are you sure ?')) {
      this.productService.delete(this.product.id)
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

  editProduct() {
    this.productService.patching(this.form.value)
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

  addProduct() {
    this.productService.create(this.form.value)
      .subscribe(
        (newProduct: any) => {
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
        (response: any) => {
          // console.log(response);
          this.shops = response;
        });
  }

  getManagers() {
    this.managerService.getAll()
      .subscribe(
        (response: any) => {
          // console.log(response);
          this.managers = response;
        });
  }

}
