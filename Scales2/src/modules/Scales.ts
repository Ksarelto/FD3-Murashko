import { Product } from "./Product";

interface IStorageEngine{
    addItem(item: Product): void
    getItem(index: number): Product
    getCount(): void
}

export class Scales< StorageEngine extends IStorageEngine>{
  productsArr: Product[] = [];

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


class ScalesStorageEngineArray{
    products: Product[] = [];

    addItem(item: Product){
        this.products.push(item);
    }
    getItem(index: number): Product{
        return this.products[index];
    }
    getCount(){
        return this.products.length;
    }
}