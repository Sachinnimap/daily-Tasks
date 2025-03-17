
const express  = require("express")
const connectDB = require("./config/connectDB")
const courseRoutes = require("./routes/course")
const authorRoutes = require("./routes/author")
const userRoutes = require("./routes/user")
const errorHandler = require("../mongoTask/middlewares/errorHandler")
const logger =  require("./config/winstonLogger")
require("dotenv").config()


const app = express();
//writting all routes in different file and calling and 'app' passing as props>
//require("./routes/index")(app)
app.use(express.json())

// winston.handleExceptions(
//         new winston.transports.File( {filename:  "uncaughtException"})
// )


//speling should be proper
//in this if error accur same then we handle that error...!
process.on("uncaughtException",(error)=>{
        console.log("Uncought Exception!")
        // add in Winston
        logger.error("error", error)
}) 

//this error is not in express it is in main so thats 
//this error in not going in tryCatch block 
//this will crash the app and also not able see why app crashed
//also winston.log is not gonna work 
// that why we need to handle this we use process.on method - above used
// throw new Error("something went wrong in main not in express!");

app.get("/", (req,res) => {
        res.status(200).send("Welcome to Home Page!")
})
app.use("/courses", courseRoutes)
app.use("/authors", authorRoutes)
app.use("/user",userRoutes)

app.use(errorHandler);

const PORT  = 5000;

connectDB().then(() =>{
app.listen(PORT, ()=>{
   console.log(`server is running on port ${PORT}`)
})
}).catch((error)=>{
        console.log("Failed to connect to database. Server not started.", err)
})

const winston  = require("winston");

module.exports =  winston.createLogger({
    // level: 'info',
    // format: winston.format.json(),
    transports: [
      //
      //for consoling error in cmd also without going file user can see!
      //ISSUE - may be this will going to be write here version isssue
      new winston.transports.Console({colorize:true,prettyPrint : true}), //TODO - implementation Issue

      // - Write all logs with importance level of `error` or higher to `error.log`
      //   (i.e., error, fatal, but not other levels)
      //FOR ONLY ERROR
      new winston.transports.File({ filename: 'winstonError.log', level: 'error' }),
 
      // - Write all logs with importance level of `info` or higher to `combined.log`
      //   (i.e., fatal, error, warn, and info, but not trace)
      //
      new winston.transports.File({ filename: 'winstonAll.log' }),
    ],
  });

  

//in error file

