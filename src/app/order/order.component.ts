import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { IOrder } from './../common/interfaces/model';
import { OrderService } from './../services/order.service';
import { AppError } from './../common/errors/app-error';
import { NotFoundError } from './../common/errors/not-found-error';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders: IOrder;
  display='none';
  modalVisible = false;

  modalTitle: string;
  activateAddOrder: boolean = false;
  activateEditOrder: boolean = false;
  order: any;

  constructor(
    public authService: AuthService,
    private route: ActivatedRoute,
    private orderService: OrderService) { }

  ngOnInit(): void {
    this.getOrders();
    Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .switchMap(combined => {
      let id = combined[0].get('id');
      let page = combined[1].get('page');

      // this.orderService.getAll({ id: id, page: page });
      return this.orderService.getAll();
    })
    .subscribe((orders: any) => this.orders = orders);
  }

  openModal(){
    this.display='block';
    this.modalVisible = true;
  }

  onCloseHandled(){
    this.display='none';
    this.activateAddOrder = false;
    this.activateEditOrder = false;
    this.modalVisible = false;
  }

  // deleteClick(order: any) {
  //   if (confirm('Are you sure ?')) {
  //     this.orderService.delete(order.id)
  //       .subscribe(
  //         () => {
  //           window.location.reload();
  //         },
  //         (error: AppError) => {
  //           if (error instanceof NotFoundError) {
  //             alert('This order has been already deleted.')
  //           }
  //           else throw error;
  //         });
  //   }
  // }

  // addOrder() {
  //   this.modalTitle = "Create A New Order";
  //   this.activateAddOrder = true;
  //   this.modalVisible = true;
  //   this.getOrders();
  // }

  // editOrder(order) {
  //   this.order = order;
  //   this.modalTitle = "Edit An Order";
  //   this.activateEditOrder = true;
  //   this.modalVisible = true;
  //   this.getOrders();
  // }

  closeClick(isVisible: boolean) {
    // this.activateAddOrder = isVisible;
    // this.activateEditOrder = isVisible;
    // this.modalVisible = isVisible;
    this.onCloseHandled();
    this.getOrders();
  }

  getOrders() {
    this.orderService.getAll()
      .subscribe(
        (newOrder: IOrder) => {
          this.orders = newOrder;
      });
  }

}
