import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../services/auth.service';
import { MasterService } from './master.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
  closeResult = '';
  masters: any;
  activateAddEditProdComp: boolean;
  modalTitle: string;
  master: any;
  fake_id: any;

  constructor(
    public authService: AuthService,
    private masterService: MasterService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getMasters();
  }

  addMaster() {
    this.master = {
      id: 0
    };
    this.fake_id = 0;
    this.modalTitle = "Add Master";
    this.activateAddEditProdComp = true;
  }

  editMaster(master) {
    this.master = master;
    this.fake_id = 1;
    this.modalTitle = "Edit Master";
    this.activateAddEditProdComp = true;
  }

  deleteMaster(master) {
    this.master = master;
    this.fake_id = -1;
    this.modalTitle = "Delete Master";
    this.activateAddEditProdComp = true;
  }

  getMasters() {
    this.masterService.getAll()
      .subscribe(
        (newMasters: any) => {
          this.masters = newMasters;
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
      this.getMasters();
      return `with: ${reason}`;
    }
  }

}
