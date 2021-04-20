import { Component, OnInit } from '@angular/core';
import {data} from '../core/data';

@Component({
  selector: 'app-toys',
  templateUrl: './toys.component.html',
  styleUrls: ['./toys.component.css']
})
export class ToysComponent implements OnInit {

  constructor(public dt:data) { }

  public products:any=this.dt.products;

  add(index:any)
  {
    this.dt.addtoCart(index);
  }

  ngOnInit(): void {
  }

}
