import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends DataService {
  constructor(http: HttpClient) {
    super('product/product_create_list/', http)
  }
}
