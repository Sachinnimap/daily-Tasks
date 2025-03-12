const User = require("../models/user")
const _ = require("lodash");

const userValidateSchema = require("../middlewares/validatorSchema/userValidateSchema")

const register = async (req,res) =>{
    try{    

         const isEmailUnique =  await User.find({email: req.body?.email})
         if(!isEmailUnique) return res.status(401).json({success: false, message : "Email is already registered!"})

         const validateReqData = userValidateSchema.validate(req.body)
         if(validateReqData.error) return res.status(400).json({success:false, message: validateReqData.error?.message})
     console.log(1)
        const  newUser =  new User( _.pick(req.body,["name", "email","password"]));
        const result = await newUser.save();

        if(!result) return res.status(400).json({success:false, message:"user not registered!"})
            
         res.status(201).json({success :true, data : _.pick(result, ["_id","name","email"]),  message : 'user registered success!'})

    }catch(error){
        res.status(400).json({success:false,messag: error?.message??"something went wrong!"})
    }
        
}

const login  = async(req, res) => {
        try{
        if(!req.body.email || !req.body.password) return res.status(401).json({ success :false , message : "Email & Password are required to login!"})

        const result = await User.findOne({email: req.body.email , password : req.body.password})

        if(!result) return res.status(404).json({success :false, message : 'no user found with these credentials! '})

        res.status(200).json({success:true, data : result, message:"user loggedIn success!"})
    }catch(error){
        res.status(400).json({success:false, message: error?.message ?? "something went wrong!"})
    }
}



module.exports = {register,login}

const Joi =  require("joi")

const userValidateSchema = Joi.object({
    name : Joi.string().required(),
    email: Joi.string().email().required(),
    password : Joi.string().min(6).required()
})

module.exports = userValidateSchema;

const mongoose  = require("mongoose");

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required :true
    },
    email : {
        type : String,
        required : true,
        unique : true,
        // validate : {
        //     validator : (value)=>{
        //         return !value("@")
        //     },
        //     message :"Email Id not valid"
        // }
    },
    password : {
        type : String,
        required : true,
    } 
})

const User = mongoose.model("User",userSchema)

module.exports = User;

const {register,login} = require("../controllers/user")
const express =  require("express")

const router = express.Router();

router.route("/register").post(register)

router.route("/login").post(login);


module.exports = router;


const Joi  = require("joi")
const {Author} = require("../models/author");
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
            
            //_____VALIDATOR ONLY IN CREATION_____
            //    const validateAuthorReqBody =   authorValidateSchema.validate(req.body);
            //    if(validateAuthorReqBody.error) return res.status(401).json({success :false, message: validateAuthorReqBody.error.message})

                const result = await Author.findByIdAndUpdate(authorId,req.body,{new:true,runValidators:true})

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