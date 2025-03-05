const EventEmit = require("events")

// this is for calling multiple event using 
// so we can create multiple event using above event class....
const firstEventEmitter = new EventEmit(); 

//let's creating first event  using above new Emmiter multitimes
firstEventEmitter.on("firstEvent",()=>{
    console.log("First event is running....!")
})

firstEventEmitter.on("secondEvent",()=>{
    console.log("Second event is running....!")
})

//so now inside eventEmmiter have 2 events 
//so we can call multi times every event and different events

firstEventEmitter.emit("firstEvent") //calling first
firstEventEmitter.emit('secondEvent')//calling second

// so using this we can call one event multiple times and
//this will not going to overwrite above function...
// const express  =  require("express");
// const task_route = require("./task/index")
// const app = express();

// app.use("/",task_route)
// app.use((err,req,res,next)=>{
//     res.status(500).json({error:err})
// })

// PORT = 5000;

// app.listen(PORT, ()=>{
//     console.log(`Server is running on port ${PORT}`);
// })


// without express....!

// const http = require("http")
// const products = [
//     { id: 1, name: 'Laptop', price: 1000 },
//     { id: 2, name: 'Phone', price: 500 },
//     { id: 3, name: 'Tablet', price: 300 }
// ];

// const server =  http.createServer((req,res)=>{
//     if(req.url == "/products"){
//         // res.w
//         res.end("products")
//     }
//      res.end("Hellow, world")
// })



// const PORT = 3000;
// server.listen(PORT,()=>{
//     console.log(`Server is running  - ${PORT}`)
// })


//with express

const express = require("express");


const app = express()

// app.use() for the middleware...

const products = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Phone', price: 500 },
    { id: 3, name: 'Tablet', price: 300 }
];

app.get("/", (req,res)=>{
    res.send("SUCCESS")
})

app.get("/product", (req,res)=>{
    res.send(products)
})

const PORT  = 5000;
app.listen(PORT,()=>{
    console.log("Running with server......!")
})