{"level":"error","message":"something went wrong","service":"user-service"}
{"level":"error","message":"error something went wrong in main not in express!","stack":"Error: something went wrong in main not in express!\n    at Object.<anonymous> (C:\\Users\\Nimap\\nodeprojects\\mongoTask\\server.js:27:7)\n    at Module._compile (node:internal/modules/cjs/loader:1554:14)\n    at Object..js (node:internal/modules/cjs/loader:1706:10)\n    at Module.load (node:internal/modules/cjs/loader:1289:32)\n    at Function._load (node:internal/modules/cjs/loader:1108:12)\n    at TracingChannel.traceSync (node:diagnostics_channel:322:14)\n    at wrapModuleLoad (node:internal/modules/cjs/loader:220:24)\n    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:170:5)\n    at node:internal/main/run_main_module:36:49"}
{"level":"error","message":"error something went wrong in main not in express!","stack":"Error: something went wrong in main not in express!\n    at Object.<anonymous> (C:\\Users\\Nimap\\nodeprojects\\mongoTask\\server.js:26:7)\n    at Module._compile (node:internal/modules/cjs/loader:1554:14)\n    at Object..js (node:internal/modules/cjs/loader:1706:10)\n    at Module.load (node:internal/modules/cjs/loader:1289:32)\n    at Function._load (node:internal/modules/cjs/loader:1108:12)\n    at TracingChannel.traceSync (node:diagnostics_channel:322:14)\n    at wrapModuleLoad (node:internal/modules/cjs/loader:220:24)\n    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:170:5)\n    at node:internal/main/run_main_module:36:49"}
{"level":"error","message":"error something went wrong in main not in express!","stack":"Error: something went wrong in main not in express!\n    at Object.<anonymous> (C:\\Users\\Nimap\\nodeprojects\\mongoTask\\server.js:26:7)\n    at Module._compile (node:internal/modules/cjs/loader:1554:14)\n    at Object..js (node:internal/modules/cjs/loader:1706:10)\n    at Module.load (node:internal/modules/cjs/loader:1289:32)\n    at Function._load (node:internal/modules/cjs/loader:1108:12)\n    at TracingChannel.traceSync (node:diagnostics_channel:322:14)\n    at wrapModuleLoad (node:internal/modules/cjs/loader:220:24)\n    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:170:5)\n    at node:internal/main/run_main_module:36:49"}
{"level":"error","message":"error something went wrong in main not in express!","stack":"Error: something went wrong in main not in express!\n    at Object.<anonymous> (C:\\Users\\Nimap\\nodeprojects\\mongoTask\\server.js:26:7)\n    at Module._compile (node:internal/modules/cjs/loader:1554:14)\n    at Object..js (node:internal/modules/cjs/loader:1706:10)\n    at Module.load (node:internal/modules/cjs/loader:1289:32)\n    at Function._load (node:internal/modules/cjs/loader:1108:12)\n    at TracingChannel.traceSync (node:diagnostics_channel:322:14)\n    at wrapModuleLoad (node:internal/modules/cjs/loader:220:24)\n    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:170:5)\n    at node:internal/main/run_main_module:36:49"}
{"level":"error","message":"error something went wrong in main not in express!","stack":"Error: something went wrong in main not in express!\n    at Object.<anonymous> (C:\\Users\\Nimap\\nodeprojects\\mongoTask\\server.js:26:7)\n    at Module._compile (node:internal/modules/cjs/loader:1554:14)\n    at Object..js (node:internal/modules/cjs/loader:1706:10)\n    at Module.load (node:internal/modules/cjs/loader:1289:32)\n    at Function._load (node:internal/modules/cjs/loader:1108:12)\n    at TracingChannel.traceSync (node:diagnostics_channel:322:14)\n    at wrapModuleLoad (node:internal/modules/cjs/loader:220:24)\n    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:170:5)\n    at node:internal/main/run_main_module:36:49"}
{"level":"error","message":"error something went wrong in main not in express!","stack":"Error: something went wrong in main not in express!\n    at Object.<anonymous> (C:\\Users\\Nimap\\nodeprojects\\mongoTask\\server.js:26:7)\n    at Module._compile (node:internal/modules/cjs/loader:1554:14)\n    at Object..js (node:internal/modules/cjs/loader:1706:10)\n    at Module.load (node:internal/modules/cjs/loader:1289:32)\n    at Function._load (node:internal/modules/cjs/loader:1108:12)\n    at TracingChannel.traceSync (node:diagnostics_channel:322:14)\n    at wrapModuleLoad (node:internal/modules/cjs/loader:220:24)\n    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:170:5)\n    at node:internal/main/run_main_module:36:49"}
{"level":"error","message":"error something went wrong in main not in express!","stack":"Error: something went wrong in main not in express!\n    at Object.<anonymous> (C:\\Users\\Nimap\\nodeprojects\\mongoTask\\server.js:26:7)\n    at Module._compile (node:internal/modules/cjs/loader:1554:14)\n    at Object..js (node:internal/modules/cjs/loader:1706:10)\n    at Module.load (node:internal/modules/cjs/loader:1289:32)\n    at Function._load (node:internal/modules/cjs/loader:1108:12)\n    at TracingChannel.traceSync (node:diagnostics_channel:322:14)\n    at wrapModuleLoad (node:internal/modules/cjs/loader:220:24)\n    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:170:5)\n    at node:internal/main/run_main_module:36:49"}
{"level":"error","message":"error something went wrong in main not in express!","stack":"Error: something went wrong in main not in express!\n    at Object.<anonymous> (C:\\Users\\Nimap\\nodeprojects\\mongoTask\\server.js:26:7)\n    at Module._compile (node:internal/modules/cjs/loader:1554:14)\n    at Object..js (node:internal/modules/cjs/loader:1706:10)\n    at Module.load (node:internal/modules/cjs/loader:1289:32)\n    at Function._load (node:internal/modules/cjs/loader:1108:12)\n    at TracingChannel.traceSync (node:diagnostics_channel:322:14)\n    at wrapModuleLoad (node:internal/modules/cjs/loader:220:24)\n    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:170:5)\n    at node:internal/main/run_main_module:36:49"}


