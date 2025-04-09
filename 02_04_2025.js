
// function a(params) {
//     setTimeout(() => {
//         console.log('first')
//     }, 5000);
// }

// function b(params) {
//     console.log('second')
// }

// a()
// b() //set timeout is handled by event loop!

// setTimeout(myFunc,5*1000,5);
// setTimeout(myFunc,10 * 1000, 10)


// const myFunc = (name) =>{
//   console.log(`Hi i am ${name}, IT department`)
// }


// setImmediate(myFunc,'raaaj')

// console.log('END')




// console.log("start");

// setTimeout(() => {
//   console.log("setTimeout");
// }, 1110);

// setImmediate(() => {
//   console.log("setImmediate");
// });

// console.log("end")


console.log("start");

setTimeout(() => {
  console.log("setTimeout 1");

  process.nextTick(() => {
    console.log("nextTick inside setTimeout");
  });

  queueMicrotask(() => {
    console.log("queueMicrotask inside setTimeout");
  });

  new Promise((resolve) => {
    console.log("promise created inside setTimeout");
    resolve();
  }).then(() => {
    console.log("promise.then inside setTimeout");
  });

  setImmediate(() => {
    console.log("setImmediate inside setTimeout");
  });
}, 0);

setImmediate(() => {
  console.log("setImmediate 1");

  process.nextTick(() => {
    console.log("nextTick inside setImmediate");
  });

  queueMicrotask(() => {
    console.log("queueMicrotask inside setImmediate");
  });

  new Promise((resolve) => {
    console.log("promise created inside setImmediate");
    resolve();
  }).then(() => {
    console.log("promise.then inside setImmediate");
  });

  setTimeout(() => {
    console.log("setTimeout inside setImmediate");
  }, 0);
});

process.nextTick(() => {
  console.log("nextTick 1");
});

queueMicrotask(() => {
  console.log("queueMicrotask 1");
});

new Promise((resolve) => {
  console.log("promise created");
  resolve();
}).then(() => {
  console.log("promise.then 1");
});

console.log("end");



const fs = require('fs')
console.log("start");

setTimeout(() => {
  console.log("setTimeout 1");
}, 0);

setImmediate(() => {
  console.log("setImmediate 1");
});

process.nextTick(() => {
  console.log("nextTick 1");
});

queueMicrotask(() => {
  console.log("queueMicrotask 1");
});

new Promise((resolve) => {
  console.log("promise created");
  resolve();
}).then(() => {
  console.log("promise.then 1");
});

fs.readFile(__filename, () => {
  console.log("I/O callback");

  setTimeout(() => {
    console.log("setTimeout 2");
  }, 0);

  setImmediate(() => {
    console.log("setImmediate 2");
  });

  process.nextTick(() => {
    console.log("nextTick 2");
  });

  queueMicrotask(() => {
    console.log("queueMicrotask 2");
  });

  new Promise((resolve) => {
    console.log("promise created inside I/O");
    resolve();
  }).then(() => {
    console.log("promise.then 2");
  });

  console.log("end of I/O callback");
});

console.log("end");



arr = [1,3,45,6];
arr1 = [1,2,44,5,6]
console.log(...arr)
let cont = arr.concat(...arr1)
// console.log(cont)

let sortArray = [];
for(let i = 0; i<arr.length; i++){
    // for(let j = i +1; j<i; j++){
        // || sortArray[sortArray.length-1] <= arr[i]
        console.log(sortArray[0])
        if(sortArray[sortArray.length -1] !== 'undefined'  || sortArray[sortArray.length -1] > arr[i] ){
            // [arr[i], arr[j]] = [arr[j], arr[i]]
            console.log('el')
            sortArray.push(arr[i])
        
    }
}
console.log("Sort Array",sortArray)
