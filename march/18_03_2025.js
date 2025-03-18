//         /* Types of functions */

// // regular function
// function regFunc (name) {
//         console.log(`I am regular func, ${name} `)
// }
// regFunc("sachin")

// //anonymous function
// let anonymousFunc = function (name){
//         console.log(`Hey ${name}, i am anonymous function , function does not have name`)
// }
// anonymousFunc("raaj")

// //Immediate invoked function expression IIFE
// (function (name){
// console.log(`${name},I am IIFE and can run immediatly we dont need to call`)
// })('sachin')


// foo() //calling foo
// var foo = 20; //function se variable me convert karega aur use value de dega
// function foo(){
//     console.log('calling foo')
// }
// foo()  //becouse function is now a variable thats why this will give error!



// function outer(){
//     function inner(){
//         console.log(x) 
//     }
//     const x = 5;
//     return inner;
// }
// const inner = outer();
// inner(); //5


// let newObj = {
// increment:undefined
// }

// let newVar = 'sachin'

// function createCounter() {
//         let count = 0;

//         function check() {
//                 count++;
//                 console.log(count);
//             }
//          newObj.increment = check; // giving this function to above obj this will remember 
//          newVar = check;

//         // {
//         //     increment: function () {
//         //         count++;
//         //         console.log(count);
//         //     },
//         //     decrement: function () {
//         //         count--;
//         //         console.log(count);
//         //     }
//         // };
//     }
    
//     const counter = createCounter();
// //     counter
//     newObj.increment(); // ✅ 2
// //     counter.decrement(); // ✅ 1

// newVar()



// console.log(1);

// setTimeout(()=>{
//     console.log(2)
// },1000)

// setTimeout(()=>{
//         Promise.resolve(1).then(function resolve(){
//                 // setTimeout(()=>{
//                     console.log(3)
//                 // },0)
//             })
// //     console.log(3)
// },5000)

// Promise.resolve(1).then(function resolve(){
//     // setTimeout(()=>{
//         console.log(4)
//     // },0)
// })

// console.log(5);  
// //14532


// console.log(3<4<5); // 1<5 - true
// console.log(3>4>5); // 1>5  - false

// console.log(3>4>-1); // 1>-1  - true

// const x1 = new Promise((resolve, reject) =>{
//     setTimeout(resolve,500,'one')
// })

// const x2 = new Promise((resolve, reject)=>{
//     setTimeout(resolve,100,'two')
// })

// Promise.all([x1,x2]).then((res) =>{
// console.log(res)}) 

// Promise.race([x1,x2]).then((res)=>{
//     console.log(res); 
// })

// setTimeout(()=>{
//         console.log("First")
// },1000)

// setTimeout(()=>{
//         console.log("Second")
// },1000)
// "use strict"

// function latestFunc (){
//       var  newVal = 'sachin'
// }
// latestFunc()
// console.log(newVal)


class Human{
        name = 'sachin'
        age = 20
        gender  = 'male'
        isVeg = true

        get getGender(){
                console.log(this.gender)
        }
       
        set setGender(value){
                this.gender = "not mentioned!"
                
        }
}

const createHuman = new Human()
console.log("createHuman", createHuman)
createHuman.getGender;
createHuman.setGender 