// console.log("first")
// latestFunc(30, function (value){
//     console.log(`details >>>> ${value.id} - ${value.name} `)
// })
// console.log('third')



// function latestFunc(id, callbackFunc){
//     console.log("latestFunc Called!")
//     callbackFunc({id,name : 'sachinelend'})
// }


const promiseVar = new Promise((resolve,reject)=>{
    resolve("Success") // return not execute below code after this
    reject(new Error ("something went wrong!"))
})

promiseVar.then((value)=> console.log(value))
promiseVar.catch((error)=> console.log("ERROR",error.message))

app.use("/products",productRoutes)
app.use("/books",bookRoutes)

//DB.js
const mongoose = require("mongoose")

const connectDB = mongoose.connect("mongodb://localhost:27017/playground")

connectDB.then((value)=>{
    console.log("Mongodb connected successfully")
})
.catch((error)=>{
    console.log("Mongodb connection Issue : ",error)
})

module.exports = connectDB;

//bookController.js

const mongoose = require("mongoose")
const Book = require("../models/bookModel")


const createBook  = async(req,res)=>{
    const bookData = new Book({
        name : "sachin",
        auther : "rajajs",
        tags : ['new','lats'],
        isPublished : true
    })

     const addData = await bookData.save(bookData)
     if(addData){
        res.status(201).send(addData)
        console.log("success Created")
     }else{
        res.status(401).send("something went wrong with creating data")
        console.log("faild Book add...")
     }
}

const getBooks = async(req,res) =>{

    const books = await Book.find();

    if(books){
        res.status(201).send(books)
        console.log(books)
    }else{
        console.log("something went wrong in GETPRODUCTS")
        res.status(404).send("something went wrong!")
    }
}

module.exports = {createBook,getBooks};

//model.js

const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
    name:{
        type: String,
    },
    auther :{type: String},
    isPublished : {type:Boolean},
    tags : [String],
    date : {type: Date, default : Date.now}
})


const Book = mongoose.model("book",bookSchema)

module.exports = Book;

// bookRoutes.js

const express = require("express");
const {getBooks,createBook} = require("../controllers/bookController")
const router = express.Router();

router.get("/",getBooks)
router.post("/",createBook)


module.exports = router;