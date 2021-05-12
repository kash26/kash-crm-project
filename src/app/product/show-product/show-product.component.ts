import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/product/product.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {
  product: any;
  id: any;

  constructor(
    public authService: AuthService,
    private route: ActivatedRoute,
    private productService: ProductService) {
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
    this.productService.getOne(id)
      .subscribe(
        (newProduct: any) => {
          this.product = newProduct;
      });
  }

}
