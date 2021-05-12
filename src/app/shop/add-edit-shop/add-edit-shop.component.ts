import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppError } from 'src/app/common/errors/app-error';
import { BadInput } from 'src/app/common/errors/bad-input';
import { NotFoundError } from 'src/app/common/errors/not-found-error';
import { ManagerService } from 'src/app/manager/manager.service';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-add-edit-shop',
  templateUrl: './add-edit-shop.component.html',
  styleUrls: ['./add-edit-shop.component.css']
})
export class AddEditShopComponent implements OnInit {
  managers: any;
  @Input() shop: any;
  @Input() fake_id: any;
  @Output() submit = new EventEmitter();

  constructor(
    private shopService: ShopService,
    private managerService: ManagerService,
  ) { }

  ngOnInit(): void {
    this.loadOrder();
    this.getManagers();
  }

  form: any = new FormGroup({
    'id': new FormControl(),
    'shop_name': new FormControl('', Validators.required),
  });

  loadOrder() {
    this.form.patchValue({
      id: this.shop.id,
      shop_name: this.shop.shop_name,
    });
  }

  deleteShop() {
    if (confirm('Are you sure ?')) {
      this.shopService.delete(this.shop.id)
        .subscribe(
          () => {
            window.location.reload();
          },
          (error: AppError) => {
            if (error instanceof NotFoundError) {
              alert('This shop has been already deleted.')
            }
            else throw error;
          });
    }
  }

  editShop() {
    this.shopService.patching(this.form.value)
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

  addShop() {
    this.shopService.create(this.form.value)
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

  getManagers() {
    this.managerService.getAll()
      .subscribe(
        (response: any) => {
          // console.log(response);
          this.managers = response;
        });
  }

}
