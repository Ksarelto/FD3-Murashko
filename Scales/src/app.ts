import {Scales} from './Scales'

export interface IScalable{
    getScale():number
    getName():string
  }

class Apple implements IScalable{
    constructor(private weight: number, private name: string){
    }
    getScale():number{
        return this.weight;
    }
  
    getName():string{
        return this.name;
    }
}
class Tomato implements IScalable{
    constructor(private weight: number, private name: string){
    }
    getScale():number{
        return this.weight;
    }
  
    getName():string{
        return this.name;
    }
}

const apple1:Apple = new Apple(300,"pineapple");
const apple2:Apple = new Apple(200,"pineapple2");
const apple3:Apple = new Apple(100,"pineapple3");

const tomato1:Tomato = new Tomato(300,"fingers");
const tomato2:Tomato = new Tomato(200,"fingers2");
const tomato3:Tomato = new Tomato(100,"fingers3");

const scale:Scales = new Scales();

scale.addProduct(apple1)
scale.addProduct(apple2)
scale.addProduct(apple3)
scale.addProduct(tomato1)
scale.addProduct(tomato2)
scale.addProduct(tomato3)

console.log(scale.sumScale);
console.log(scale.nameList);