const Joi  = require("joi")
const Author = require("../models/author");
const authorValidateSchema = require("../middlewares/validatorSchema/authorValidateSchema");

const getAuthor = async(req,res)=>{
    try{
    const result = await Author.find();
    if(!result) return  res.status(404).json({success : false,data : [], message : 'Authors data not found!'})


    res.status(200).json({
        success : true,
        data : result,
        message : 'Authors found success!'
    })
    } catch(error){
        res.status(401).json({success : false, message: (error && error.message) ?? "something went wrong"})
}
}

const getAuthorById = async(req,res) => {
        try{
            const authorId = req.params.id
            if(!authorId) return  res.status(401).json({success : false, message: 'Author Id is required to get auther details!'})
            
            
            const result  = await Author.findById(authorId);

            if(!result) return res.status(404).json({success:false, message: "Author not found!"})
            

            res.status(200).json({success :true, data : result, message:"Author details successfully!"})


        }catch(error){
            res.status(401).json({success : false, message: (error && error.message)??'something went wrong!'})
        }
}

const createAuthor = async(req,res)=>{
        try{
            console.log("req.body",req.body)
            const validateAuthor =  authorValidateSchema.validate(req.body)
            if(validateAuthor.error) return res.status(401).json({success :false, message: validateAuthor.error.message})

                const addNewAuthor = new Author(req.body);
                const result  = await addNewAuthor.save();

                if(!result) return res.status(401).json({success :false, message:'Author not added!'});

                res.status(201).json({success : true, data : result, message: 'Author added success!'})

        }catch(error){
            res.status(400).json({success :false, message: (error && error.message) ?? "something went wrong!"})
        }
}

const updateAuthor = async(req,res) =>{
            try{
                const authorId = req.params.id;

                if(!authorId) return req.status(401).json({success :false, message:'Id is required to update Author details!'})

               const validateAuthorReqBody =   authorValidateSchema.validate(req.body);
               if(validateAuthorReqBody.error) return res.status(401).json({success :false, message: validateAuthorReqBody.error.message})

                const result = await Author.findByIdAndUpdate(authorId,req.body,{new:true})

                if(!result) return res.status(404).json({success: false, message: "Author not found!"})

                res.status(201).json({success :true, data: result, message : "Author updated success!"})

            }catch(error){
                res.status(400).json({success :false, message: (error && error.message)??'something went wrong!'})
            }
}

const deleteAuthor = async(req,res) =>{
try{
    const authorId = req.params.id
    if(!authorId) return res.status(401).json({success:false, message:"Id is required to delete auther"})

    const result = await Author.findByIdAndDelete(authorId);

    if(!result) return res.status(404).json({success:false, message:"Author not found!"})

        res.status(200).json({succes:true, data:result, message:"Auther deleted success!"})
}catch(error){
    res.status(401).json({success:false, message: (error && error.message)??"something went wrong!"})
}

}


module.exports = {createAuthor, updateAuthor, deleteAuthor, getAuthor, getAuthorById}

const Joi = require("joi")


const authorValidateSchema = Joi.object({
    name: Joi.string().min(3).required(),
    about : Joi.string().min(10),
    bestRelease: Joi.string(),
    place :Joi.string().required(),
    phoneNumber: Joi.number().required()
})



module.exports = authorValidateSchema;

const mongoose = require("mongoose");


const authorSchema = new mongoose.Schema({
    name : String,
    about : {
        type :String,
        required : true,
        default : "He is a best story auther...!"
    },
    bestRelease : {
        type : String,
    },
    place : {
        type : String,
        required :true,
    },
    phoneNumber : {
        type : Number,
        required : true,
        validate : {
            validator : function (value){
                    return /^[0-9]{10}$/.test(value);
            },
            message : "phone number should be 10 digit !"
        }
    }
})

const Author = mongoose.model("Author", authorSchema);



module.exports = Author;

const express = require("express");
const {updateAuthor,createAuthor,deleteAuthor,getAuthor,getAuthorById}  = require("../controllers/auther")
const router =  express.Router();



 router.route("/").get(getAuthor).post(createAuthor)
 router.route("/:id").get(getAuthorById).put(updateAuthor).delete(deleteAuthor)


module.exports = router

const express  = require("express")
const connectDB = require("./config/connectDB")
const courseRoutes = require("./routes/course")
const authorRoutes = require("./routes/author")

const app = express();
connectDB()
app.use(express.json())

app.get("/", (req,res) => {
        res.status(200).send("Welcome to Home Page!")
})
app.use("/courses", courseRoutes)
app.use("/authors", authorRoutes)


const PORT  = 5000;

app.listen(PORT, (error)=>{
   console.log(`server is running on port ${PORT}`)
})