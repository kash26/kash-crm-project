import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppError } from 'src/app/common/errors/app-error';
import { BadInput } from 'src/app/common/errors/bad-input';
import { NotFoundError } from 'src/app/common/errors/not-found-error';
import { ManagerService } from 'src/app/manager/manager.service';
import { AuthService } from 'src/app/services/auth.service';
import { ShopService } from 'src/app/shop/shop.service';
import { SellerService } from '../seller.service';

@Component({
  selector: 'app-add-edit-seller',
  templateUrl: './add-edit-seller.component.html',
  styleUrls: ['./add-edit-seller.component.css']
})
export class AddEditSellerComponent implements OnInit {
  sellers: any;
  shops: any;
  managers: any;
  @Input() seller: any;
  @Input() fake_id: any;
  @Output() submit = new EventEmitter();

  constructor(
    private sellerService: SellerService,
    private managerService: ManagerService,
    private shopService: ShopService,
  ) { }

  ngOnInit(): void {
    console.log(this.seller);
    this.loadOrder();
    this.getManagers();
    this.getShops();
  }

  form: any = new FormGroup({
    'id': new FormControl(),
    'shop': new FormControl('', Validators.required),
    'username': new FormControl('', Validators.required),
    'email': new FormControl('', Validators.required),
    'password': new FormControl('', Validators.required),
    'password2': new FormControl('', Validators.required),
  });

  loadOrder() {
    this.form.patchValue({
      id: this.seller.id,
      shop: this.seller.shop,
      username: this.seller.seller_name,
      email: this.seller.seller_email,
      photo_file_name: this.seller.photo_file_name,
    });
  }

  deleteSeller() {
    if (confirm('Are you sure ?')) {
      this.sellerService.delete(this.seller.id)
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

  editSeller() {
    this.sellerService.patching(this.form.value)
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

  addSeller() {
    this.sellerService.create(this.form.value)
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
          this.shops = response;
        });
  }

  getManagers() {
    this.managerService.getAll()
      .subscribe(
        (response: any) => {
          this.managers = response;
        });
  }

}
