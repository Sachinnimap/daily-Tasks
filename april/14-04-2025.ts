// let arrayVar : string[] = ['cchin','rgie','rememe']
// console.log(typeof arrayVar);

// let strVariable : readonly string = 'something' //throw error
// tuple is type of array with pre-defined length and type of each index!

// let tupleVar :  [string, number, boolean] = ['string',32,true];
// tupleVar.push('something')
// console.log(tupleVar); //Object

// let nameTuple : [firstName:string, secondName : string] = ['john','doe']

// console.log(nameTuple)

// function firstFunc([firstName:string, secondName : string]:['sachin','ram']):void{

// }

// const firstVar = JSON.parse("sachin") //but string is not valid so will return error
// console.log( firstVar) // just remove "" not for work for string

// let firstValue : any = 43;

// // console.log(firstValue.toUpperCase());

// console.log(firstValue);

// let secondValue :unknown  = 'something!';

// // console.log(secondValue.toUpperCase());

// console.log(typeof secondValue);
// secondValue = 344;


// console.log(typeof secondValue)


// let anyVar : any  = "any_string";

// let unknownVar : unknown  = 'unknown_string';

// anyVar = 'str_any'
// unknownVar = 'str_unknown'

// console.log("anyVar",anyVar)
// console.log("unknownVar",unknownVar)

// // var strVar: string  = unknownVar; //unknow cannot  assign to any variable
// // console.log("strVar",strVar)

// // unknownVar() cannot call method or anything to this

// console.log(anyVar.toUpperCase()) // in ANY method can be called!


// Enum


// enum Direction{
//     up = 'djke',
//     down = "3",
//     right ="6",
//     left = 43
// }

// console.log(Direction) //object

// const up  = 'something'

// console.log(up)




// enum Role {
//     Admin, 
//     User= 'sachin',
//   }
  
//   const r: number = Role.Admin; 
//   console.log(r)
//   console.log(Role.Admin); 

// const enum Teacher{
//     firstName,
//     lastName
// }

// console.log(Teacher.lastName)

// const enum Student{
//     firstName,
//     lastName
// }

// console.log(Student["0"]) //ReferenceError: Student is not defined

// // but without const we can access the inside variable becouse this become object 
//  enum Principle{
//     firstName,
//     lastName
// }

// console.log(Student[0])


function firstFunctionwithParams(firstName :string,secondName:string):void{
  console.log(firstName +  " " + secondName)
}

firstFunctionwithParams('john','doe')

// let arrowFunc = (firstName?:string,secondName:string):string =>  'something!';

function error(message: string): never {
// throw new Error(message);
return 'somtehing' //not return anything!
}

error("somethosdi")
