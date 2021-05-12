import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth.service';
import { ShopSellerService } from './shop-seller.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop-seller',
  templateUrl: './shop-seller.component.html',
  styleUrls: ['./shop-seller.component.css']
})
export class ShopSellerComponent implements OnInit {
  closeResult = '';
  sellers: any[] = [];
  activateAddEditProdComp: boolean;
  modalTitle: string;
  seller: any;
  fake_id: any;
  shop_id: any;

  constructor(
    public authService: AuthService,
    private route: ActivatedRoute,
    private shopSellerService: ShopSellerService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getId();
    this.getSellers();
  }

  getId() {
    this.shop_id = this.route.snapshot.paramMap.get('shop_id');
  }

  addSeller() {
    this.seller = {
      shop: this.shop_id
    };
    this.fake_id = 0;
    this.modalTitle = "Add Seller";
    this.activateAddEditProdComp = true;
  }

  editSeller(seller) {
    this.seller = seller;
    this.fake_id = 1;
    this.modalTitle = "Edit Seller";
    this.activateAddEditProdComp = true;
  }

  deleteSeller(seller) {
    this.seller = seller;
    this.fake_id = -1;
    this.modalTitle = "Delete Seller";
    this.activateAddEditProdComp = true;
  }

  getSellers() {
    this.shopSellerService.getShopAll(this.shop_id)
      .subscribe(
        (newSellers: any) => {
          this.sellers = newSellers;
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
      this.getSellers();
      return `with: ${reason}`;
    }
  }

}
