import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/product/product.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-show-seller-product',
  templateUrl: './show-seller-product.component.html',
  styleUrls: ['./show-seller-product.component.css']
})
export class ShowSellerProductComponent implements OnInit {
  product: any;
  product_id: any;

  constructor(
    public authService: AuthService,
    private route: ActivatedRoute,
    private productService: ProductService) {
      this.product_id = "";
    }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        this.product_id = params.get('product_id');
      });

    this.getProduct(this.product_id);
  }

  getProduct(product_id) {
    this.productService.getOne(product_id)
      .subscribe(
        (newProduct: any) => {
          this.product = newProduct;
      });
  }

}
