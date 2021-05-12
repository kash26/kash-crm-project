import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SellerService } from 'src/app/seller/seller.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'seller-navbar',
  templateUrl: './seller-navbar.component.html',
  styleUrls: ['./seller-navbar.component.css']
})
export class SellerNavbarComponent implements OnInit {
  seller: any;
  // shop_id: any;
  seller_id: any;

  constructor(
    public authService: AuthService,
    private route: ActivatedRoute,
    private sellerService: SellerService) {
      this.seller_id = "";
    }

  ngOnInit(): void {
    // this.route.paramMap
    //   .subscribe(params => {
    //     this.shop_id = params.get('shop_id');
    //   });

    this.getMaster();
  }

  getMaster() {
    let access_obj = this.authService.currentUser;
    this.seller_id = access_obj.id;

    if (this.authService?.currentUser.master) {
      this.sellerService.getOne(this.seller_id)
        .subscribe(
          (newSeller: any) => {
            this.seller = newSeller;
        });
    }
  }

}
