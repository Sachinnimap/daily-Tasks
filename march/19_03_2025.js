
// Promise.



// const firstPromise = new Promise((resolve, reject)=>{
//         resolve("First_promise!")
// })
// const secondPromise = new Promise((resolve,reject)=>{
//         resolve("second_promise!")
// })
// const thirdPromise = new Promise((resolve,reject)=>{
//         resolve("third Promise!")
// })
// const fourthPromise = new Promise((resolve,reject)=>{
//         reject("Rejected!")
// })

// Promise.all([firstPromise,secondPromise,thirdPromise,fourthPromise])
// .then((value)=>{
//         console.log("success: - ",value)
// })
// .catch((error)=>{
//         console.log("Error",error)
// })
// .finally(()=>{
//         console.log("Everthing solved!")
// })




// const firstPromise = new Promise((resolve, reject)=>{
//         resolve("First_promise!")
// })
//         const secondPromise = new Promise((resolve,reject)=>{
//         resolve("second_promise!")
// })
// const thirdPromise = new Promise((resolve,reject)=>{
//         resolve("third Promise!")
// })
// const fourthPromise = new Promise((resolve,reject)=>{
//         reject("Rejected!")
// })

// Promise.race([firstPromise,secondPromise,thirdPromise,fourthPromise])
// .then((value)=>{
// console.log("success: - ",value)
// })
// .catch((error)=>{
//         console.log("Error",error)
// })
// .finally(()=>{
//         console.log("Everthing solved!")
// })

 // console.log(4-8+4)

// let newArr = [1,4,6,7,9,11,12]

// for(let i=1; i<newArr.length; i++){
//         if((newArr[i] - newArr[i-1]) != 1 ){
//                 for(let j = newArr[i-1]; j<newArr[i]-1 ; j++){
//                         console.log("missing",j+1)
//                 }
//         }
// }

// __________FIRST IN LAST OUT


function first(){
        console.log("first Func")
        second()
}

function second (){
        console.log("second Func")
        third()
}

function third(){
        console.log("third Func")
        fourth()
}

function fourth(){
        console.log("fourth Func ")
}

first();


// function fetchData(callback) {
//         setTimeout(() => {
//           const error = Math.random() > 0.7 ? new Error("Something went wrong!") : null;
//           const data = { user: "Alice", age: 25 };
      
//           callback(error, data);
//         }, 1000);
//       }

//       const errorHandling = (err, result) => {
//         if (err) {
//           console.error("Error:", err.message);
//           return;
//         }
//         console.log("Data received:", result);
//       }

//       fetchData(errorHandling)
// //       fetchData((err, result) => {
// //         if (err) {
// //           console.error("Error:", err.message);
//           return;
//         }
//         console.log("Data received:", result);
//       });

     
// function newFunc()
//        function newFunc (){
//         console.log("sachin")
//       }


//       newFunc(()=>{})

Lifo and Fifo
        let newArr = [1,3];

        newArr.push(4)
        newArr.push(5)
        newArr.push(6)
        newArr.push(7)
        newArr.pop(4)
        newArr.pop(5)
        newArr.pop(6)
        newArr.pop(7)


        console.log(newArr)


// let a = 5;  // 00000101
// let b = 3;  // 00000011
// let result = a | b;
// console.log(result);

// console.log(null ?? 'sachin')//

// let a = 12;  // 00000101
// let result = a >> 5;
// console.log(result); // 20 (00010100)

console.log("eiodld".substring("3","5")) //can give string also 
console.log([2,4,6,7,3,5,2,6,4].splice("3","3")) //also give number inside this