//winston 

{"level":"error","message":"something went wrong","service":"user-service"}
{"level":"info","message":"something went wrong","service":"user-service"}
{"level":"info","message":{},"service":"user-service"}
{"level":"info","message":{},"service":"user-service"}
{"level":"error","message":"something went wrong!! something went wrong!!!","service":"user-service","stack":"Error: something went wrong!!!\n    at getAuthor (C:\\Users\\Nimap\\nodeprojects\\mongoTask\\controllers\\auther.js:10:15)\n    at Layer.handle [as handle_request] (C:\\Users\\Nimap\\nodeprojects\\mongoTask\\node_modules\\express\\lib\\router\\layer.js:95:5)\n    at next (C:\\Users\\Nimap\\nodeprojects\\mongoTask\\node_modules\\express\\lib\\router\\route.js:149:13)\n    at Route.dispatch (C:\\Users\\Nimap\\nodeprojects\\mongoTask\\node_modules\\express\\lib\\router\\route.js:119:3)\n    at Layer.handle [as handle_request] (C:\\Users\\Nimap\\nodeprojects\\mongoTask\\node_modules\\express\\lib\\router\\layer.js:95:5)\n    at C:\\Users\\Nimap\\nodeprojects\\mongoTask\\node_modules\\express\\lib\\router\\index.js:284:15\n    at Function.process_params (C:\\Users\\Nimap\\nodeprojects\\mongoTask\\node_modules\\express\\lib\\router\\index.js:346:12)\n    at next (C:\\Users\\Nimap\\nodeprojects\\mongoTask\\node_modules\\express\\lib\\router\\index.js:280:10)\n    at Function.handle (C:\\Users\\Nimap\\nodeprojects\\mongoTask\\node_modules\\express\\lib\\router\\index.js:175:3)\n    at router (C:\\Users\\Nimap\\nodeprojects\\mongoTask\\node_modules\\express\\lib\\router\\index.js:47:12)"}
{"level":"info","message":{},"service":"user-service"}
{"level":"error","service":"user-service"}
{"level":"info","message":{}}
{"level":"error","message":"error something went wrong!!!","stack":"Error: something went wrong!!!\n    at getAuthor (C:\\Users\\Nimap\\nodeprojects\\mongoTask\\controllers\\auther.js:10:15)\n    at Layer.handle [as handle_request] (C:\\Users\\Nimap\\nodeprojects\\mongoTask\\node_modules\\express\\lib\\router\\layer.js:95:5)\n    at next (C:\\Users\\Nimap\\nodeprojects\\mongoTask\\node_modules\\express\\lib\\router\\route.js:149:13)\n    at Route.dispatch (C:\\Users\\Nimap\\nodeprojects\\mongoTask\\node_modules\\express\\lib\\router\\route.js:119:3)\n    at Layer.handle [as handle_request] (C:\\Users\\Nimap\\nodeprojects\\mongoTask\\node_modules\\express\\lib\\router\\layer.js:95:5)\n    at C:\\Users\\Nimap\\nodeprojects\\mongoTask\\node_modules\\express\\lib\\router\\index.js:284:15\n    at Function.process_params (C:\\Users\\Nimap\\nodeprojects\\mongoTask\\node_modules\\express\\lib\\router\\index.js:346:12)\n    at next (C:\\Users\\Nimap\\nodeprojects\\mongoTask\\node_modules\\express\\lib\\router\\index.js:280:10)\n    at Function.handle (C:\\Users\\Nimap\\nodeprojects\\mongoTask\\node_modules\\express\\lib\\router\\index.js:175:3)\n    at router (C:\\Users\\Nimap\\nodeprojects\\mongoTask\\node_modules\\express\\lib\\router\\index.js:47:12)"}
{"level":"error","message":"error something went wrong in main not in express!","stack":"Error: something went wrong in main not in express!\n    at Object.<anonymous> (C:\\Users\\Nimap\\nodeprojects\\mongoTask\\server.js:27:7)\n    at Module._compile (node:internal/modules/cjs/loader:1554:14)\n    at Object..js (node:internal/modules/cjs/loader:1706:10)\n    at Module.load (node:internal/modules/cjs/loader:1289:32)\n    at Function._load (node:internal/modules/cjs/loader:1108:12)\n    at TracingChannel.traceSync (node:diagnostics_channel:322:14)\n    at wrapModuleLoad (node:internal/modules/cjs/loader:220:24)\n    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:170:5)\n    at node:internal/main/run_main_module:36:49"}
{"level":"error","message":"error something went wrong in main not in express!","stack":"Error: something went wrong in main not in express!\n    at Object.<anonymous> (C:\\Users\\Nimap\\nodeprojects\\mongoTask\\server.js:26:7)\n    at Module._compile (node:internal/modules/cjs/loader:1554:14)\n    at Object..js (node:internal/modules/cjs/loader:1706:10)\n    at Module.load (node:internal/modules/cjs/loader:1289:32)\n    at Function._load (node:internal/modules/cjs/loader:1108:12)\n    at TracingChannel.traceSync (node:diagnostics_channel:322:14)\n    at wrapModuleLoad (node:internal/modules/cjs/loader:220:24)\n    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:170:5)\n    at node:internal/main/run_main_module:36:49"}
{"level":"error","message":"error something went wrong in main not in express!","stack":"Error: something went wrong in main not in express!\n    at Object.<anonymous> (C:\\Users\\Nimap\\nodeprojects\\mongoTask\\server.js:26:7)\n    at Module._compile (node:internal/modules/cjs/loader:1554:14)\n    at Object..js (node:internal/modules/cjs/loader:1706:10)\n    at Module.load (node:internal/modules/cjs/loader:1289:32)\n    at Function._load (node:internal/modules/cjs/loader:1108:12)\n    at TracingChannel.traceSync (node:diagnostics_channel:322:14)\n    at wrapModuleLoad (node:internal/modules/cjs/loader:220:24)\n    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:170:5)\n    at node:internal/main/run_main_module:36:49"}
{"level":"error","message":"error something went wrong in main not in express!","stack":"Error: something went wrong in main not in express!\n    at Object.<anonymous> (C:\\Users\\Nimap\\nodeprojects\\mongoTask\\server.js:26:7)\n    at Module._compile (node:internal/modules/cjs/loader:1554:14)\n    at Object..js (node:internal/modules/cjs/loader:1706:10)\n    at Module.load (node:internal/modules/cjs/loader:1289:32)\n    at Function._load (node:internal/modules/cjs/loader:1108:12)\n    at TracingChannel.traceSync (node:diagnostics_channel:322:14)\n    at wrapModuleLoad (node:internal/modules/cjs/loader:220:24)\n    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:170:5)\n    at node:internal/main/run_main_module:36:49"}
{"level":"error","message":"error something went wrong in main not in express!","stack":"Error: something went wrong in main not in express!\n    at Object.<anonymous> (C:\\Users\\Nimap\\nodeprojects\\mongoTask\\server.js:26:7)\n    at Module._compile (node:internal/modules/cjs/loader:1554:14)\n    at Object..js (node:internal/modules/cjs/loader:1706:10)\n    at Module.load (node:internal/modules/cjs/loader:1289:32)\n    at Function._load (node:internal/modules/cjs/loader:1108:12)\n    at TracingChannel.traceSync (node:diagnostics_channel:322:14)\n    at wrapModuleLoad (node:internal/modules/cjs/loader:220:24)\n    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:170:5)\n    at node:internal/main/run_main_module:36:49"}
{"level":"error","message":"error something went wrong in main not in express!","stack":"Error: something went wrong in main not in express!\n    at Object.<anonymous> (C:\\Users\\Nimap\\nodeprojects\\mongoTask\\server.js:26:7)\n    at Module._compile (node:internal/modules/cjs/loader:1554:14)\n    at Object..js (node:internal/modules/cjs/loader:1706:10)\n    at Module.load (node:internal/modules/cjs/loader:1289:32)\n    at Function._load (node:internal/modules/cjs/loader:1108:12)\n    at TracingChannel.traceSync (node:diagnostics_channel:322:14)\n    at wrapModuleLoad (node:internal/modules/cjs/loader:220:24)\n    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:170:5)\n    at node:internal/main/run_main_module:36:49"}
{"level":"error","message":"error something went wrong in main not in express!","stack":"Error: something went wrong in main not in express!\n    at Object.<anonymous> (C:\\Users\\Nimap\\nodeprojects\\mongoTask\\server.js:26:7)\n    at Module._compile (node:internal/modules/cjs/loader:1554:14)\n    at Object..js (node:internal/modules/cjs/loader:1706:10)\n    at Module.load (node:internal/modules/cjs/loader:1289:32)\n    at Function._load (node:internal/modules/cjs/loader:1108:12)\n    at TracingChannel.traceSync (node:diagnostics_channel:322:14)\n    at wrapModuleLoad (node:internal/modules/cjs/loader:220:24)\n    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:170:5)\n    at node:internal/main/run_main_module:36:49"}
{"level":"error","message":"error something went wrong in main not in express!","stack":"Error: something went wrong in main not in express!\n    at Object.<anonymous> (C:\\Users\\Nimap\\nodeprojects\\mongoTask\\server.js:26:7)\n    at Module._compile (node:internal/modules/cjs/loader:1554:14)\n    at Object..js (node:internal/modules/cjs/loader:1706:10)\n    at Module.load (node:internal/modules/cjs/loader:1289:32)\n    at Function._load (node:internal/modules/cjs/loader:1108:12)\n    at TracingChannel.traceSync (node:diagnostics_channel:322:14)\n    at wrapModuleLoad (node:internal/modules/cjs/loader:220:24)\n    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:170:5)\n    at node:internal/main/run_main_module:36:49"}


