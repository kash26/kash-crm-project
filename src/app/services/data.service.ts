import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import { tap, catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AppError } from './../common/errors/app-error';
import { NotFoundError } from './../common/errors/not-found-error';
import { BadInput } from './../common/errors/bad-input';
import { environment as env } from './../../environments/environment';
import { NotAuthorized } from '../common/errors/not-authorized';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  user_detail = localStorage.getItem('user_detail');
  access: any = JSON.parse(this.user_detail);

  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + this.access?.access
    })
  }

  constructor(
    private url: string,
    private http: HttpClient) { }

  getAll() {
    return this.http.get(env.apiUrl + this.url, this.httpOptions)
    .pipe(
      tap( (res: any) => {
        return res;
        }),
      catchError(this.handleError)
    );
  }

  getShopAll(shop_id: any) {
    return this.http.get(env.apiUrl + this.url + `${shop_id}/`, this.httpOptions)
    .pipe(
      tap( (res: any) => {
        return res;
        }),
      catchError(this.handleError)
    );
  }

  getOne(id: any) {
    return this.http.get(env.apiUrl + this.url + id + '/', this.httpOptions)
    .pipe(
      tap( (res: any) => {
        return res;
        }),
      catchError(this.handleError)
    );
  }

  create(resource: any) {
    return this.http.post(env.apiUrl + this.url, resource, this.httpOptions)
    .pipe(
      tap( (res: any) => {
        return res;
        }),
      catchError(this.handleError)
    );
  }

  shopCreate(shop_id: any, resource) {
    return this.http.post(env.apiUrl + this.url + `${shop_id}/`, resource, this.httpOptions)
    .pipe(
      tap( (res: any) => {
        return res;
        }),
      catchError(this.handleError)
    );
  }

  update(resource: any) {
    return this.http.put(env.apiUrl + this.url + resource.id + '/', resource, this.httpOptions)
    .pipe(
      tap( (res: any) => {
        return res;
        }),
      catchError(this.handleError)
    );
  }

  patching(resource: any) {
    return this.http.patch(env.apiUrl + this.url + resource.id + '/', resource, this.httpOptions)
    .pipe(
      tap( (res: any) => {
        return res;
        }),
      catchError(this.handleError)
    );
  }

  delete(id: any) {
    return this.http.delete(env.apiUrl + this.url + id + '/', this.httpOptions)
    .pipe(
      tap( (res: any) => {
        return res;
        }),
      catchError(this.handleError)
    );
  }

  signup(resource: any) {
    return this.http.post(env.apiUrl + this.url, resource)
    .pipe(
      tap( (res: any) => {
        return res;
        }),
      catchError(this.handleError)
    );
  }

  private handleError(error: Response) {
    if (error.status === 400)
      return throwError(new BadInput(error));

    if (error.status === 404)
      return throwError(new NotFoundError());

    if (error.status === 401)
      return throwError(new NotAuthorized());

    return throwError(new AppError(error));
  }
}
