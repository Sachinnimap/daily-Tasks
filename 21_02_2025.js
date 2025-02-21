//21_feb_2025

/* let first = 4;
let second = 5;
let third = 6;
let forthObj = {
    firstName : 'sachin',
    secondName : "ram"
}
let fifthArr = [3,3,5,3,5,6,4,5]

function greet(a,b,third,forth = {},fifthArr = []){   // given dummy object we dont phase undefined issue
    b = 139
    third = 29 
    forth.firstName = 'rakkkkk'
    // forthObj = {  // this will create new variable canot assign value
    //     firstName: "john",
    //     secondName : "doe"
    // }
    fifthArr[0] = 192
    console.log("aur_params",a,b,third,forth,fifthArr)
}

greet(first , second ,third,forthObj,fifthArr)
console.log(first)
console.log(second)
console.log(third)
console.log(forthObj);
console.log(fifthArr)
 */

// REST parameter 
/* 
    function restFunc (...numbers){ //convert this in all params in array
            console.log(numbers)
            console.log(numbers[2])
    }
restFunc(1,"sachin",{objVal :"lekdo"},true) */


/* function objFunct({name,surndsame,doe}){ //only this name variable will be available not by index or anything
    console.log(name) //object
    console.log(surndsame)
    console.log(doe)
}
let doe = 'deoew'
objFunct({doe}) // only shwo available value with same names extra arguments will be reject */

// javascript does not support named parameter that why we use {} object to define name inside the object.

/* 
function checkFunc(a = 3,b = 5){
    console.log(a,b)
}
 // null is consider as value but undefined take the default value if it is present...
checkFunc(undefined,null) // 3 null */

/* // function requiredParam(paramName) {
//     console.log("paramName",paramName)
//     throw new Error(`${paramName} is required`);
// }

// function greet(name = requiredParam("name")) {
//     console.log("Hello, " + name);
// }

// // greet();  // Uncaught Error: name is required
// greet("Alice");

// function requiredParams(paramsName){
//         throw new Error(`this params is required ${paramsName}`)
// }

// function realFunc(name = requiredParams("name"),surname){
//     console.log(name , surname)
// }

// if undefined provided then run required method but if provided null then 
// null is considered as value and give answer "null";

// realFunc( null,"doe") */


// function can have only one rest parameter and it must be the last parameter
// only one rest opertion and it will be in the last  as parameter

// function greet(name) {
//     if (!name) {
//         throw new Error("name is required");
//     }
//     console.log("Hello, " + name);
// }

// greet(null)

/* STAR PATTERN */

// 12345 *****  n =10 
// function numStar(n){
//     let timeVal = Math.ceil(n/10)

//     for(let i=1; i<= timeVal; i++){
//         let star = ""
//         for(let j=((i-1)*10)+1; j>=(i-1)*10 && j<=i*10 ; j++){
//             if(j<=((i-1)*10)+5 && j<=n){
//                     star += `${j} `
//             }else if(j>=((i-1)*10)+5 && j<=n){
//                     star += "* "
//             }
//         }
//         console.log(star)
//     }
// }

// console.log(numStar(87))



// const str = new String("String");
// const num = new Number(100);

// console.log(num) // convert this in array so array type is object thats why this will show object
// console.log(typeof Date); // "object"
// console.log(typeof num); // "object"

// function reverseArr(arr){
//     let reverseVal = []
//         for(let i = arr.length-1; i>=0 ; i--){
//             reverseVal = [...reverseVal,arr[i] ]
//         }

//         return reverseVal;
// }

// console.log(reverseArr(['josn','edis','eudk','duekd']))

// Date is also saved by reference

// let dateVal = new Date(2021,4,1);
// let latestDate  = dateVal
// console.log(dateVal);
// console.log(latestDate) //this is same becouse this saved by reference

// dateVal.setFullYear(2024)
// latestDate.setMonth(9)
// console.log(dateVal)
// console.log(latestDate)

console.log(typeof [3,3,5,54,3,4,3,2]) //object
console.log(typeof null) //object
console.log(typeof undefined) // undefined
console.log(typeof function(){}) //function
console.log(typeof Date)  //function (if calling whatever returning that will be the typeof that)

// console.log('AAd@#%@jhdkjd184=#^& '.replace(/[^a-zA-Z]+/g, ''));

console.log("5" -  "true") // trying to convert in number but not able to convert becouse of true is string
