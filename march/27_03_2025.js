 

//  function getDuplicateData(arr){
//     let newArr = []
//        for(let i=0 ; i<arr.length; i++){
//              if(!newArr.includes(arr[i])){
//                 newArr.push(arr[i])
//              }  
//        }
//        return newArr;
//   }
 

// function getDuplicateData(arr){
//     let ourArr = arr;
//     let newArr = [];

//     for(let i=0; i<ourArr.length; i++){

//         for(let j=0; j<ourArr.length; j++){
//                 if(ourArr[i] == ourArr[j] && !newArr.includes(arr[j])){

//                 }
//         }
//     }
// }
//   console.log(getDuplicateData([1,4,1,2,3,5,2,3,4,6,8,3,8]))

// //   function  getPalindrome(str){
// //         return  str.split("").reverse().join("") == str;
// //   }

// // function  getPalindrome(str){
// //     let latestStr = ""
// //     for(let i = str.length - 1 ; i>=0; i--){
// //             latestStr += str[i]
// //     }
// //     return latestStr === str;
// //     // return  str.split("").reverse().join("") == str;
// // }


// //  console.log( getPalindrome("kayakayak"));



// //____________ STRING METHODS _____


// // str.replace("sell","by;")

// // str.charAt(1) //value at this index 
// // str.indexOf("sell","by;")
// // str.at("sell","by;")
// // str.concate("sell","by;")
// // str.lastIndexOf("lkdeljlk","by;")
// // str.replace("lkdeljlk","by;")
// // str.replaceAll("lkdeljlk","by;")
// // str.substring("lkdeljlk","by;") //does not accept negative values!
// // str.replace("lkdeljlk","by;")

// // let newOne = "name1"
// // let newTwo = new String("name1")
// // let arr1 = [1,2,3]
// // let arr2 = [1,2,3]
// // console.log(newOne === newTwo)
// // console.log(arr1 == arr2)
// // console.log(newTwo.toString())


// // function greet() { return "Hello"; }
// // console.log(greet.toString());
// // /*
// // Outputs:
// // "function greet() { return \"Hello\"; }"
// // */


// //toString();
// //concate
// //split
// //slice
// //subString
// //replace
// //replaceAll
// //trim delete all spaces from right and left both the sides!
// //start with 
// //endWIth

// // let newAr = [1,3,4,3,3]

// // console.log(newAr.push(23)) // array length

// // console.log(newAr.pop()); // return the value!

// // setTimeout(()=>{
// //     console.log("setTimeout")
// // })
// // setImmediate(()=>{
// //     console.log("setTime")
// // })

// // const arr = [1, 2, 3, 4];

// // const result = arr.filter(num => {
// //   if (num % 2 === 0) {
// //    return num * 2
// // }

// // });
// // console.log(result);
// // // [4,8]

// // let arr = [1,2,3,4,5,6];

// //consider as empty slot!
// // arr[10] =  9
// // console.log("ARRAY :- ",arr)

// // const arr = [1, 2, 3, 4, 5];
// // console.log(arr.splice(1, 2)); //removed element will show!

// // console.log("FinalAfterUpdate",arr)

// // parseInt
// // let num = "43a";
// // num = "1.2" // 1
// // num = "abc132" //NaN becouse first value is not a number!
// // num = parseInt(num)
// // console.log(num)
// // console.log(typeof num) //NaN if it not a number in first



// // process.

// // console.log("first")
// async function latest(){

//     console.log("ERROR")
// }

// new Promise((resolve,reject)=>{
//     reject("ERROR")
    
    
// }).then((value)=> console.log("value",value))
// .catch((error)=>{
//     console.log(error)
//     latest().then(()=>{
//        throw new  Error("SOmethong wriong")
//     })
    
// })
// .catch((erro)=>{
//     console.log("erro",erro.message)
// })

// // setTimeout(() => {
// //     console.log("third")
// // },);
// // console.log("four")

// //first 
// //four
// //second
// //success
// //third



// let newVar= "first"

// console.log(`hii ${newVar}`)
// console.log("hii " +newVar);


// const  val = [1,23,4,5,4,3].forEach((value)=>{ return value *1})
// console.log(val)

// console.log(null && 3)

// let oj = new Object({name:"sachi"})
// console.log(oj)


// function name(params) {
    
// }





// console.log("1 && 2 = "+(1 && 2));

// console.log( "4" - "5" + "2");

// console.log(1 +  -"1" + "2");


// var a={},
//     b={key:'b'},
//     c={key:'c'};

// a[b]=123; //[object object]
// console.log("fir",a)
// a[c]=456;
// console.log('seco',a)

// console.log(a[b]);
//456
//123
//  {"[object object]" : 123}
// console.log(b)


// setTimeout(function() {
//     resolve('Resolved!');
// }, 1000);


// promise.then(function(value) {
// console.log(value)
// return value;
// }).finally((val)=> {
// console.log(val)
// })


// const obj = {
//     a: "foo",
//     b: function () {
//       console.log(this.a);
//     },
//   };
  
//   const c = obj.b;
//   c();

// console
// process.nexTick
// queueMicrotask
// setTimeout
// setImmediate



console.log("1. Sync code"); 

setImmediate(() => console.log("setImmediate")); 
// setTimeout(() => console.log("setTimeOut"),2000); 
setTimeout(() => {
    console.log("Set time out");
    
}, );
process.nextTick(() => console.log("process.nextTick")); 
Promise.resolve().then(() => console.log("Promise.then()")); 

queueMicrotask(() => console.log("queueMicrotask"));