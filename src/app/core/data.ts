import { HTTP_INTERCEPTORS } from "@angular/common/http";

export class data {
  products = [
    {
      "id": 0,
      "name": "Mast & Harbour",
      "description": "Shirt",
      "price": 1000,
      "image": "../../assets/2.jpg",
      "quantity": 1,
      "total": 0
    },
    {
      "id": 1,
      "name": "Roadster",
      "description": "Shirt",
      "price": 599,
      "image": "../../assets/3.jpg",
      "quantity": 1,
      "total": 0
    },
    {
      "id": 2,
      "name": "H&M",
      "description": "Tshirt",
      "price": 799,
      "image": "../../assets/4.jpg",
      "quantity": 1,
      "total": 0,

    },
    {
      "id": 3,
      "name": "H&M",
      "description": "Tshirt",
      "price": 999,
      "image": "../../assets/5.jpg",
      "quantity": 1,
      "total": 0
    },
    {
      "id": 4,
      "name": "Teddy Bear",
      "description": "Toy  ",
      "price": 1199,
      "image": "../../assets/6.jpg",
      "quantity": 1,
      "total": 0
    },
    {
      "id": 5,
      "name": "Aeroplane",
      "description": "Toy",
      "price": 1299,
      "image": "../../assets/7.jpg",
      "quantity": 1,
      "total": 0
    },
    {
      "id": 6,
      "name": "Man",
      "description": "Toy",
      "price": 1199,
      "image": " ../../assets/8.jpg",
      "quantity": 1,
      "total": 0
    },
    {
      "id": 7,
      "name": "Cars",
      "description": "Toy",
      "price": 2000,
      "image": "../../assets/9.jpg",
      "quantity": 1,
      "total": 0
    },

    {
      "id": 8,
      "name": "Football",
      "description": "Sports",
      "price": 2000,
      "image": "../../assets/10.jpg",
      "quantity": 1,
      "total": 0
    },
    {
      "id": 9,
      "name": "Basketball",
      "description": "Sports",
      "price": 2000,
      "image": "../../assets/11.jpg",
      "quantity": 1,
      "total": 0
    },
    {
      "id": 10,
      "name": "Baseball",
      "description": "Sports",
      "price": 3000,
      "image": "../../assets/12.jpg",
      "quantity": 1,
      "total": 0
    },
    {
      "id": 11,
      "name": "Volleyball",
      "description": "Sports",
      "price": 1500,
      "image": "../../assets/13.jpg",
      "quantity": 1,
      "total": 0
    }
  ];

  public cart: any[] = [];

  addtoCart(index: any) {
    this.cart.push(
      this.products[index])
  }

  total: any = 0;
  prices = [
    {
      id: 0,
      price: 1000
    },

    {
      id: 1,
      price: 599
    },

    {
      id: 2,
      price: 799
    },

    {
      id: 3,
      price: 999
    },

    {
      id: 4,
      price: 1199
    },

    {
      id: 5,
      price: 1299
    },

    {
      id: 6,
      price: 1199
    },

    {
      id: 7,
      price: 2000
    },

    {
      id: 8,
      price: 2000
    },

    {
      id: 9,
      price: 2000
    },

    {
      id: 10,
      price: 3000
    },

    {
      id: 11,
      price: 1500
    }
  ];

  producttotal(index: any, quantity: any): any {
    let data = this.cart[index];

    let test = this.prices.find(element => element.id === data.id);
    //console.log(test);

    data.quantity = quantity;

    data.total = test!.price * quantity;



    console.log(data);
    console.log(this.products);


  }





  delete(index: any) {
    this.cart.splice(index, 1);
    console.log("product is removed");
    alert("Product is removed");
  }




}
