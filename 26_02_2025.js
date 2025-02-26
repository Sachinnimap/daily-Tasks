// function greetings() {
//     console.log("Welcome to the JS world!");
//   }
  
//   console.log(greetings)
//   greetings();
  
//   var number1 = 10;
//   var number2 = 5;
  
//   function add(number1, number2) {
//     return number1 + number2;
//   }
  
//   function addExtra(number1, number2) {
//     var extra = 15;
//     return number1 + number2 + extra;
//   }
  
//   var result1 = add(number1, number2);
//   var result2 = addExtra(number1, number2);
  
//   console.log(result1);
//   console.log(result2);

  //Memory Creation phase
  //greeting  = function
  //number1 = undefined
  //number2 = undefined
  //add = function
  //addExtra = function
  //result1 = undefined
  //result2 = undefined

  //code Execution phase
//   Welcome to the JS world!
//number1 = 10
//number2 = 5
// result =   15
                //  AddExtra creating and excution phase will also be create    
                //  extra 
                //  extra = 15    
// result =  30

//15
//30

// let count = 0;
//  function printCount(){
//     if(count === 0){ 
//         let count = 10;
//         console.log(count)
//     }
//     console.log(count) 
//  }

//  printCount()

//  console.log(count) 

// async function run(){
//     for(let i=1;i<=10;i++){
//             setTimeout(()=> {
//                 console.log(i)
//                 resolve();
//             }, 1000);
//     }
// }

// run();

// let newValue = Symbol("%")
// let a = {
//     name : Symbol("*"),
//     age : 23,
//     [newValue]: "doedls"
// }

// console.log(a)
// // console.log(typeof a.newVal)
// console.log( a[newValue])

// 
// WAP for getting a square root of a given number.

// function getSqrt(num){

//     let newNum = Math.floor(num/2)
//     let checkNum;
//     let getInPoint;

//     for(let i=1; i<newNum; i++){
//         if(i*i == num){
//             checkNum =  i;
//         }
//     }

//     if(checkNum){
//         return checkNum
//     }else{
//         return "number is wrong"
//     }

// }

// console.log(Math.sqrt(145))
// console.log(getSqrt(145))



// function num(){
//     for(let i=0; i<)
// }

// let j =0; 
// for(j=0; j<5;j++){
//     setTimeout(()=>{
//         console.log(j)
//     },0)
// }



// function anagram(string,string2){  //cat //tac
//     let n = string.length -1;
//     let obj = {};
    
//     for(let i = 0 ; i<=n;i++){
//         if(obj[string[i]]){
//             obj[string[i]]++;
//         }
//         else{
//                 obj[string[i]]= 1;
//             }
//         if  (obj[string2[i]]){
//             obj[string2[i]]--;
//             }
//         else{
//                 obj[string[i]]= 1;
//             }
//     }
//     return obj;
// }

// const result = anagram('batt','tabt');
// console.log(result);
// console.log("ekjld".length)

// function getAnagram(str1,str2){
//         function stringToObj(stringVal){
//             let strObj = {}
//             let totalNum = 0

//         for(let i = 0; i<stringVal.length; i++){
//                 if(strObj[stringVal[i]] != undefined){
//                     strObj[stringVal[i]] = strObj[stringVal[i]] + 1
//                     totalNum += 1
//                 }else{
//                     strObj[stringVal[i]] = 1
//                     totalNum += 1
//                 }
//             }
//             return totalNum;
//         }
        
//         let firstStrObj = stringToObj(str1);
//         let secondStrObj = stringToObj(str2)
        
//         if(JSON.stringify(stringToObj(str1)) == JSON.stringify(stringToObj(str2))){
//             return true
//         }else{
//             return false;
//         }
// }

// console.log(getAnagram('batt','tabt'))

// function sum(a){
//     return function (b){
//       return   a * b
//     }
// }

// console.log(sum(4)(5)) //taking params one to other return function 

// curring with bind

// function sub(a,b){
//             return a * b
// }

// let newFunc  = sub.bind(this,5)
// console.log(newFunc(5))


 let newFunc =  new Promise((resolve,reject)=>{
        if(true){
                resolve('sachin')
        }else{
            reject("rejected Val")
        }
 })
  function  newHandle(){
      console.log(  newFunc())
  }

  newHandle()
