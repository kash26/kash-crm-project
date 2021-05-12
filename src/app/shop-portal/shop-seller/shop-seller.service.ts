import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Injectable({
  providedIn: 'root'
})
export class ShopSellerService extends DataService {
  constructor(http: HttpClient) {
    super('seller/shop_seller_create_list/', http)
  }
}
