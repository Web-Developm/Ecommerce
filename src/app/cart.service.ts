import { Injectable } from '@angular/core';
import { DataService } from '../app/data.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private Data: DataService) { }

  items: any = [];



  add(sample: any) {
    this.items.push(sample);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }



}
