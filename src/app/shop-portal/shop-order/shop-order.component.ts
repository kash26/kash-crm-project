import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IOrder } from 'src/app/common/interfaces/model';
import { ProductService } from 'src/app/product/product.service';
import { AuthService } from 'src/app/services/auth.service';
import { ShopOrderService } from './shop-order.service';

@Component({
  selector: 'app-shop-order',
  templateUrl: './shop-order.component.html',
  styleUrls: ['./shop-order.component.css']
})
export class ShopOrderComponent implements OnInit {
  closeResult = '';
  products: any[] = [];
  orders: IOrder;
  activateAddEditProdComp: boolean;
  modalTitle: string;
  order: any;
  fake_id: any;
  shop_id: any;

  constructor(
    public authService: AuthService,
    private shopOrderService: ShopOrderService,
    private productService: ProductService,
    private route: ActivatedRoute,
    private modalService: NgbModal) {}

  ngOnInit(): void {
    this.getId();
    this.getOrders();
  }

  getId() {
    this.shop_id = this.route.snapshot.paramMap.get('shop_id');
  }

  addOrder() {
    this.order = {
      shop: this.shop_id
    };
    this.fake_id = 0;
    this.modalTitle = "Add Order";
    this.activateAddEditProdComp = true;
  }

  editOrder(order) {
    console.log(order);
    this.order = order;
    this.fake_id = 1;
    this.modalTitle = "Edit Order";
    this.activateAddEditProdComp = true;
  }

  deleteOrder(order) {
    this.order = order;
    this.fake_id = -1;
    this.modalTitle = "Delete Order";
    this.activateAddEditProdComp = true;
  }

  getProducts() {
    this.productService.getAll()
      .subscribe(
        (newProducts: any) => {
          this.products = newProducts;
      });
  }

  getOrders() {
    this.shopOrderService.getShopAll(this.shop_id)
      .subscribe(
        (newOrder: IOrder) => {
          this.orders = newOrder;
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
      return `with: ${reason}`;
    }
  }

}
