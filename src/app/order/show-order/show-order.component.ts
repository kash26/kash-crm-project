import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IOrder } from 'src/app/common/interfaces/model';
import { OrderService } from './../../services/order.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-show-order',
  templateUrl: './show-order.component.html',
  styleUrls: ['./show-order.component.css']
})
export class ShowOrderComponent implements OnInit {
  order: any;
  id: any;

  constructor(
    public authService: AuthService,
    private route: ActivatedRoute,
    private orderService: OrderService) {
      this.id = "";
    }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        this.id = params.get('id');
      });

    this.getOrder(this.id);
  }

  getOrder(id) {
    this.orderService.getOne(id)
      .subscribe(
        (newOrder: IOrder) => {
          this.order = newOrder;
      });
  }

}
