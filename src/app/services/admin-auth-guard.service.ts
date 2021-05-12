import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  canActivate(route, state: RouterStateSnapshot) {
    let user = this.authService.currentUser;
    if (user && user.admin) return true;

    else if (user && user.master)
      this.router.navigate(['/shops']);

    this.router.navigate(['/no-access']);
    return false;
  }
}
