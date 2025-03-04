// ___________PATH module____________
const path = require('path')
//this is used to get basename of any file we have to pass the 'filename' inside that
// const pathHandler = path.basename("dkd.png")
// console.log('path - ',pathHandler);


// in path.join we have to pass multiple string then this will create new full with adding all
//remove - // .  .. that all remove when we use .path
// const pathJoin  = path.join('akdld.jpg','eee','/eilse.jpeg')
// console.log(pathJoin)
// console.log(path.join("jeee","eiowle","wooeoe","ssssje","wwweer")) //\ added every
// console.log(path.join("jeee","eiowle","..","ssssje","wwweer"))
// console.log(path.join("aaaaa","bbbbb","cccccc","dddddd","eeeeee"))
// console.log(path.join("",""))

// console.log(path.join('', '', ''));

//____________RESOLVE ______________

//because at the start "/" not written thats why this will give absolute path...
// console.log(path.resolve("ttttt",'kkkk.jpg','jjjjj','eeee.png')) 
// console.log(path.normalize("/eilsle////eiwlde/ieldesde/./iiiie.js"))

//used to check is path absolute or not?
// console.log(path.isAbsolute("/jdlek/ekldjde.jpg"))

// console.log(path.parse("iuij/eliles"))

// let obj = {
//     root :"D:",
//     dir  : '/vdev',
//     name : "newName",
//     ext : ".png"
// }
// const filePathObj = {
//     dir: '/home/user',
//     base: 'final.txt',
//     name: 'draft',
//     ext: '.docx'
//   };
//   console.log(path.format(obj))
// console.log(path.format(filePathObj))



// ___________________FILE SYSTEM_________________________________

const fs = require("fs")

 function createNewFile(){
        const getFileResp  = fs.writeFile(`${__dirname}/newFile_${Math.round(Math.random() * 100)}`, "fiel dlek dsl eieiei leiwlw ejdi skjefle dsah inseas lthasthasjtls", "utf-8", (err) => {
            if (err) {
                return "Something went wrong...!";
            }
        })
        return getFileResp;
}

console.log(createNewFile())

function createNewFile(){
    const getFileResp  = fs.appendFile(`${__dirname}/newFile_91`, "\n added using new Append file", "utf-8", (err) => {
        if (err) {
            return "Something went wrong...!";
        }
    })
    return getFileResp;
}

console.log(createNewFile())


// fs.unlink(`${__dirname}/newFile_3`,(error)=>{
//     if(error){
//         console.log("ERROR")
//     }
// })

fs.rename(`${__dirname}/newFile_91`,`${__dirname}/latestName`, (error)=>{
    if(error){
    console.log("erorr found: ", error)
    }
})