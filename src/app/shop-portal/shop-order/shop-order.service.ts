import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Injectable({
  providedIn: 'root'
})
export class ShopOrderService extends DataService {
  constructor(http: HttpClient) {
    super('order/shop_order_create_list/', http)
  }
}
