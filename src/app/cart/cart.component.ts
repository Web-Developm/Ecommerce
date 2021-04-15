import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { CartService } from '../cart.service';
import { Product } from '../product';
import { data } from '../core/data';




@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [DataService, CartService]
})
export class CartComponent implements OnInit {

  carts!: any;
  cartDetails!: any;

  constructor(private ds: DataService, private cs: CartService, private dt: data) {

  }

  public items:any[]= this.dt.cart;

  public sum:any=this.dt.total;

  getCart() {
    this.ds.getCartItems().subscribe(
      data => {
        this.carts = data;
      }
    )
  }







  ngOnInit(): void {
    console.log(this.dt.cart);
  }

  ngOnChanges(): void {
    console.log(this.items);
  }

}
