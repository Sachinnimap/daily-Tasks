const mongoose = require("mongoose");


const courseSchema = new mongoose.Schema({
    name : {
        type: String,
        required : true
    },
    author : {
        type : String,
         required : true,
         default : "sachin babu"
    },
    isPublished : {
        type : Boolean,
        required  : true
    },
    price : {
        type : Number,
        required : function () {
            return  this.isPublished ? true: false; //depended on ispublished
        }
    },
    tags : {
        type : Array,
        validate: {
            Validator : function (value){
               return value && value.length > 0 ;
            },
            message : "please add one tag atleast before proceeding!" //throw error if value not added
        }
    },
    date : {
        type : Date,
        default : Date.now,
        isAsync  : true,
        validate : {
            validator : function (value ,callback){

                    return callback() // so this will wait till function fulfil promise then this will response
            }
        }
    }

})

const Course = mongoose.model("course",courseSchema)


module.exports = Course;

const mongoose = require("mongoose");

const connectDB = async (req,res)=>{
        try{
            await mongoose.connect("mongodb://localhost:27017/mongo-exercises");
            console.log("Mongodb connected success!")

        }catch(error){
            console.log("Mongodb connection Issue : ",error)
        }
}


module.exports =  connectDB;
const Course = require("../models/course")


const getCourses = async (req,res)=>{

            try{
                const allCourses = await Course.find({ $or :[{price : {$gte : 15}},{name:/.*by.*/}]})  
                                            // .sort({price : -1})
                                            // .select({name: 1, author : 1,price:1})

                if(!allCourses){
                  return  res.status(404).json({success  :false, message : "Courses not found !"})
                }

                res.status(201).json({success : true , message : 'all courses with data', data : allCourses})

            }catch(error){
                    res.status(401).json({success : false, message : error.message})
            }   
}


module.exports = {getCourses};

const express  = require("express")
const {getCourses} = require("../controllers/course")

const router = express.Router();

router.get("/",getCourses)


module.exports = router;

const express  = require("express")
const connectDB = require("./config/connectDB")
const courseRoutes = require("./routes/course")

const app = express();
connectDB()

app.get("/", (req,res) => {
        res.status(200).send("Welcome to Home Page.........!")
})
app.use("/course", courseRoutes)


const PORT  = 5000;

app.listen(PORT, (error)=>{
   console.log(`server is running on port ${PORT}`)
})