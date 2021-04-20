import { Component, OnInit } from '@angular/core';
import {data} from '../core/data';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})
export class ClothesComponent implements OnInit {

  constructor(public dt:data) { }

  public products:any=this.dt.products;

  ngOnInit(): void {
  }

  add(index:any)
  {
    this.dt.addtoCart(index);
  }

}
