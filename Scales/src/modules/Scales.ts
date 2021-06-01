export class Scales{
  productsArr = [];

  addProduct(item: Object){
      this.productsArr.push(item);
  }

  get sumScale(){
      return this.productsArr.reduce((sum,el) => sum += el.weight ,0)
  }

  get nameList(){
      return this.productsArr.map((el) => el.name)
  }
}