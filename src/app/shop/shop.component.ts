import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../services/auth.service';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  closeResult = '';
  shops: any[] = [];
  activateAddEditProdComp: boolean;
  modalTitle: string;
  shop: any;
  fake_id: any;

  constructor(
    public authService: AuthService,
    private shopService: ShopService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getShops();
    // this.updateList();
  }

  addShop() {
    this.shop = {
      id: 0
    };
    this.fake_id = 0;
    this.modalTitle = "Add Shop";
    this.activateAddEditProdComp = true;
  }

  editShop(shop: any) {
    this.shop = shop;
    this.fake_id = 1;
    this.modalTitle = "Edit Shop";
    this.activateAddEditProdComp = true;
  }

  deleteShop(shop) {
    this.shop = shop;
    this.fake_id = -1;
    this.modalTitle = "Delete Shop";
    this.activateAddEditProdComp = true;
  }

  getShops() {
    this.shopService.getAll()
      .subscribe(
        (newShops: any) => {
          // console.log(newProducts);
          this.shops = newShops;
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
      this.getShops();
      return `with: ${reason}`;
    }
  }

}
