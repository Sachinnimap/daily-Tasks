
// //Handle Error in javascript asynchronous;
// const fs = require('fs')
// const readFileHandler = (req,res) => {

//     // WriteFile method for creating and updating existing file content.

//         fs.writeFile('dummy_file2.js', 'utf-8', 'this is the content of file' , (error, response) =>{
//             if(error){
//                 console.log("Something went wrong" + error.message)
//             }else{
//                 console.log('success')
//                 console.log(response)
//             }
//         })

//     // Write method for is only for write file so this will not create new file if does not exists 
//     // for new file we need to create file using fs.open method then we use write method
    
//             fs.write("dummy_file.js",'utf-8','this is content',(error,response) =>{
//                 if(error){
//                     console.log('something went wrong',error)
//                 }else{
//                     console.log("success")
//                     console.log("response" ,response)
//                 }
//             })


// }

// readFileHandler();


//Node complete course started....

// Node is asyncronous and none blocking and single threaded

// function sayHello(name){
//  console.log('hello ' + name)
// }

// sayHello('sachin')

// console.log(window) 
// //window is undefined becouse node is environment and does not have browser this use
// //only V8 engine to run javascript code.

// console.log(global) 
//// for accessing glabal variables in nodejs we use global 
//// for browser we use window 
//  setInterval() setTimeout() clearInterval() clearTimeout()

// let message =  'sachin'

// console.log(global.message)

// // if in other file same name message created this will override previous message
// // variable so this is the issue of using global variable;
// //  for resolving this we use module so in nodejs every file consider as module
// // thats why used all variable and function are only refer to that variable only..

//// module can be accessed by anywhere look like gloabal variable but module is not global.
// // module store some object properties for his unique identity like id,exports, parent,fileName,loaded,children,path etc..


//// node does not execute code directly first node create IIFE immediate invoked function
//// then execute every code of lines
//// eg - (function(exports,require,module,__filename,__dirname){...all codes variable,functions..})

