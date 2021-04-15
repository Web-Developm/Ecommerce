import { Component, OnInit, OnChanges } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../product';
import { data } from '../core/data';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [DataService]
})
export class CartComponent implements OnInit {

  constructor(private ds: DataService, private dt: data) {

  }

  public items: any[] = this.dt.cart;

  total(index: any) {
    this.dt.producttotal(index);
  }

  ngOnInit(): void {
    console.log(this.dt.cart);
    this.dt.logTheData();
  }



}
