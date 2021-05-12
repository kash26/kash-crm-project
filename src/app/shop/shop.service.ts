import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class ShopService extends DataService {
  constructor(http: HttpClient) {
    super('shop/shop_create_list/', http)
  }
}
