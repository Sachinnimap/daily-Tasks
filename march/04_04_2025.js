

// Promise.resolve().then(()=>{
//   console.log("first Promise")
//   Promise.resolve().then(()=>{
//     console.log("second Promise")
//   })
// })

// setTimeout(()=>console.log("SetTimeout 1"),0)
// setTimeout(()=> console.log("SetTimeout 2"),0)
// setImmediate(()=>  console.log('setImmediate 1'))
// setImmediate(()=>  console.log('setImmediate 2'))


// setImmediate(()=> {
//   console.log('immediate 1')
// })

// setTimeout(() => {
//   console.log('timeout 1')
//   setTimeout(() => console.log('timeout 2'),0)
// }, 0);

// console.log('start')

// const fs = require("fs")

// setTimeout(()=> console.log("setTimeout 1"),1000);
// setTimeout(()=> console.log('setTimeout 2'))
// setImmediate(()=> console.log("setImmediate 1"))
// fs.readFile("file.txt",()=> console.log("read file"))
// setImmediate(()=> console.log('immediate 2'))


// function isPrime(n) {
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }

// function computePrimes(onPrime, startAt = 1) {
//   let currNum;
//   for (currNum = startAt; currNum % 5 !== 0; currNum++) {
//     if (isPrime(currNum)) onPrime(currNum);
//   }
//   Promise.resolve().then(() => {
//     computePrimes(onPrime, currNum + 1);
//   });
// }


// function isPrime(n) {
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }



// function computePrimes(onPrime, startAt = 1) {
//   // console.log(onPrime())
//   console.log(startAt)
//   let currNum;
//   for (currNum = startAt; currNum % 5 !== 0; currNum++) {
//         if (isPrime(currNum)) onPrime(currNum);
//       }
//       // Promise.resolve().then(() => {
//         if(currNum > 10){
//           return
//         }
//         computePrimes(onPrime, currNum + 1);

//       // });
// }

// computePrimes(prime => {
//   console.log(prime);
// });



// function isPrime(n) {
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }

// function computePrimes(onPrime, startAt = 1) {
//   let currNum;
//   for (currNum = startAt; true; currNum++) {
//     if (isPrime(currNum)) onPrime(currNum);
//   }
// }

// computePrimes(prime => {
//   console.log(prime);
// });



// const pause = (millis) =>
//   new Promise(resolve => setTimeout(resolve, millis));

// const start = Date.now();
// console.log('Start');

// pause(1000).then(() => {
//   const end = Date.now();
//   const secs = (end - start) / 1000;
//   console.log('End:', secs);
// });

// const latestValue = ()=> 
//     console.log("first")
//   console.log("second")
//   console.log("third")

// latestValue()


// Promise.resolve()
// .then( 'sachin'
//     // function a() {
//     //   Promise.resolve().then(function c() {});
//     // }
//   )
//   .then(function b() {
//     Promise.resolve().then(function d() {});
//   });


// function first(paramsFunc) {
//   console.log("function",paramsFunc)
//   console.log(paramsFunc())
// }

// first(()=>{
//   return 'something'
// })





// Promise.resolve()
//   .then(function a() {
  
//     throw new Error('OH TEH NOEZ!')
//     Promise.resolve().then(function f() {})
//   })
//   .catch(function b() {})
//   .then(function c() {})

// const NEWS = 'https://www.news.google.com';






// const GOOGLE = 'https://www.google.com';

// Promise.resolve().then(function e() {console.log("E")})
// fetch(GOOGLE).then(function b() {console.log("B")})
// fetch(GOOGLE).then(function c() {console.log("C")})



  // console.log('first')
  // Promise.resolve().then(function d() {console.log("D")})

  // setImmediate(()=> console.log("setImmediate 1"));

  // setTimeout(()=> console.log('timeout 1'))

  let bar ;
function first(params) {
    function inside(){
      console.log("i am inside nextTick!",bar)
    }
    process.nextTick(inside)
    // Promise.resolve().then(inside)
}

function second(){
    console.log("without NEXt",bar)
}

first()
second()
bar = 5;