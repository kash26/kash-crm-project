import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppError } from 'src/app/common/errors/app-error';
import { BadInput } from 'src/app/common/errors/bad-input';
import { NotFoundError } from 'src/app/common/errors/not-found-error';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-add-edit-delete-manager',
  templateUrl: './add-edit-delete-manager.component.html',
  styleUrls: ['./add-edit-delete-manager.component.css']
})
export class AddEditDeleteManagerComponent implements OnInit {
  managers: any;
  @Input() manager: any;
  @Input() fake_id: any;
  @Output() submit = new EventEmitter();

  constructor(
    private managerService: ManagerService,
  ) { }

  ngOnInit(): void {
    // console.log(this.manager);
    this.loadOrder();
    this.getManagers();
  }

  form: any = new FormGroup({
    'id': new FormControl(),
    'username': new FormControl('', Validators.required),
    'email': new FormControl('', Validators.required),
    'photo_file_name': new FormControl('', Validators.required),
    'password': new FormControl('', Validators.required),
    'password2': new FormControl('', Validators.required),
  });

  loadOrder() {
    this.form.patchValue({
      id: this.manager.id,
      username: this.manager.manager_name,
      email: this.manager.manager_email,
      photo_file_name: this.manager.photo_file_name,
    });
  }

  // deleteManager() {
  //   if (confirm('Are you sure ?')) {
  //     this.managerService.delete(this.manager.id)
  //       .subscribe(
  //         () => {
  //           // this.getOrders();
  //         },
  //         (error: AppError) => {
  //           if (error instanceof NotFoundError) {
  //             alert('This product has been already deleted.')
  //           }
  //           else throw error;
  //         });
  //   }
  // }

  editManager() {
    this.managerService.patching(this.form.value)
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

  // addManager() {
  //   this.managerService.create(this.form.value)
  //     .subscribe(
  //       (newManager: any) => {
  //         // console.log(newProduct);
  //         this.submit.emit();
  //       },
  //       (error: AppError) => {
  //         if (error instanceof BadInput) {
  //           this.form.setErrors(error.originalError);
  //         }
  //         else throw error;
  //       });
  // }

  getManagers() {
    this.managerService.getAll()
      .subscribe(
        (newManagers: any) => {
          // console.log(response);
          this.managers = newManagers;
        });
  }

}
