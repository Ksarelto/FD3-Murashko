import { Product } from "./Product";

export class Scales{
  productsArr: Array<Product> = [];

  addProduct(item: Product){
      this.productsArr.push(item);
  }

  get sumScale():number{
      return this.productsArr.reduce((sum,el) => sum += el.weight ,0)
  }

  get nameList():Array<string>{
      return this.productsArr.map((el) => el.name)
  }
}