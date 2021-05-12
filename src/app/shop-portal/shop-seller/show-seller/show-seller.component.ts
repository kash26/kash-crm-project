import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SellerService } from 'src/app/seller/seller.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-show-seller',
  templateUrl: './show-seller.component.html',
  styleUrls: ['./show-seller.component.css']
})
export class ShowSellerComponent implements OnInit {
  seller: any;
  seller_id: any;

  constructor(
    public authService: AuthService,
    private route: ActivatedRoute,
    private sellerService: SellerService) {
      this.seller_id = "";
    }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        this.seller_id = params.get('seller_id');
      });

    this.getSeller(this.seller_id);
  }

  getSeller(seller_id) {
    this.sellerService.getOne(seller_id)
      .subscribe(
        (newSeller: any) => {
          this.seller = newSeller;
      });
  }

}
