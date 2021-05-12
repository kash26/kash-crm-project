import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MasterService } from 'src/app/master/master.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-shop-master',
  templateUrl: './shop-master.component.html',
  styleUrls: ['./shop-master.component.css']
})
export class ShopMasterComponent implements OnInit {
  closeResult = '';
  master: any;
  activateAddEditProdComp: boolean;
  modalTitle: string;
  master_in: any;
  fake_id: any;

  constructor(
    public authService: AuthService,
    private masterService: MasterService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getMaster();
  }

  // addMaster() {
  //   this.master_in = {
  //     id: 0
  //   };
  //   this.fake_id = 0;
  //   this.modalTitle = "Add Master";
  //   this.activateAddEditProdComp = true;
  // }

  editMaster(master) {
    this.master_in = master;
    this.fake_id = 1;
    this.modalTitle = "Edit Master";
    this.activateAddEditProdComp = true;
  }

  // deleteMaster(master) {
  //   this.master_in = master;
  //   this.fake_id = -1;
  //   this.modalTitle = "Delete Master";
  //   this.activateAddEditProdComp = true;
  // }

  getMaster() {
    this.masterService.getAll()
      .subscribe(
        (newMasters: any) => {
          console.log(newMasters);
          this.master = newMasters;
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
      this.getMaster();
      return `with: ${reason}`;
    }
  }

}
