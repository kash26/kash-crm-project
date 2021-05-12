import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { JwtHelperService } from "@auth0/angular-jwt";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends DataService {
  constructor(
    private router: Router,
    http: HttpClient) {
    super('manager/login/', http)
  }

  logout() {
    // this.router.navigate(['/']);
    window.location.reload();
    localStorage.removeItem('user_detail');
  }

  isLoggedIn() {
    let access_token = this.access_token;

    if (!access_token)
      return false;

    let access = access_token.access;
    let jwtHelper = new JwtHelperService();

    let isExpired = jwtHelper.isTokenExpired(access);

    return !isExpired;
  }

  get currentUser() {
    let access_token = this.access_token;

    return access_token;
  }

  get access_token() {
    let user_detail = localStorage.getItem('user_detail');
    let access_token: any = JSON.parse(user_detail);

    if (!access_token)
      return null;

    return  access_token;
  }

}
