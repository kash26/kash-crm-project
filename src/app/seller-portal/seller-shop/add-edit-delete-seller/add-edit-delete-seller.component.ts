import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppError } from 'src/app/common/errors/app-error';
import { BadInput } from 'src/app/common/errors/bad-input';
import { SellerService } from 'src/app/seller/seller.service';

@Component({
  selector: 'app-add-edit-delete-seller',
  templateUrl: './add-edit-delete-seller.component.html',
  styleUrls: ['./add-edit-delete-seller.component.css']
})
export class AddEditDeleteSellerComponent implements OnInit {
  @Input() seller_in: any;
  @Input() fake_id: any;
  @Output() submit = new EventEmitter();

  constructor(
    // private managerService: ManagerService,
    // private shopService: ShopService,
    private sellerService: SellerService,
  ) { }

  ngOnInit(): void {
    // console.log(this.seller_in);
    this.loadOrder();
    // this.getManagers();
    // this.getShops();
  }

  form: any = new FormGroup({
    'id': new FormControl(),
    // 'shop': new FormControl('', Validators.required),
    'username': new FormControl('', Validators.required),
    'email': new FormControl('', Validators.required),
    'password': new FormControl('', Validators.required),
    'password2': new FormControl('', Validators.required),
  });

  loadOrder() {
    this.form.patchValue({
      id: this.seller_in.id,
      // shop: this.seller_in.shop,
      username: this.seller_in.seller_name,
      email: this.seller_in.seller_email,
      photo_file_name: this.seller_in.photo_file_name,
    });
  }

  // deleteMaster() {
  //   if (confirm('Are you sure ?')) {
  //     this.masterService.delete(this.master_in.id)
  //       .subscribe(
  //         () => {
  //           window.location.reload();
  //         },
  //         (error: AppError) => {
  //           if (error instanceof NotFoundError) {
  //             alert('This product has been already deleted.')
  //           }
  //           else throw error;
  //         });
  //   }
  // }

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

}
