import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class MasterService extends DataService {

  constructor(http: HttpClient) {
    super('master/master_create_list/', http)
  }
}
