    
const bcrypt = require("bcrypt");
require("dotenv").config()
    
async function bcryptPassword (pass,pass2){

const generateSalt = await bcrypt.genSalt(10);

const hashPassword = await bcrypt.hash(pass, generateSalt);


console.log("generated Password :-", hashPassword)

//Now comparing user password with stored hass password

// const isPasswordIsValid = await bcrypt.compare(pass2,hashPassword);


// if(!isPasswordIsValid) return console.log("please enter valid password")

    console.log("Password compared success")


// const salt = await bcrypt.genSalt(10)
//     console.log("salt",salt)


//     const newPassword = await bcrypt.hash(pass,salt)

//     console.log(newPassword)

//     const dcrypt = await bcrypt.compare(pass,newPassword)
//     console.log(dcrypt)

}

bcryptPassword()


const jwt = require("jsonwebtoken");
const User = require("../models/user")


const verifyToken = async (req,res,next) => {
        try{
            const checkToken = req.header("Authorization")
                if(!checkToken)   return res.status(401).json({success:false, message:"Access denied!"});

                const validToken = checkToken.split(" ")[1]; //removing Bearer from header!

            const verify = jwt.verify(validToken,process.env.JWT_SECRET)
            if(!verify) return res.status(401).json({success:false, message:'Access denied!'})

                req.user = verify;

            next()
        }catch(error){
          return res.status(401).json({success:false, message:error?.message ?? "Unauthorized request!"})
        }
}


const isAdmin = async (req,res,next) =>{
    try{    

        // if(!req.userId) return res.status(404).json({success :false, message : "user not found!"})
        console.log("req.user",req.user);
            if(!req.user?.isAdmin) return res.status(403).json({success:false, message : "Access denied!!!!"})
               
                next()
    }catch(error){
        return res.status(401).json({success:false ,message :error?.message??"something went wrong!"})
    }

}

module.exports = {verifyToken,isAdmin};

const User = require("../models/user")
const bcrypt = require("bcrypt")
const _ = require("lodash");
const jwt = require("jsonwebtoken")
const userValidateSchema = require("../middlewares/validatorSchema/userValidateSchema")

const register = async (req,res) =>{
    try{    

         const validateReqData = userValidateSchema.validate(req.body)
         if(validateReqData.error) return res.status(400).json({success:false, message: validateReqData.error?.message})
            
         const isEmailUnique =  await User.findOne({email: req.body?.email})
         if(isEmailUnique) return res.status(401).json({success: false, message : "Email is already registered!"})

            const salt = await bcrypt.genSalt(10)
            const hassPassword = await bcrypt.hash(req.body.password,salt)
             req.body.password = hassPassword  //saving that password in body

        const  newUser =  new User( _.pick(req.body,["name", "email","password"]));
        const result = await newUser.save();

        if(!result) return res.status(400).json({success:false, message:"user not registered!"})

            const getToken = jwt.sign({id:newUser._id,isAdmin : newUser.isAdmin},process.env.JWT_SECRET,{expiresIn:"1h"})  
            
            //_.pick(result, ["name","email"])  // to get only required data from any object
         res.status(201).json({success :true, data : {token : getToken, name: newUser.name,email:newUser.email},  message : 'user registered success!'})

    }catch(error){
        res.status(400).json({success:false,messag: error?.message??"something went wrong!"})
    }
        
}

const login  = async(req, res) => {
        try{
        if(!req.body.email || !req.body.password) return res.status(401).json({ success :false , message : "Email & Password are required to login!"})

        const result = await User.findOne({email: req.body.email})

        if(!result) return res.status(401).json({success :false, message : 'Invalid credentials!'})

        const comparePassword = await bcrypt.compare(req.body.password, result.password)

        if(!comparePassword) return res.status(401).json({success : false, message : "Invalid credentials!"})
       
        const getToken =  jwt.sign({id:result._id,isAdmin : newUser.isAdmin},process.env.JWT_SECRET,{expiresIn:"1h"}) 
        const dataToSend  = _.pick(result,["_id","name","email"])
        res.status(200).json({success:true, data : {token:getToken,...dataToSend}, message:"user loggedIn success!"})
    }catch(error){
        res.status(400).json({success:false, message: error?.message ?? "something went wrong!"})
    }
}



module.exports = {register,login}

JWT_SECRET  =  "73cc13186"

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
    } ,
    isAdmin : {
        type : Boolean,
        required : true,
        default : false,
    }
})

const User = mongoose.model("User",userSchema)

module.exports = User;
