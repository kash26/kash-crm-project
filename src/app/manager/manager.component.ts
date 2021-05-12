import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ManagerService } from './manager.service';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  closeResult = '';
  manager_single: any;
  activateAddEditProdComp: boolean;
  modalTitle: string;
  manager: any;
  fake_id: any;

  constructor(
    public authService: AuthService,
    private managerService: ManagerService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getManagers();
    // this.updateList();
  }

  // addManager() {
  //   this.manager = {
  //     id: 0
  //   };
  //   this.fake_id = 0;
  //   this.modalTitle = "Add Manager";
  //   this.activateAddEditProdComp = true;
  // }

  editManager(manager) {
    this.manager = manager;
    this.fake_id = 1;
    this.modalTitle = "Edit Manager";
    this.activateAddEditProdComp = true;
  }

  deleteManager(manager) {
    this.manager = manager;
    this.fake_id = -1;
    this.modalTitle = "Delete Manager";
    this.activateAddEditProdComp = true;
  }

  getManagers() {
    this.managerService.getAll()
      .subscribe(
        (newManager: any) => {
          // console.log(newProducts);
          this.manager_single = newManager;
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
      this.getManagers();
      return `with: ${reason}`;
    }
  }

}
