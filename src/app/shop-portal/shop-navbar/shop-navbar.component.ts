import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MasterService } from './../../master/master.service';

@Component({
  selector: 'shop-navbar',
  templateUrl: './shop-navbar.component.html',
  styleUrls: ['./shop-navbar.component.css']
})
export class ShopNavbarComponent implements OnInit {
  master: any;
  shop_id: any;
  master_id: any;

  constructor(
    public authService: AuthService,
    private route: ActivatedRoute,
    private masterService: MasterService) {
      this.master_id = "";
    }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        this.shop_id = params.get('shop_id');
      });

    this.getMaster();
  }

  getMaster() {
    let access_obj = this.authService.currentUser;
    this.master_id = access_obj.id;

    if (this.authService?.currentUser.master) {
      this.masterService.getOne(this.master_id)
        .subscribe(
          (newMaster: any) => {
            this.master = newMaster;
        });
    }
  }

}
