

// 25-03-2025

const firstname = '';  //this considered as falsy value!
console.log(firstname)

if(firstname){
    console.log("suces")
}



// function factorial(n){
//         if(n === 1) return 1;

//         return n * factorial(n-1);
// }

// console.log(factorial(5)) //120

//.set method is used to update the value in the field!

//.push to add value to the list 
// db.users.updateMany({},{$push:{isVeg:true}})

//.inc is used to increase the value! 
//db.users.updateMany({},{$inc:{age:4}}) // add 4 in the all element value will be increase by 4 - if 10 then 14;


db.users.updateMany({},{rename:{age:"years"}}) // so this will update the key name age to years;


// add this value to all
db.users.updateMany({}, { $push: { seocnd: "sachin" } })

 //DELETE -     pull will also work same this will delete the  value from obj


