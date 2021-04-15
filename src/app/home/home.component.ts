import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CartService } from '../cart.service';
import { Product } from '../product';
import { data } from '../core/data';

import { HttpResponse, HttpHeaders, HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DataService]
})
export class HomeComponent implements OnInit {

  constructor(private fs: DataService, private ct: CartService, private http: HttpClient, private dt: data) {

  }

  public products = this.dt.products;

  ngOnInit(): void {

    //this.dt.addtoCart(0);
    console.log(this.dt.cart);
  }


  /*get() {
    this.fs.products().subscribe(
      data => {
        this.products = data;
        console.log(data);
      }
    )
  }*/

  /*addItemtoCart(id: any, quantity: any): void {
    let payload = {
      productId: id,
      quantity
    };

    this.fs.addtoCart(payload).subscribe(
      () => {
        this.get();
        alert("Product added");
      }
    )
  }*/

  add(index: any) {
    this.dt.addtoCart(index);
    alert("Product added");
  }




  call() {
    alert("Calling");
  }




}
