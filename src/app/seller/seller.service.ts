import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class SellerService extends DataService {
  constructor(http: HttpClient) {
    super('seller/seller_create_list/', http)
  }
}
