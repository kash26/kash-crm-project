import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Injectable({
  providedIn: 'root'
})
export class ShopProductService extends DataService {
  constructor(http: HttpClient) {
    super('product/shop_product_create_list/', http)
  }
}
