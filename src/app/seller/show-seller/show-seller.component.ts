import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SellerService } from '../seller.service';

@Component({
  selector: 'app-show-seller',
  templateUrl: './show-seller.component.html',
  styleUrls: ['./show-seller.component.css']
})
export class ShowSellerComponent implements OnInit {
  seller: any;
  id: any;

  constructor(
    public authService: AuthService,
    private route: ActivatedRoute,
    private sellerService: SellerService) {
      this.id = "";
    }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        this.id = params.get('id');
      });

    this.getSeller(this.id);
  }

  getSeller(id) {
    this.sellerService.getOne(id)
      .subscribe(
        (newSeller: any) => {
          this.seller = newSeller;
      });
  }

}
