import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from 'src/app/product/product.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  closeResult = '';
  products: any[] = [];
  activateAddEditProdComp: boolean;
  modalTitle: string;
  product: any;
  fake_id: any;

  constructor(
    public authService: AuthService,
    private productService: ProductService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getProducts();
    // this.updateList();
  }

  // addProduct() {
  //   this.product = {
  //     id: 0
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
    this.productService.getAll()
      .subscribe(
        (newProducts: any) => {
          // console.log(newProducts);
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
