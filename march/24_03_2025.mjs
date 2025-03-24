
//24 - 03 - 2025

// for(let i=0; i<5; i++){
//     console.log("for loop")
// } //here let considered as block scope!

// let i =0
// while(i<5){
//     console.log("whileLoop!")
    
//     i++
// }

// let i = 0;

// //need to declare value outside 
// do{
//     console.log(i)
//     i++
// }while(i<5)

// let firstObj = {a:1,b:2,c:3,d:4,e:5,f:6}
// let firstArr = [1,2,3,4,6,2,4,6,2,4,4]

// for(let key in firstObj){
//     console.log("Key :-" ,key)
// }

//array, string,mapped array will can be iterate using this for of loop!
// for(let key of "sachin"){ 
//     console.log("key",key)
// }

//for each method always return undefined!
// let value = firstArr.forEach((value)=> value) 
// console.log(value)

//Operators!
// let a = 5
// a = 5
// console.log(a)

//arithmetic operators! + - / *
//assignment operator! = != 
//comparision operator! < > =< >=
//Logical Operators AND OR NOT
//Bitwise Operators
//String Operators


//Bitwise operator!

// console.log(5 | 3)
// console.log(5 & 3)
// console.log(5 ^ 3)
//    32168421

// 0101
// 0011
// 0001 - and & operator!
// 0111 - OR | operator!
// 0110 - 6  - XOR operator! //if both value is same then will return to 0;

// console.log(~5) 
//0110 
// - 1001

// 0101
//1010 -  -6
//  console.log(5 >> 2)

 // 0101 
 //0001


//  const promise = new Promise((resolve, reject) => {
//     resolve('Issue Resolved!');
//   });
  
//   same error handler that why output will be same
//   promise.catch(error => "error");//  
//   promise.catch(error => console.log(error));

// both will handle that promise
// promise.then((value)=>console.log(value))
// promise.then((value)=> console.log(value))


// console.log("first!")

// const promise = new Promise((resolve,reject)=>{
//     console.log("second!")
//     resolve("success")
// }).then((value)=>console.log("after",value)) // only .then() will considered as

// console.log("third!")



//  const latestPromiseFirst = ()=>{
//     return  new Promise(function (resolve,reject) {
//         reject(1)
//     })
// }

// let takeFunc = latestPromiseFirst();

// //if we return any thing then that will go in
// // .then block !'
// setTimeout()

// takeFunc
// .then(function (value){
//     console.log("first!",value)
//     return ++value
    
// })
// .catch(function (error){
//     console.log("six!Error",error)
//     return "error_return"
// })
// .catch((error)=>{
//     console.log("Error : - ",error)
// })
// .then(function (value){
//     console.log("second!",value)
//     return ++value
// })
// .then(function (value){
//     console.log("third!",value)
//     throw new Error("second Error!")
//     return ++value
// })
// .then(function (value){
//     console.log("four!",value)
//     return ++value
// })
// .then(function (value){
//     console.log("five!",value)
//     return ++value
// })
// .catch((error)=>{
//     console.log("Error : - ",error)
// })
// .then(function (value){
//     console.log("seventh!",value)
// })


// let arrowFunc = (...props) =>{
//     console.log('parameters -',props) //convert props in array!
// }


// arrowFunc('fisrt','second')

// function handleProps(){
//     // console.log(arguments)
//     // here argument is accessible but in the form of object
// }

// handleProps('fist','secnd','thired')



//Recursion

// function factorial(n){
//         if(n === 1) return 1;

//         return n * factorial(n-1);
// }

// console.log(factorial(5)) //120

// recursion means that function return himself !!!



// console.log(" " && undefined) //false && false
 // 0 consider as false value!
 // 


//  console.log(undefined &&  Number('sah'))

// let fruit = "orange";

// switch (fruit) {
//     case "orange":
//         break;
//     case "banana":
//         console.log("Bananas are yellow.");  
//         break    
//     case "apple":
//         console.log("Apples are red or green.");
//         break
//     case "grape":
//         console.log("Grapes are purple or green.");
//         break
//     default:
//         console.log("Unknown fruit.");
// } 

// orange and banana - in both cases this will going work!

//fall throw next cases! becouse there is no break statement!


// function handleError(err, result){
//     if(err) return console.log("something went wrong!")
//     console.log("success!",result)
// }


// function simpleFunc(callbackFunc, input) {
//         if(input < 10){
//             return callbackFunc(true)
//         }
//         handleError(null, input)
// }

// simpleFunc(handleError,18)

