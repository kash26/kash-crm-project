import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth.service';
import { ShopProductService } from 'src/app/shop-portal/shop-product/shop-product.service';

@Component({
  selector: 'app-seller-shop-product',
  templateUrl: './seller-shop-product.component.html',
  styleUrls: ['./seller-shop-product.component.css']
})
export class SellerShopProductComponent implements OnInit {
  closeResult = '';
  products: any[] = [];
  activateAddEditProdComp: boolean;
  modalTitle: string;
  // product: any;
  fake_id: any;
  shop_id: any;

  constructor(
    private route: ActivatedRoute,
    public authService: AuthService,
    private shopProductService: ShopProductService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getId();
    this.getProducts();
  }

  getId() {
    this.shop_id = this.route.snapshot.paramMap.get('shop_id');
    // console.log(this.shop_id);
  }

  // addProduct() {
  //   this.product = {
  //     shop: this.shop_id
  //   };
  //   this.fake_id = 0;
  //   this.modalTitle = "Add Product";
  //   this.activateAddEditProdComp = true;
  // }

  // editProduct(product) {
  //   this.product = product;
  //   this.fake_id = 1;
  //   this.modalTitle = "Edit Product";
  //   this.activateAddEditProdComp = true;
  // }

  // deleteProduct(product) {
  //   this.product = product;
  //   this.fake_id = -1;
  //   this.modalTitle = "Delete Product";
  //   this.activateAddEditProdComp = true;
  // }

  getProducts() {
    this.shopProductService.getShopAll(this.shop_id)
      .subscribe(
        (newProducts: any) => {
          this.products = newProducts;
      });
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      this.activateAddEditProdComp = false;
      this.getProducts();
      return `with: ${reason}`;
    }
  }

}
