import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MasterAuthGuard {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  canActivate() {
    let user = this.authService.currentUser;
    if (user && user.master) return true;

    this.router.navigate(['/no-access']);
    return
  }
}
