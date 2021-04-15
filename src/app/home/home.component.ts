import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { data } from '../core/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DataService]
})
export class HomeComponent implements OnInit {

  constructor(private fs: DataService,private dt: data) {

  }

  public products = this.dt.products;

  ngOnInit(): void {

    //this.dt.addtoCart(0);
    console.log(this.dt.cart);
  }


  add(index: any) {
    this.dt.addtoCart(index);
    alert("Product added");
  }


  call() {
    alert("Calling");
  }




}
