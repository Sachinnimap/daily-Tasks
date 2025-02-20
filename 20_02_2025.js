

{/* 
    noname = 'no_name' //accessible 
    var a = 'var_a';// accesible
    let b = 'let_a';
    const c = 'const_c'
}

function blockFunc(){
    noname = 'no_name' //accesible
    var a = 'var_a';   
    let b = 'let_a';
    const c = 'const_c'
}

console.log(noname) //without let var const this will be a global variable anywhere in the code so any where we can access;

// in var if it in declare in {} this will be global scope
// but if we declare inside function this become functional scope variable
//  so it will accessing outside in {} but not in functions
console.log(b) 
console.log(a)
console.log(c) */}


/* 
var  a;

if(true){
    // this declared const variable will be defferent becouse of scope 
    //  not for var ...var can be declare multiple times..

    var a= 'sachin'
}

console.log(a) */


/* 
// for(var i = 1; i<11 ;i++){}
// console.log(i) //showing 10
 */

/* // JavaScript follows lexical scoping,
//  meaning that functions remember the scope in which they were defined,
//  not where they are called.

// const dog = 'snickers';
// function logDog() {
//   console.log(dog);
// }

// function go() {
//   const dog = 'sunny';
//   logDog(); // calling but this will take reference of where the function is declared...
// }
// go(); //sunny */

/* //backticks
// console.log("he`s is so cool") */

// console.log(Math.floor(16.00))  // 16.8  - 16
// console.log(Math.ceil(16.01))  // 16.8  - 17
// console.log(Math.abs(16.8))  // 16.8 (- & +)  -  16.8 //just for removing negative this will not remove
// console.log(Math.round(16.8)) // 16.8  - 17 (less)

// console.log(Math.round(5.5))

// Math.random()

/* //null value can be assign to a object...
const dummyObj = {
    name : 'sachin',
    add : "delhi",
    loca : null
}

dummyObj.name = "rahul";
dummyObj.name = null


console.log(dummyObj)
 */

// console.log(parseFloat("4l525.00")); // take string then convert into number
// console.log(parseInt(4343.09)) //return number without decimal

/* function sumFunc(){
        console.log("working")
}
// sumFunc()
console.log(sumFunc) //return only a function  -- becouse function not called
console.log(sumFunc()) //undefined - function called but we are not returning any thing thats why this will return undefined>>>

 */

// const total = 100 * 1.13;
// console.log(total);
// return total;

// function call or function invocation
// calculateBill();

// function coreFunc(name,sirname){
//     console.log(name,)
// }

// console.log(coreFunc("sachin","ram"))


function add(obj){
    // obj = {
    //     number : obj.number +1
    // }
    obj.number++
    console.log("Inner",obj)
}

var objVal  = {number :10}

add(objVal)

console.log(objVal)