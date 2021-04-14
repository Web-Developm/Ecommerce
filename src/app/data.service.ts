import { Injectable } from '@angular/core';
import { Product } from '../app/product';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  products: Product[] = [

    {
      id: 1,
      name: "Mast & Harbour",
      description: "Shirt",
      price: 1000,
      image: "../../assets/2.jpg",
      quantity: 1
    },

    {
      id: 2,
      name: "Roadster",
      description: "Shirt",
      price: 599,
      image: "../../assets/3.jpg",
      quantity: 1
    },

    {
      id: 3,
      name: "H&M",
      description: "Tshirt",
      price: 799,
      image: "../../assets/4.jpg",
      quantity: 1
    },

    {
      id: 4,
      name: "H&M",
      description: "Tshirt",
      price: 999,
      image: "../../assets/5.jpg",
      quantity: 1
    },

    {
      id: 5,
      name: "Teddy Bear",
      description: "Toy  ",
      price: 1199,
      image: "../../assets/6.jpg",
      quantity: 1
    },

    {
      id: 6,
      name: "Aeroplane",
      description: "Toy",
      price: 1299,
      image: "../../assets/7.jpg",
      quantity: 1
    },

    {
      id: 7,
      name: "Man",
      description: "Toy",
      price: 1199,
      image: "../../assets/8.jpg",
      quantity: 1
    },

    {
      id: 8,
      name: "Cars",
      description: "Toy",
      price: 2000,
      image: "../../assets/9.jpg",
      quantity: 1
    },
    {
      id: 9,
      name: "Football",
      description: "Sports",
      price: 2000,
      image: "../../assets/10.jpg",
      quantity: 1
    },

    {
      id: 10,
      name: "Basketball",
      description: "Sports",
      price: 2000,
      image: "../../assets/11.jpg",
      quantity: 1
    },

    {
      id: 11,
      name: "Baseball",
      description: "Sports",
      price: 3000,
      image: "../../assets/12.jpg",
      quantity: 1
    },

    {
      id: 12,
      name: "Volleyball",
      description: "Sports",
      price: 1500,
      image: "../../assets/13.jpg",
      quantity: 1
    }

  ];

  items: Product[] = this.products;

  add(items: any) {
    this.items.push(items);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor() { }

}
