import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {CartService} from '../cart.service';
import {Product} from '../product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[DataService]
})
export class HomeComponent implements OnInit {

  constructor(private fs:DataService, private ct:CartService) { }

  ngOnInit(): void {
  }

  data:Product[]=this.fs.products;

  call=():any =>{
    alert("Calling");
  }

  add=(item:any):any =>{
    this.fs.add(item);
    alert("Your product has been added to the cart!");
    console.log(item);
  }


}
