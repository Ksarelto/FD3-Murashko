export class Product{

    weight: number
    name: string

  constructor(weight: number,name: string){
      this.weight = weight;
      this.name = name;
  }

  getScale():number{
      return this.weight;
  }

  getName():string{
      return this.name;
  }
}