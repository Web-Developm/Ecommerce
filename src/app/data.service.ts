import { Injectable } from '@angular/core';
import { Product } from '../app/product';

import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http: HttpClient) { }

  url = "http://localhost:5555";

  item="http://localhost:4200";




  products(): Observable<any> {
    return this.http.get(`${this.url}/products`);
  }

  addtoCart(payload: any): Observable<any> {
    return this.http.post(`${this.item}/cart`, payload);
  }

  getCartItems(): Observable<any> {
    return this.http.get(`${this.url}/cart`);
  }




  items: Product[] = [];

}
