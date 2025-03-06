ith express

const express = require("express");
const Joi = require("joi") //J capital becouse it is a class..
const app = express()
const loggerMiddleware = require("./logger")

app.set("view engine","pug") //not need to import pug package.
app.set("views","./views")

// app.use() for the middleware...
app.use(express.json())
//so this will convert any type of value in json like html , array,object
app.use(express.urlencoded({extended:true})) 
//this is for creating static file which is root file 
app.use(express.static("public"))

//middleware goes one by one...
app.use( function (req,res,next){
    console.log("1st middleware is called...!")
    next()
})
app.use(loggerMiddleware)

app.use((req,res,next)=>{
    console.log("second Middlerware is called")
    next()
})

let products = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Phone', price: 500 },
    { id: 3, name: 'Tablet', price: 300 }
];

const productSchema =  Joi.object(
    {
       name : Joi.string().min(3).required(),
       price : Joi.number().positive().required()
   })

app.get("/", (req,res)=>{
    res.render("index",{title :"new app", name : "welcome", desc : "aa slala eslals slaie lila sieaal aaieleal eddk jekljdeo",first :'first',second:"second"})
})

app.get("/products", (req,res)=>{
    res.send(products)
})

app.get("/products/:id", (req,res)=>{
    console.log("id:- ", typeof req.params.id); //ID in string convert it into number "ParseInt "
     const product = products.find((product)=> product.id === parseInt(req.params.id))
     if(!product){
        res.status(404).send("Product not found with this id !!!")
     }
     res.status(201).send(product)
})

app.post("/products",(req,res)=>{

    //general way to check conditions.... instead use "JOI"
    // if(!req.body.name || !req.body.price){
    //   return  res.status(400).send("please provide all data")
    // }

    // _______________________________
    // WITH JOI
    // fir need to create schema..
        
    // validating before adding or updating...
        const validateProduct = productSchema.validate(req.body)

        //checking and returning if some error found...!
        if(validateProduct.error){
            return res.status(400).json(validateProduct.error.message)
        }

      const newProduct = {
        id : products.length + 1,
        name : req.body.name,
        price : req.body.price
      }

      products.push(newProduct);
      res.status(201).send(newProduct)
})

app.put("/products/:id", (req,res)=>{

    //not provide data this also provide reference 
    // so we if change any value  this will update in original ....

    const isProductAvailable = products.find((product)=> product.id === parseInt(req.params.id))
    if(!isProductAvailable){
        return res.status(404).send("product is not found!")
    }

    const validateProductData = productSchema.validate(req.body)

    if(validateProductData.error){
        return res.status(400).send(validateProductData.error.message)
    }

    //way 1 to update
    // isProductAvailable.name = req.body.name;
        Object.assign(isProductAvailable,req.body)

     res.status(201).send(products)
})


app.delete("/products/:id", (req,res)=>{

    const checkProduct = products.findIndex((product)=> product.id === parseInt(req.params.id))
    console.log("checkProduct",checkProduct)
    if(checkProduct === -1) {
        return res.status(404).send("Product not found")
    }
    // const getIndex = products.findIndex(checkProduct)
    products.splice(checkProduct,1)

    console.log(products)
    res.status(200).send("product deleted successfully...!")
})

const PORT  = 5000;
app.listen(PORT,()=>{
    console.log("Running with server......!")
})
