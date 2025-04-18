// const fs = require("fs");
// setTimeout(() => console.log("this is setTimeout 1"), 0);

// setImmediate(() => console.log("this is setImmediate 1"));

// fs.readFile(__filename, () => {
//   console.log("this is readFile 1");
//   setImmediate(() => console.log("this is setImmediate 2"));
// });

// process.nextTick(() => console.log("this is process.nextTick 1"));
// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));

// // for (let i = 0; i < 2000000000; i++) {}





  const fs=require("fs")
  setImmediate(()=>{
      console.log("SetImmediate-1");
  })
  setTimeout(()=>{
      console.log("SetTimeut-1");
  },0)
  Promise.resolve().then(()=>{
      console.log("Promis-1");
  })
  fs.readFile("./text.txt","utf8",()=>{
      setTimeout(()=>
      {
          console.log("Settimeout-2");
      },0)
      process.nextTick(()=>{
          console.log("Process nexttik-2");
      })
      setImmediate(()=>{
          console.log("Setimmediate-2");
      })
      console.log("File rading callback");

  })
  process.nextTick(()=>{
      console.log("process nexttick-1");
  })
  console.log("Last line of the code");




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


// Promise.all([
//     Promise.resolve("A"),
//     Promise.reject("B"),
//     Promise.resolve("C"),
//   ])
//     .then(console.log)
//     .catch((err) => {
//       console.error("Error:", err);
//     });