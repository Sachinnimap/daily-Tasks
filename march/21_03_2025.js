
//--- callback Handler ---

// function handleResult(error,result){
//         if(error){
//             throw new Error("FROM HERE")
//             return
//         }

//         console.log("Success",result)
// }


// // function handlerSubmit(data,callback){
// //         if(typeof data !== 'number'){
// //             callback(new TypeError("data should be number!"))
// //             return;
// //         }
// //         callback(undefined,data)
// // }

// // try{
// // handlerSubmit("23",handleResult);
// // }catch(error){
// //     console.log("ERROR",error)
// // }

// function handlerSubmit(data, callback) {
//     if (typeof data !== 'number') {
//         setTimeout(() => callback(new TypeError("data should be number!")), 100); // Now async!
//         return;
//     }
//     callback(undefined, data);
// }

// try {
//     handlerSubmit("23", handleResult);
// } catch (error) {
//     console.log("ERROR", error); // This will NOT catch the error now!
// }


// function handleResult(error, result) {
//         if (error) {
//             throw new Error("FROM HERE");
//         }
//         console.log("Success", result);

// }

// function handlerSubmit(data, callback) {
//     if (typeof data !== 'number') {
//         setTimeout(() => callback(new TypeError("data should be number!")), 100); // Async!
//         return;
//     }
//     callback(undefined, data);
// }
// function latestFunc() {
// try {
//     handlerSubmit("23", handleResult);
// } catch (error) {
//     console.log("ERROR-:", error); 
// }
// }

// latestFunc()



// function closureEgOuter (){

//     function innerFunc(){
//         console.log(fullName)
//     }
//     let fullName = "sachin"
//     return innerFunc
// }

// const callClosure = closureEgOuter();
// function someFunc(){
// const laterFunc = callClosure
// laterFunc();
// }

// someFunc()

// function closureEgOuter (){

//     function innerFunc(){
//         console.log(fullName)
//     }
//     let fullName = "sachin"
//    let myName = "Raaja"
//      return innerFunc
// }

// const callClosure = closureEgOuter();
// const laterFunc = callClosure
// laterFunc();


// const asyncPromise = new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 throw new Error("something went wrong!")
//                 resolve("Promise resolved successfully!")
//             },5000)
//             // reject("reject directly!")
//             throw new Error("something went wrong!")
// })
// .then((value)=> {
//     console.log("value",value)
//     return value;
// }).catch((error)=>{
//      console.log("error",error)
//     return error
//     })

// const asyncPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//             //  new Error("something went wrong!")
//         // reject( new Error("Promise resolved successfully!"))
//     },5000)
//     reject("reject directly!")
//     // throw new Error("something went wrong!")
// })

// async function firstFunc(params) {
//     try{
//     console.log(1)
//   let result =  await fetch('https://api.example.com/data');
//   console.log("result",result)
//     console.log(2)
//     }catch(error){
//         console.log("ERROR :- ",error)
//     }
// }

// firstFunc();




// class CustomError extends Error {
//     constructor(message){
//         super(message)
//         this.name =  "CustomError"
//     }
// }

// try{
//         throw new CustomError("something went wrong")
// }catch(error){
//     console.log(error.name)
// }





//! ~ creating custom error ~ !

// class SyntaxError extends Error{
//      constructor(message){
//         super(message)
//         this.name = "Eror";
//      }
// }


// try{
//     throw new SyntaxError("failed somthing !")
//     console.log("not accessible!")
// }catch(error){
//     console.log(error)
// }


// process.on("uncaughtException",(error)=>{
//     console.log("something failed!",)
// })










// class CustomError extends Error{
//     constructor(message){
//         super(message)

//         this.name =  "CustomError"
//     }
// }



// process.on("uncaughtException",(error)=>{
//     console.log("Catch block not used: - ", error.message)
// })
// // process.on("unhandledRejection",(error)=>{
// //     console.log("Promise not Handled : " ,error)
// // })

// const asyncPromise = new Promise((resolve,reject)=>{
//     reject("reject directly!")
// })

// const latesFunc = function checkHandler (){
//     asyncPromise
// }
// latesFunc()
// // checkHandler()

// // setTimeout(checkHandler,0)

// function latestFunc(){
    
// let second = "raaaja"
//     const person = {
//         second: "Alice",
//         sayHello: () => {
//           console.log(`Hello, my name is ${this.second}`);
//         },
//       };
//       person.sayHello();
// }
// latestFunc()

const person = {
    name :"ALice",
    sayHello : (){
        console.log()
    }
}