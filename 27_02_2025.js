// console.log(5%1) //for getting perfect number integer

// let flag  = true;

// setTimeout(() => {
//     flag = false;
// },1000) 
// while(flag){
//     console.log("Does it execute?")
//     break
// }
// let count = 1;
// while (count <= 5) {
//     console.log("Count:", count);
//     count++; // Increment count to avoid infinite loop
// }

// function splitString(str, space ){
//     let inArr = []
//     let temp = ""
//     for(let i = 0 ; i<str.length; i++){
//         // if(str[i] === space){
//             // if(temp !== ""){
//                 inArr.push(str[i]);
//                 // temp = ""
//             // }
//         // }else{
//         //     temp += str[i]
//         // }
//     // }
//     // if(temp  !== ""){
//         // inArr.push(temp)
//     // }
//     }
//     console.log(inArr)
// }

// splitString('soesoiedlhdds', "")

//  function upperFirst(data){
//    let newWord = data.split(" ").map((word) => word.charAt(0).toUpperCase() + word.substring(1));
//       return  newWord.join(" ")
      
//   }
//   console.log("smart".substring(3))

//   console.log(upperFirst('sachin you are not too smart'))

// function foo2()
// {
//     {
//         bar: "hello"
//     };
//   return foo2
// }
// console.log(foo2()()());

// let obj1 = {na3me: "reiyuyajjs"}
// let obj2 = {name : 'reajjs'}
// let arr1 = [3,4,5,3,6,7]
// let arr2 = [3,4,5,3,6,7]


// console.log(obj1 == String(obj2))
// console.log(arr1 == String(arr2))

//true 1 false 0

// console.log(0 || (1 && 2) || 3) 
//3

// let a = 10;
// let b = 500;
// let u = 57;
// let p=90;
// console.log(  (b && 100)  || 76); 

// let a = 10;
// let b = 500;
// let u = 3;
// let p=5;
// console.log(  u*u/2); 
// let result =   12*2/2 ;
// console.log(3/4)
// console.log(0.75 * 3)
// console.log(result);

// let a = 10;
// let b = 500;
// let u = 2;
// let p=5;
// console.log( u+  u*u/p + 3*5 - 4/2); //2.8
// let result =  2 +10 / 5 * 2;
// console.log(result); //6
// console.log('5' + -'2');
// console.log('5' + 10 - 5);

// console.log(('10' * '2') === (true + true + true + true + true)); // false
// console.log('3' + 2 * 2 - '1'); //33

// console.log(('3' - '2' + '5') * true); //-23 //15


// let x = true == 1;//1
// let y = '1' == 1;//1
// let z = '1' === 1; //0
// console.log(x + y + z);


// let a = '5';
// let b = 5;
// let c = false;
// console.log(a + b - c); //55

// console.log(10 == '10' && '10' - 1 === 9); // true

// console.log(true + false - '1' + '2');//02
// console.log('10' - 2 + '5'); //85

// console.log("1 && 2 = "+(1 && 2)) //1 && 2 = 2
// console.log( "A" - "B" + "2"); //NaN2
// console.log( "A" - "B" + "2");

// console.log("1" +  -"1" + "2"); //1-12
// let newVal = "1"  - "2" //1
// console.log( newVal)
// console.log(typeof NaN)

// var a={},b={key:'b'},c={key:'c'} 

// var d;
// a[b]=123;
// a[c]=456; //
// a[d] =433
// // {objectobject : 123, objectobjec : 456}

// console.log(a[c]); //433
// console.log(a)

//  new Promise((resolve,reject)=>{
// setTimeout(function() {
//     resolve('Resolved!');
// }, 1000);
//  }).then(function(value) {
// console.log(value)
// return value;
// }).finally((val)=> {
// console.log(val)
// })


// const obj = {
//     a: "foo",
//     b:  () =>{
//       console.log(this.a);
//     },
//   };
  
//   const c = obj.b();
//   c(); // error


// let x = 1;

// if(Boolean(function f(){}) == true){
//     x += typeof f;
// }

// console.log(x); //1

// console.log(function f() {})
// // if()
// let un = function f(){};
// if({} == false){
//     console.log('e;djkd')
// }


// (function f(){
//     var x = 1;
//     try{
//         throw new Error();
//     }
//     catch(x){
//        x = 5;
//        var  y = 2;
//         console.log(x);
//     }
//     console.log(x); //1
//     console.log(y);
// })();  

//  console.log(newNum); // not defined //undef

// if(true){
//     var newNum = 5
// }
//1
//1
//2  

// var a = 1;
// function newla(){
//      a = 5
// }

// newla()
// console.log(a) //5

// console.log(0.1*3==0.3); 
// for(var i=0; i<10; i++) 
//     { setTimeout(()=>{ console.log(i); },1000) }

