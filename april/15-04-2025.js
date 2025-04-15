// Promise.resolve()
//   .then(() => {
//     console.log("A");
//     throw new Error("Oops");
//   })
//   .catch(() => console.log("B"))
//   .then(() => console.log("C"));


// console.log("start");

// setTimeout(() => console.log("timeout"), 0);

// Promise.resolve().then(() => console.log("promise"));

// console.log("end");



// function foo() {
//     if (false) {
//         var a = 10;
//     }
//     console.log(a);
// }
// foo();





// const fs=require("fs")
// setImmediate(()=>{
//     console.log("SetImmediate-1");
// })
// setTimeout(()=>{
//     console.log("SetTimeut-1");
// },0)
// Promise.resolve().then(()=>{
//     console.log("Promis-1");
// })
// fs.readFile("./text.txt","utf8",()=>{
//     setTimeout(()=>
//     {
//         console.log("Settimeout-2");
//     },0)
//     process.nextTick(()=>{
//         console.log("Process nexttik-2");
//     })
//     setImmediate(()=>{
//         console.log("Setimmediate-2");
//     })
//     console.log("File rading callback");

// })
// process.nextTick(()=>{
//     console.log("process nexttick-1");
// })
// console.log("Last line of the code");



// function foo() {
//     if (false) {
//         var a = 10;
//     }
//     console.log(a);
// }
// foo();


// console.log(true + false - '1' + '2'); //02
// console.log(false || undefined || "hello"  || null); // hello
// console.log("hello"); 
// for(var i=0; i<10; i++) {
//     setTimeout(()=>{
//         console.log(j);
//     },1000)
// }
// function a(){
//     console.log(c);
//     var c = 10
//     function getname(){
//         var c =20;
//         console.log(this.c);
//     }
//     console.log(c);
//     getname()
// }
// a()


// const fs=require("fs")

// setTimeout(()=>{
//     console.log("SetTimeut-1");
// },24)
// setImmediate(()=>{
//     console.log("SetImmediate-1");
// })
// Promise.resolve().then(()=>{
//     console.log("Promis-1");
// })
// fs.readFile("./text.txt","utf8",()=>{
//     setTimeout(()=>
//     {
//         console.log("Settimeout-2");
//     },0)
//     process.nextTick(()=>{
//         console.log("Process nexttik-2");
//     })
//     setImmediate(()=>{
//         console.log("Setimmediate-2");
//     })
//     console.log("File rading callback");

// })
// process.nextTick(()=>{
//     console.log("process nexttick-1");
// })
// console.log("Last line of the code");



// const fs = require('fs');

// setTimeout(()=>
//     {
//         console.log("Settimeout-2");
//     },0)
// setImmediate(() => {
//   console.log('🚀 setImmediate (top-level)');
// });

// fs.readFile("./text.txt", () => {
//     process.nextTick(()=>{
//                 console.log("Process nexttik-2");
//             })
//             setImmediate(()=>{
//                         console.log("Setimmediate-2");
//                     })
//   console.log('📥 I/O callback (readFile)');
//   setTimeout(()=>
//         {
//             console.log("Settimeout-2");
//         },0)
// });


// index.js
// process.nextTick(() => console.log("this is process.nextTick 1"));
// process.nextTick(() => {
//   console.log("this is process.nextTick 2");
//   process.nextTick(() =>
//     console.log("this is the inner next tick inside next tick")
//   );
// });
// process.nextTick(() => console.log("this is process.nextTick 3"));

// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));



// Promise.resolve().then(() => {
//   console.log("this is Promise.resolve 1");
//   process.nextTick(() =>
//     console.log("this is the inner next tick inside Promise then block")
//   );
// });
// Promise.resolve().then(() => console.log("this is Promise.resolve 2"));
// queueMicrotask(()=> console.log("QueueMicrotask!"))


// // setTimeout(() => {
// //     console.log("timeout 1");
// //     process.nextTick(() =>
// //       console.log("inner next tick ")
// //     );
// //   },0);
// //   setTimeout(() => console.log("timeout 2"),0);


// index.js
// setTimeout(() => console.log("this is setTimeout 1"), 0);
// setTimeout(() => console.log("this is setTimeout 2"), 0);
// setTimeout(() => console.log("this is setTimeout 3"), 0);

// process.nextTick(() => console.log("this is process.nextTick 1"));
// process.nextTick(() => {
//   console.log("this is process.nextTick 2");
//   process.nextTick(() =>
//     console.log("this is the inner next tick inside next tick")
//   );
// });
// process.nextTick(() => console.log("this is process.nextTick 3"));

// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// Promise.resolve().then(() => {
//   console.log("this is Promise.resolve 2");
//   process.nextTick(() =>
//     console.log("this is the inner next tick inside Promise then block")
//   );
// });
// Promise.resolve().then(() => console.log("this is Promise.resolve 3"));



// // index.js
// setTimeout(() => console.log("this is setTimeout 1"), 0);
// setTimeout(() => {
//   console.log("this is setTimeout 2");
//   process.nextTick(() =>
//     console.log("this is inner nextTick inside setTimeout")
//   );
// }, 0);
// setTimeout(() => console.log("this is setTimeout 3"), 0);

// process.nextTick(() => console.log("this is process.nextTick 1"));
// process.nextTick(() => {
//   console.log("this is process.nextTick 2");
//   process.nextTick(() =>
//     console.log("this is the inner next tick inside next tick")
//   );
// });
// process.nextTick(() => console.log("this is process.nextTick 3"));

// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// Promise.resolve().then(() => {
//   console.log("this is Promise.resolve 2");
//   process.nextTick(() =>
//     console.log("this is the inner next tick inside Promise then block")
//   );
// });
// Promise.resolve().then(() => console.log("this is Promise.resolve 3"));

// index.js
// setTimeout(() => console.log("this is setTimeout 1"), 1000);
// setTimeout(() => console.log("this is setTimeout 2"), 500);
// setTimeout(() => console.log("this is setTimeout 3"), 0);


// const fs = require("fs");

// fs.readFile(__filename, () => {
//   console.log("this is readFile 1");
// });

// process.nextTick(() => console.log("this is process.nextTick 1"));
// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));


// const fs = require("fs");

// setTimeout(() => console.log("this is setTimeout 1"), 0);

// fs.readFile(__filename, () => {
//   console.log("this is readFile 1");
// });

// index.js
// const fs = require("fs");

// fs.readFile(__filename, () => {
//   console.log("this is readFile 1");
// });

// process.nextTick(() => console.log("this is process.nextTick 1"));
// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// setTimeout(() => console.log("this is setTimeout 1"), 0);// start and completed his time but still wait for synchronuos then I/O will call!

// for (let i = 0; i < 2000; i++) {}



// // index.js
// const fs = require("fs");

// fs.readFile(__filename, () => {
//   console.log("this is readFile 1");
// });

// process.nextTick(() => console.log("this is process.nextTick 1"));
// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// setTimeout(() => console.log("this is setTimeout 1"), 9000);
// setImmediate(() => console.log("this is setImmediate 1"));

// for (let i = 0; i < 2000000000; i++) {}


// // index.js
// const fs = require("fs");

// fs.readFile(__filename, () => {
//   console.log("this is readFile 1");
//   setImmediate(() => console.log("this is setImmediate 1"));
// });

// process.nextTick(() => console.log("this is process.nextTick 1"));
// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// setTimeout(() => console.log("this is setTimeout 1"), 0);

// for (let i = 0; i < 2000000000; i++) {}



// index.js
// const fs = require("fs");

// fs.readFile(__filename, () => {
//   console.log("this is readFile 1");
//   setImmediate(() => console.log("this is setImmediate 1"));
// 	process.nextTick(() =>
// 	  console.log("this is inner process.nextTick inside readFile")
// 	);
// 	Promise.resolve().then(() =>
// 	  console.log("this is inner Promise.resolve inside readFile")
// 	);
// });

// process.nextTick(() => console.log("this is process.nextTick 1"));
// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// setTimeout(() => console.log("this is setTimeout 1"), 0);

// for (let i = 0; i < 2000000000; i++) {}


//index.js
// setImmediate(() => console.log("this is setImmediate 1"));
// setImmediate(() => {
//   console.log("this is setImmediate 2");
//   process.nextTick(() => console.log("this is process.nextTick 1"));
//   Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// });
// setImmediate(() => console.log("this is setImmediate 3"));


// index.js
// setTimeout(() => console.log("this is setTimeout 1"), 0);
// setImmediate(() => console.log("this is setImmediate 1"));


// index.js
// const fs = require("fs");

// const readableStream = fs.createReadStream(__filename);
// readableStream.close();

// readableStream.on("close", () => {
//   console.log("this is from readableStream close event callback");
// });
// setImmediate(() => console.log("this is setImmediate 1"));
// setTimeout(() => console.log("this is setTimeout 1"), 0);
// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// process.nextTick(() => console.log("this is process.nextTick 1"));

// let value = 5
// new Promise((resolve,reject)=>{
    
//     resolve(5*2);
// })
// .then((value)=>{
//     console.log("value",value)
//    return value + 10
// })
// .then((theValue)=>{
//     console.log("value",theValue)
//     return  theValue * 3
// })
// .then((result)=>{
//         console.log("result:-" , result)
// })



// Promise.resolve("A")
//   .then(() => {
//     return "B";
//   })
//   .then((val) => {
//     console.log("1:", val);
//     throw "C";
//   })
//   .then(() => {
//     console.log("2: never runs");
//   })
//   .catch((err) => {
//     console.log("3:", err);
//   });


// Promise.resolve().then(() => {
//     console.log("A");
//     Promise.resolve().then(() => {
//       console.log("B");
//     });
//     console.log("C");
//   });
  
// new Promise((resolve, reject) => {
//     // resolve("A");
//     // reject("B");
//     resolve("C");
//   }).then(console.log).catch(console.error);
  
//mean here we did not handling the rejection thats why giving error and code crash
// Promise.resolve("Oops");

// setTimeout(() => {
//   console.log("Still alive");
// }, 100);

// let count = 0;

// function loop() {
//   if (count < 3) {
//     // console.log(count)
//     count++;
//     // let newVari  =  new Promise((resolve ,reject)=>{ setTimeout(()=> resolve("DoneByMe"),1000) })
//     return Promise.resolve().then(loop).then().then
//   }
// }
// console.log(loop().then((value)=> console.log(value)))
// // .then((value) => console.log(value));

// Promise.resolve().then().then();



// function zalgo(flag) {
//     return flag ? Promise.resolve("sync") : new Promise((res) => res("async"));
//   }
  
//   zalgo(true).then(console.log); //becouse of a they return promise and so .then goes is microtask run after
//   console.log("End");

// Promise.resolve("A")
//   .then((val) => {
//     console.log(val);
//     return "B";
//   })
//   .then(undefined)
//   .then((val) => {
//     console.log(val);
//   });


Promise.all([
    Promise.resolve("A"),
    Promise.reject("B"),
    Promise.resolve("C"),
  ])
    .then(console.log)
    .catch((err) => {
      console.error("Error:", err);
    });
  