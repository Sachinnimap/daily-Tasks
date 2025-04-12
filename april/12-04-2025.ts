
//using this method then need to checkJs:false;
export declare function calculateTax(income:number):number; 

import  * as _ from  "lodash"


//method 1- use this for syntax to declare type of params and return
//instead of doing this there is also a way 
//method 2 - Create same name ts file and declare there type and return - "calculateTax.d.ts"

// _______
//method - 1
// /**
//  * 
//  * @param {number} number  - //change here * to number so now only number will take
//  * @returns {number} // return type can also give to return - Number;
//  */
// ________

// ____________________________
//method 2
//below -  added ts-nocheck so typescript will not throw any type error take any type parameter!
//---- //@ts-nocheck --- //
// ____________________________
export const calculateTax = (number) =>{
        return number * number;
}


export class Circle{
        constructor(public radius:number ){};
    }


export { Circle } from "./circle";
export { Square } from "./square";




//use this or else u can  directly export where u imported the class!
// export {Circle, Square}

export class Square{
        constructor( public width:number){}
    }
    
    
// const numberVarible :number = 34
// const stringVariable :string = 'string'
// const booleanVariable : boolean =  false
// const arrayVariable : (string | number)[] = ['first','second',323,] //array with  string/number value
// const objectVariable : {}  =  {name:'sachin',rollNo:32}
// const nullVariable : null  = null;
// const undefinedVariable : undefined = undefined;
// let neverVariable : never;
// let anyVariable : any =  true  //- 'anything'  can give to this variable!
// let unknownVariable : unknown = 'rraja' // anything - can be also here

// enum firstEnum {
//     firstName,
//     lastName,
// }

// console.log("newVariable",newVariable)

// console.log("any", anyVariable)

// let stringVariable = 'something';

// stringVariable = '';

// console.log("String:- ", stringVariable)

// let z = 26;
//if strict mode is false then null and undefined value will not going to check!
// z = "Not a number";
// z = null;    
// z = undefined; 

// var y; //this given any type thats why we can give any value to it
// console.log(typeof y);

//  y = 5; // number given and y type is number but still we can assign any value to Y
// console.log(y,typeof y)

//  y = [y , y]; // 
//  console.log(y,typeof y)

// let latest = 5 ;

// class Person{
//     constructor(public fistName:string,public lastName:string){}

//     fullNameHandler():string{
//         return `${this.fistName} ${this.lastName}`
//     }
// }

// let firstPerson = new Person("sacahin",'rasdk')
// firstPerson.fullNameHandler()

class Box {
        constructor(public width:number,public height:number) {                  // initializer
          this.width = width;
          this.height = height;
        }
        get area() { return this.width*this.height; } // getter function
        setSquare(side:number) {                             // normal function
          console.log("before - this.width",this.width,"height",this.height)
          this.width = this.height = 100;
          console.log("After- this.width",this.width)
        }
        static ZeroSize() { return new Box(0, 0); } //not avaible outside?   // static function
      }
      var big = new Box(1920, 1080);
      var mini = new Box(19.2, 10.8);
      console.log(`The big box is ${big.area}`);
    
      console.log(`The area  is ${big.setSquare(3)}.    `);
    
    
    
    //   let a = 5
    //   let b = 6
    //   let c = 7
    //   a = b = c = 10;
    //   console.log(a)
    //   console.log(b)
    //   console.log(c)
    
    
    
    // class 