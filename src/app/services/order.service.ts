import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends DataService {
  constructor(http: HttpClient) {
    super('order/order_create_list/', http)
  }

}
