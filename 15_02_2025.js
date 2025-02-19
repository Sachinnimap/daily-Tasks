SCOPES
var test = 'sachin'
function testFunction(){
    console.log(test)
}

testFunction()

console.log(test)

 it means we can access variable any where in the code if variable is declare as global scope
_______________________________________________

                local scope and functional scope
                
local scope means if we declare any value in paranthesis so we cannot access that variable out this will give us 'Reference Error'
local scope or function scope means we cannot this create a scope so if declare variable as val let or const this will not accessible outside we can only access inside this scope using Curly Braces only not any function this will not create any scope for VAR variable.
 
function localFunc(){
    var test = 'sachin local'
    console.log(test)
}
localFunc();

______________________________________________________________
                        BLOCK SCOPE
  block scope only works for let and const  and also this is added in latest ES6 features 
  they introduce let and const as block scope variable;
 
{
    var test = 'var'
    let test2 = "let"
    const test3 = "const"
}

console.log(test)
console.log(test2)
console.log(test3)

___________________________________________________________
                    Nested Scope
                
var globalVal = 'globalVariable'

function  localFunc(){
    var localVal = 'localVal'
    console.log(localVal)
    {
        var blockVal = 'blockVal'
        console.log(blockVal)
    }
}
console.log(globalVal)
localFunc();

_________________________________________________________
                    Laxical scope 
Laxical Scope means we cannot accesss any variable from any where
so scope have to access variable from their scope  

_________________________________________________
                            SCOPE CHAINING
                            
JavaScript engine will try to find the variable’s value in the current scope. If it could not find the variable, it will look into the outer scope and will continue to do so until it finds the variable or reaches global scope.

_____________________________________________________________

lexical scope is a scope that is determined at compile time and a lexical environment is a place where variables are stored during the program execution.

___________________________________________________________


Primitive data types

Number
String

number - number in javascript can be in decimal and normal number

let normNum = 5;
let deciNum = 5.5;

console.log("non-decimal" + normNum);
console.log("decimal Number " + deciNum);
String -  simple string

Undefined:
This means that a variable has been declared but has not been assigned a value, or it has been explicitly set to the value `undefined`.

    let newVal
    console.log(newVal)
    let newVal2 = 34
    newVal2 = undefined
    console.log(newVal2)
    
    
Boolean 
the boolean data can accept only two values - TRUE & FALSE
let isLoading  = true;
let isLoading = false;

NULL
this data type only hold null values;
let booleanVal  = null;

BigInt
this is used to store big integer values;
 let bigInt  =  343333333333333333333332423242252343432
 console.log(bigInt)

Symbol
symbol is used to created unique value always;
let symVar = Symbol('Hello symbol')
console.log(typeof(symVar))
console.log(symVar);


NON Primitive dataTypes

Array  - [2,4,3,5,2,5,3,6,5]
Object - {nfl:'232',rold:'fjorld}'

ES6 Features.....

1) let and const variable
2) Arrow Function
3) Template literals
4) Default parameters
5) Destructuring Assignment
6) Rest and Spread operators
7) Classes - cleaner Object-Oriented Programming
8) Modules : Native import and export
9) Promises : simplified asynchronous programming
10) Enhanced Object literals : Concise syntax


Arrow -  single line code function without return keyword
     -  not need .bind() method in this becouse of laxical              scoping.

Template literals - `this is your ${id}`;

Object Destructuring 

 let objDest = {name:'elss',jodk:'eosleld'}
  if not in object put position given in destructuring then "UNDEFINED"
 const {name,jodk}  = objDest
 
 console.log(name,jodk);


Array destructuring

let arrDest = [1,2,3,4,5]

const [first,second,third , fourth,fifth,sixth] = arrDest;

here sixth not found value at there position thats why this will so undefined;

console.log(first,second , third , fourth, fifth,sixth)

Rest AND  Spread operators

function sum(...numbers){
    return numbers.reduce((acc,val) => acc + val,0)
}

console.log(sum(1,2,3,4,5,6))

Function declarations are hoisted but function expressions are not.





