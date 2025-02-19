const path = require("path");
const os = require("os");
const fs = require("fs")

const taskController = async(req,res) => {

     /***************PATH module****************** */
    //Path.Parse
    // Path.isAbsolute
    // Path.resolve
    // path.join
    // path.normalize

    //current directory of this folder
    console.log("dirname" + __dirname) 

    // details of the given folder linke filename,extname etc
    const path_value = path.parse(__dirname) 
    console.log(path_value)

     // parse
    //use "/" not "\"  - "/" is working properly- parse and give file details
    console.log(path.parse("C:/users/gfg/documents/report.pdf"))

     isAbsolute
     // "/" then path this will give true to the file if file is not mentioned then this will give false;
     console.log(path.isAbsolute("report.pdf")) //false "/report.pdf" //true

    //Path.normalize
    // Path.normalize - remove unnecesary things from route(. .. //) and provide normal path
    //if use "./" or "../" move to that and so normal path after handling this
     console.log(path.normalize("C:/users/gfg///documents/report.pdf")) //C:\users\gfg\documents\report.pdf
    console.log(path.normalize("user///sdl/dljls//"))  //user\sdl\dljls\

    // path.resolve
    //add given path with current directory and  give full path
    // this will come out one folder and add directory path
    // in this this will move out of "controller" folder then provide path
    // if we want to add path we have to mention folder name before filename "controller/newovl.js"
    console.log("resolvePath " + path.resolve("newovl.js"))//C:\Users\Nimap\nodeprojects\tasks\newovl.js
   /// resolve for multiple paths ("RIGHT TO LEFT Path assign")
   /// if in the end "/" not given then this will take current directory of device and add it to that
  console.log(path.resolve("/shcin" ,"/jels/dlk")) 

   // path.join
   // path.join will join multiple diffent path is single path
   // "." and ".." will also work move one directory inside
   console.log(path.join("/sachin" , 'jrsld','lenld')); //\sachin\jrsld\lenld
   console.log(path.join("sachin" , '../jrsld','lenld')); //jrsld\lenld


 /**************** OS module ********************* */ 
  /* OS - operating system module
        this is used to get information about our device where we running nodejs  
        platform ,
        userInfo,
        totalmem,
        freemem;
   */
  
      /* SHIFT + ALT + A - multiline */

     /* os.platform */
   console.log("platform " + os.platform()) //win32
     
     /* os.userInfo */
     /* uid,gid,username,homedir,shell */
   console.log("userInfo" , os.userInfo())
      /* {
        uid: -1,
        gid: -1,
        username: 'Nimap',
        homedir: 'C:\\Users\\Nimap',
        shell: null
      } */


        /* os.totalmem  - provide total memory in bytes*/
      console.log("totalMemory " + os.totalmem()) //17054232576 

        /* os.freemem - provide available free memory in the device in BYTES */
      console.log("Free memory " + os.freemem());



        /* **************File System Module (fs) ******************* */
        /* this is basically used for creating updating deleting reading a file */
        /* 
            fs.readFile()
            fs.uppendFile()
            fs.writeFile()
            fs.deleteFile()
            fs.openFile()
            fs.closeFile()
         */

        /*ReadFile 
         uses - CSV, plain, json , buffer, html
        */
        
        fs.readFile("./dummy/dummyHtml.html","utf-8",(error,content)=>{
            if(error){
                 res.status(500).json({"error":error.message})
                 return;
            }
            /* json.parse for JSON read before response
            html - use sendFile instead of send (sendFile recommanded)
            */
            res.status(201).sendFile( path.join(__dirname , "../dummy/dummyHtml.html"))
            console.log("content",content)
        })

        /* writeFile 
        this will create new file if not exist otherwise this will rewrite 
        use {flage:"a"}  if you dont want to replace just add to it */

      const content_new = "this is new file djkld text"
      fs.writeFile("./dummy/neww.js",content_new, {flag:"a",encoding:"utf-8"}, (error)=>{
          console.log(1)
          if(error){
              return res.status(500).json({error:error.message}) 
          }

         return res.status(200).json({message:"success"})
      })


    /* ************ appendFile *************** */
    /* use for add new lines without overwriting or changing */
        const content = `//this is your latestContent${Math.random(10)} `
        fs.appendFile("../dummy/test.js", content , 'utf-8',(error)=>{
            if(error){
                res.status(500).json({message:error.message})
                return
            }
            res.status(201).json({message:"Success"})
        })


  res.status(200).json({message:"Success"}) 
    
}

module.exports  = taskController;