import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IOrder } from 'src/app/common/interfaces/model';
import { AuthService } from 'src/app/services/auth.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-show-order',
  templateUrl: './show-order.component.html',
  styleUrls: ['./show-order.component.css']
})
export class ShowOrderComponent implements OnInit {
  order: any;
  order_id: any;

  constructor(
    public authService: AuthService,
    private route: ActivatedRoute,
    private orderService: OrderService) {
      this.order_id = "";
    }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        this.order_id = params.get('order_id');
      });

    this.getOrder(this.order_id);
  }

  getOrder(order_id) {
    this.orderService.getOne(order_id)
      .subscribe(
        (newOrder: IOrder) => {
          this.order = newOrder;
      });
  }

}
