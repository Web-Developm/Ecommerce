export class Product {
  id!:Number;
  name!:String;
  description!:String;
  price!:Number;
  image!:String;

  constructor(id:number,name:string,description=" ", price=0, image:string)
  {
    this.id=id;
    this.name=name;
    this.description=description;
    this.price=price;
    this.image=image;
  }

}
