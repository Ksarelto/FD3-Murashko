export class Product{
  constructor(weight: number,name: string){
      this.weight = weight;
      this.name = name;
  }

  getScale(){
      return this.weight;
  }

  getName(){
      return this.name;
  }
}