import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from '../shop.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-show-shop',
  templateUrl: './show-shop.component.html',
  styleUrls: ['./show-shop.component.css']
})
export class ShowShopComponent implements OnInit {
  shop: any;
  id: any;

  constructor(
    public authService: AuthService,
    private route: ActivatedRoute,
    private shopService: ShopService) {
      this.id = "";
    }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        this.id = params.get('id');
      });

    this.getProduct(this.id);
  }

  getProduct(id) {
    this.shopService.getOne(id)
      .subscribe(
        (newShop: any) => {
          this.shop = newShop;
      });
  }

}
