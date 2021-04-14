import { Injectable } from '@angular/core';
import { Product } from '../app/product';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  products: Product[] = [

    {
      id:1,
      name:"Mast & Harbour",
      description:"",
      price:1000,
      image:"../../assets/2.jpg",
      quantity:0
    },

    {
      id:2,
      name:"Roadster",
      description:"",
      price:599,
      image:"../../assets/3.jpg",
      quantity:0
    },

    {
      id:3,
      name:"H&M",
      description:"",
      price:799,
      image:"../../assets/4.jpg",
      quantity:0
    },

    {
      id:4,
      name:"Teddy Bear",
      description:"",
      price:999,
      image:"../../assets/5.jpg",
      quantity:0
    },

    {
      id:5,
      name:"Aeroplane",
      description:"",
      price:1199,
      image:"../../assets/6.jpg",
      quantity:0
    },

    {
      id:6,
      name:"Toy",
      description:"",
      price:1299,
      image:"../../assets/7.jpg",
      quantity:0
    },

    {
      id:7,
      name:"Cars",
      description:"",
      price:1199,
      image:"../../assets/8.jpg",
      quantity:0
    },

    {
      id:8,
      name:"Football",
      description:"",
      price:2000,
      image:"../../assets/9.jpg",
      quantity:0
    },

    {
      id:9,
      name:"Basketball",
      description:"",
      price:2000,
      image:"../../assets/10.jpg",
      quantity:0
    },

    {
      id:10,
      name:"Baseball",
      description:"",
      price:3000,
      image:"../../assets/11.jpg",
      quantity:0
    },

    {
      id:11,
      name:"Volleyball",
      description:"",
      price:1500,
      image:"../../assets/12.jpg",
      quantity:0
    }

  ]


  constructor() { }
}
