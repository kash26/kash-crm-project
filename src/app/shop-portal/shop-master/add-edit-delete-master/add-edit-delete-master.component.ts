import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppError } from 'src/app/common/errors/app-error';
import { BadInput } from 'src/app/common/errors/bad-input';
import { NotFoundError } from 'src/app/common/errors/not-found-error';
import { ManagerService } from 'src/app/manager/manager.service';
import { MasterService } from 'src/app/master/master.service';
import { ShopService } from 'src/app/shop/shop.service';

@Component({
  selector: 'app-add-edit-delete-master',
  templateUrl: './add-edit-delete-master.component.html',
  styleUrls: ['./add-edit-delete-master.component.css']
})
export class AddEditDeleteMasterComponent implements OnInit {
  // masters: any;
  // managers: any;
  // shops: any;
  @Input() master_in: any;
  @Input() fake_id: any;
  @Output() submit = new EventEmitter();

  constructor(
    private managerService: ManagerService,
    private masterService: MasterService,
    private shopService: ShopService,
  ) { }

  ngOnInit(): void {
    console.log(this.master_in);
    this.loadOrder();
    // this.getManagers();
    // this.getShops();
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
      id: this.master_in.id,
      shop: this.master_in.shop,
      username: this.master_in.master_name,
      email: this.master_in.master_email,
      photo_file_name: this.master_in.photo_file_name,
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

  editMaster() {
    this.masterService.patching(this.form.value)
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

  // addMaster() {
  //   console.log(this.form.value);
  //   this.masterService.create(this.form.value)
  //     .subscribe(
  //       (newProduct: any) => {
  //         window.location.reload();
  //         this.submit.emit();
  //       },
  //       (error: AppError) => {
  //         if (error instanceof BadInput) {
  //           this.form.setErrors(error.originalError);
  //         }
  //         else throw error;
  //       });
  // }

  // getShops() {
  //   this.shopService.getAll()
  //     .subscribe(
  //       (response: any) => {
  //         // console.log(response);
  //         this.shops = response;
  //       });
  // }

  // getManagers() {
  //   this.managerService.getAll()
  //     .subscribe(
  //       (response: any) => {
  //         this.managers = response;
  //       });
  // }

}
