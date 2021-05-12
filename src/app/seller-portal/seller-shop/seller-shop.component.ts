import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SellerService } from 'src/app/seller/seller.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-seller-shop',
  templateUrl: './seller-shop.component.html',
  styleUrls: ['./seller-shop.component.css']
})
export class SellerShopComponent implements OnInit {
  closeResult = '';
  seller: any;
  activateAddEditProdComp: boolean;
  modalTitle: string;
  seller_in: any;
  fake_id: any;

  constructor(
    public authService: AuthService,
    private sellerService: SellerService,
    // private masterService: MasterService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getSeller();
  }

  // addMaster() {
  //   this.master_in = {
  //     id: 0
  //   };
  //   this.fake_id = 0;
  //   this.modalTitle = "Add Master";
  //   this.activateAddEditProdComp = true;
  // }

  editMaster(seller) {
    this.seller_in = seller;
    this.fake_id = 1;
    this.modalTitle = "Edit Seller";
    this.activateAddEditProdComp = true;
  }

  // deleteMaster(master) {
  //   this.master_in = master;
  //   this.fake_id = -1;
  //   this.modalTitle = "Delete Master";
  //   this.activateAddEditProdComp = true;
  // }

  // getMaster() {
  //   this.masterService.getAll()
  //     .subscribe(
  //       (newMasters: any) => {
  //         console.log(newMasters);
  //         this.master = newMasters;
  //     });
  // }

  getSeller() {
    let access_obj = this.authService.access_token;

    this.sellerService.getOne(access_obj.id)
    .subscribe(
      (newSeller: any) => {
          console.log(newSeller);
          this.seller = newSeller;
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
      return `with: ${reason}`;
    }
  }

}