// function outer(){
//      var b = 2
//       function inner(){
//          b++; console.log(b)
//           var b = 3; } inner();
//          } 
//     outer();
    
//     (function () {
//          try { throw new Error(); }
//           catch (x) { 
//             var x = 1, y = 2;
//              console.log(x); 
//             }
//               console.log(x); 
//               console.log(y); })(); 
              
// console.log(true + 1);
//  Promise.resolve(3).then((res)=>{
//      console.log(res) 
//     }).catch().then().then(res=>res).then().catch().then((res)=>{ console.log(res) }) 
    
    // console.log([2] == [2]); 

    console.log(test()); 
    function test() { return true }



// function numStar(n){
//         let timeVal = Math.ceil(n/10)
    
//         for(let i=1; i<= timeVal; i++){
//             let star = ""
//             for(let j=((i-1)*10)+1;  j<=i*10 ; j++){
//                 if(j<=((i-1)*10)+5 && j<=n){
//                         star += `${j} `
//                 }else if(j>=((i-1)*10)+5 && j<=n){
//                         star += "* "
//                 }
    //         }
    //         console.log(star)
    //     }
    // }
    
// numStar(1000)

// function getFactorial(num){
//     let getFact = 1
//     for(let i=1; i<=num; i++){
//         getFact  = getFact * i
//     }

//     return getFact;
// }

// console.log(getFactorial(10))

//getPrime 

// function getPrim(num){
//         for(let i = 2; i<num/2 ;i++){
//             if(num % i == 0){
//                 return false;
//             }else{
//                 return true
//             }
//         }
// }

// console.log(getPrim(9))


//  function getPrimeNumber(num){
//     //   console.log(Math.sqrt(num));
//       for(let i = 2 ; i<=num/2; i++){
//          if(num % i == 0){
//             return false;
//          }
//       }
//       return true;

//  }

//  console.log(getPrimeNumber(4))


// let newVal = [ 
//        { name: "Alice", age: 25 }, 
//         { name: "Bob", age: 30 },
//         { name: "Charlie", age: 20 }].sort((obj1,obj2)=>{
//             if(obj1['age'] > obj2['age']){
//                 return 1
//             }else if(obj1['age'] < obj2['age']){
//                 return -1
//             }else{
//                 return 0
//             }
//         })

//         console.log(newVal)


// function getPramid(num){
//     let paramid = ""
//         for(let i=1; i<=10;i++){
//             for(let j=1; j<=num-i; j++){
//             paramid += " "
//         }
//         for(let k=1; k<=2*i-1 ;k++){
//             paramid += k
//         }
//         paramid += "\n"
//     } 
//         return paramid;
// }

// console.log(getPramid(10))




// let rows = 19;

// // pattern variable carries the final pattern in string format
// let pattern = "";

// // outer loop runs for `rows` no. of times
// for (let n = 1; n <= rows; n++) {
//    // Inner Loop - I -> for the spaces
//    for (let space = 1; space <= rows - n; space++) {
//       pattern += " ";
//    }

//    // Inner Loop - II -> for the numbers
//    for (let num = 1; num <= 2 * n - 1; num++) {
//       pattern += num;
//    }

//    pattern += "\n";
// }
// console.log(pattern);


// function getStarPattern(num){
//     let newStr = ""
//         for(let i =1; i<=num;i++){
//             for(let j=1; j<=i; j++){
//                 if(j==1 || j == i || i == num){
//                     newStr += "*"
//                 }else{
//                     newStr += " "
//                 }
//             }
//             newStr += "\n"
//         }
//         return newStr;
// }

// console.log(getStarPattern(5))

// curring
// clouser
// laxical scope




// var a = 1;
// function newla(){
//      a = 5
// }

// newla()

// console.log(a) //5

// console.log(0.1*3==0.3); 
// for(var i=0; i<10; i++) { 
//         setTimeout(()=>{
//              console.log(i);
//              },1000) 
//     }

// function outer(){
//      var b = 2
//       function inner(){
//          b++; 
//          console.log(b)
//         var b = 3;
//          } 
//           inner();
//          } 
//     outer();
    
    // (function () {
    //      try { throw new Error(); }
    //       catch (x) { 
    //         var x = 1, y = 2;
    //          console.log(x); 
    //         }
    //           console.log(x); 
    //           console.log(y); })(); 
              
// console.log(true + "1");
//  Promise.resolve(3).then((res)=>{
//      console.log(res) 
//     //  return 5
//     }).catch()
//     .then(res => console.log(res))
//     .then(res=>console.log(res))
//     .then()
//     .catch()
//     .then((res)=>{ console.log(res) }) 
    
//     console.log([2] === [2]); 

//     test(); 
//     function test() { return true }