// SCOPE

// const latestFunc = () =>{
//     let newVar =  "something"
//     console.log(newVar)
// }
// latestFunc()

// function myFunction() {
//     var localVariable = "I'm in local scope";
//     console.log(localVariable);
//   }
  
//   myFunction();


// var message = "Global message";

// function showMessage() {
//   var message = "Local message"; // This "shadows" the global variable
//   console.log(message); // Accessing the local variable
// }

// showMessage();
// console.log(message); //global message!


// var a = "I'm global";

// function firstFunction() {
//   var a = "I'm in firstFunction";

//   function secondFunction() {
//     a ='sahc'
//     console.log(a); //this can acess variable from anywhere in conde
//   }

//   secondFunction();
// }

// firstFunction();


// function outerFunction() {
//     let outerVariable = 'I am outside!';

//     function innerFunction() {
//         console.log(outerVariable);
//     }

//     return innerFunction;
// }

// const inner = outerFunction();
// inner() //I am outside -  becouse of clouser

// for (var i = 0; i < 3; i++) {
//     setTimeout(function() {
//         console.log(i);  // 3 3 3
//     }, 100);
// }

// for (let j = 0; j < 3; j++) {
//     setTimeout(function() {
//         console.log(j); // 0 1 2
//     }, 100);
// }

// const obj = {
//     value: 42,
//     getValue: function() {
//         return this.value;
//     }
// };

// const getValue = obj.getValue; //now this function is refering outside becouse we declared to a variable
// console.log(getValue());//undefined!


// function testScope() {
//     if (true) {
//         var x = 'I am var';
//         let y = 'I am let';
//     }
//     console.log(x); // var does not have block scope thats why this will not accessible
//     console.log(y); // becouse of block scope y is not accessible // y is not defined
// }

// testScope();

// var a = 1;

// (function() { //this will create his own memory allocation face and give value to this;
//     var a = 2;
//     console.log(a);
// })();

// var a = 9;

// console.log(a);

