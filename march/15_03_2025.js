const tryCatchErrorHandler = (methodHandler) => {
    return  async (req,res,next) =>{ //passing another function becouse in main need 'req, res, next' access 
                                        //becouse of this main func lost props...!
    try{
        // ..... actual code
        await methodHandler(req,res,next);
    }catch(error){
       next(error)
    }
}
}

module.exports = tryCatchErrorHandler;


module.exports = function (err,req,res,next) { //need all four parameter to execute (next) reason for error
    if(err && err.message){
           return  res.status(400).json({success:false,message: err.message})
        }
  res.status(500).json({success : false, message: 'Internal server error!'})
}       

const Joi  = require("joi")
const {Author} = require("../models/author");
const authorValidateSchema = require("../middlewares/validatorSchema/authorValidateSchema");




const getAuthor = async(req,res,next)=>{
    try{
    const result = await Author.find('eljdlkd')
    console.log("result",result)
    if(!result) return  res.status(404).json({success : false,data : [], message : 'Authors not found!'})


    res.status(200).json({
        success : true,
        data : result,
        message : 'Authors found success!'
    })
    } catch(error){
        // res.status(500).json({success : false, message: (error && error.message) ?? "something went wrong"})
        
        // calling "errorHandler" error Middleware 
        next(error)
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
            // res.status(401).json({success : false, message: (error && error.message)??'something went wrong!'})
            next(error)
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

const {register,login} = require("../controllers/user")
const express =  require("express")
require("express-async-errors")  //only need this import //only in routes


const router = express.Router();

router.route("/register").post(register)
router.route("/login").post(login);


module.exports = router;
