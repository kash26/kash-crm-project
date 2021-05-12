import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppError } from '../common/errors/app-error';
import { SignupService } from '../signup/signup.service';
import { Router } from '@angular/router';
import { NotAuthorized } from './../common/errors/not-authorized';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(
    private router: Router,
    private signupService: SignupService,
  ) { }

  ngOnInit(): void {
    // console.log(this.manager);
  }

  form: any = new FormGroup({
    'username': new FormControl('', Validators.required),
    'email': new FormControl('', Validators.required),
    'password': new FormControl('', Validators.required),
    'password2': new FormControl('', Validators.required),
  });

  addManager() {
    this.signupService.signup(this.form.value)
      .subscribe(
        (newManager: any) => {
          this.router.navigate(['/']);
        },
        (error: AppError) => {
          if (error instanceof NotAuthorized) {
            this.form.setErrors(error.originalError);
            console.log(error.originalError);
          }
          else throw error;
        });
  }

}
