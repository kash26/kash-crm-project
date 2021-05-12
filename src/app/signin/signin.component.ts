import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AppError } from '../common/errors/app-error';
import { BadInput } from '../common/errors/bad-input';
import { NotAuthorized } from './../common/errors/not-authorized';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  invalidLogin: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.isLoggedIn();
  }

  form = new FormGroup({
    'username': new FormControl('', [
      Validators.required,
      Validators.minLength(3)]),
    'password': new FormControl('', Validators.required),
  });

  get username() {
    return this.form.get('username');
  }

  login() {
    this.authService.create(this.form.value)
      .subscribe(
        (response: any) => {
          console.log(response);
          let result: any = response;

          if (result && result.access && result.refresh)
            localStorage.setItem('user_detail', JSON.stringify(result));

            let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
            let user = this.authService.currentUser;
            if (user && user.admin) {
              this.router.navigate([returnUrl || '/home']);
            }
            else if (user && user.master) {
              let access_obj = this.authService.access_token;
              // console.log(returnUrl);
              if (returnUrl) {
                this.router.navigate([returnUrl]);
              }
              else {
                this.router.navigate(['/shop-dashboard', access_obj.shop]);
              }
            }
            else if (user && user.seller) {
              let access_obj = this.authService.access_token;
              // console.log(returnUrl);
              if (returnUrl) {
                this.router.navigate([returnUrl]);
              }
              else {
                this.router.navigate(['/seller-dashboard', access_obj.shop]);
                // this.router.navigate(['/seller-dashboard']);
              }
            }
        },
        (error: AppError) => {
          if (error instanceof NotAuthorized) {
            this.form.setErrors(error.originalError);
            this.invalidLogin = true;
          }
          else throw error;
        });
  }

}
