import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class ManagerService extends DataService {

  constructor(http: HttpClient) {
    super('manager/manager_list/', http)
  }
}
