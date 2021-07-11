import { IScalable } from "./app";

export class Scales{
  productsArr: IScalable[] = [];

  addProduct(item: IScalable): void{
      this.productsArr.push(item);
  }

  get sumScale():number{
      return this.productsArr.reduce((sum,el) => sum += el.getScale() ,0)
  }

  get nameList():Array<string>{
      return this.productsArr.map((el) => el.getName())
  }
}