import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SellerService } from './seller.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {
  closeResult = '';
  sellers: any[] = [];
  activateAddEditProdComp: boolean;
  modalTitle: string;
  seller: any;
  fake_id: any;

  constructor(
    public authService: AuthService,
    private sellerService: SellerService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getSellers();
  }

  // addSeller() {
  //   this.seller = {
  //     id: 0
  //   };
  //   this.fake_id = 0;
  //   this.modalTitle = "Add Seller";
  //   this.activateAddEditProdComp = true;
  // }

  // editSeller(seller) {
  //   this.seller = seller;
  //   this.fake_id = 1;
  //   this.modalTitle = "Edit Seller";
  //   this.activateAddEditProdComp = true;
  // }

  deleteSeller(seller) {
    this.seller = seller;
    this.fake_id = -1;
    this.modalTitle = "Delete Seller";
    this.activateAddEditProdComp = true;
  }

  getSellers() {
    this.sellerService.getAll()
      .subscribe(
        (newSellers: any) => {
          // console.log(newProducts);
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
