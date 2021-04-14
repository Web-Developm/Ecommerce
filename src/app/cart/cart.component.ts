import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Product} from '../product';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [DataService]
})
export class CartComponent implements OnInit {



  constructor(private fs: DataService) {
    console.log(this.items);
  }

  items=this.fs.getItems();



  ngOnInit(): void {

  }

}
