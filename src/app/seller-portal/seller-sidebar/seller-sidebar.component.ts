import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IOrder } from 'src/app/common/interfaces/model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'seller-sidebar',
  templateUrl: './seller-sidebar.component.html',
  styleUrls: ['./seller-sidebar.component.css']
})
export class SellerSidebarComponent implements OnInit {
  shop_id: any;
  closeResult = '';
  products: any[] = [];
  orders: IOrder;
  activateAddEditProdComp: boolean;
  modalTitle: string;
  order: any;
  fake_id: any;

  constructor(
    private route: ActivatedRoute,
    public authService: AuthService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.getId();
    // console.log(this.getId());
  }

  getId() {
    this.route.paramMap
      .subscribe(params => {
        this.shop_id = params.get('shop_id');
      });
  }

  addOrder() {
    this.order = {
      shop: this.shop_id
    };
    this.fake_id = 0;
    this.modalTitle = "Add Order";
    this.activateAddEditProdComp = true;
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
