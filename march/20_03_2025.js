/* 
🔥 ES6 Features (Prioritized List)
🔹 High Priority (Most Used & Important)
let & const (Block-scoped variables)
Arrow Functions (=>)
Template Literalls ( for strings)
Destructuring (Objects & Arrays)
Spread & Rest Operators (...)
Default Parameters in Functions
Enhanced Object Literals
🔹 Medium Priority (Frequently Used in Modern Codebases)
Promises & Async/Await
Modules (import/export)
Map, Set, WeakMap, WeakSet
Classes (class & extends)
For...of Loop
Optional Chaining (?.)
Nullish Coalescing (??)
🔹 Lower Priority (Less Common but Useful)
Generators (function*)
Symbol Data Type
Proxy & Reflect API
Promise.allSettled()
String & Array Enhancements (includes(), startsWith(), endsWith())
Object.entries(), Object.values(), Object.fromEntries() */

// const latestObj = {
//     name : "sachin",
//     isVeg : false,
//     getData :function (){
//             console.log(`Hi, I am ${this.name} and I am ${this.isVeg?"Vegeterian":"non-vegeterian"}`)
//     }
// }

// function firstFunc(holiday,greet){
//     console.log(`Hi, I am ${this.name},happy ${holiday} and please ${greet}!`)
// }

// firstFunc.call(latestObj,"Holi","celebrate")


// latestObj.getData()


// const secondObj = {
//     name :"rohan",
//     isVeg: true
// }

// //bind method!
// let withMethod = latestObj.getData.bind(secondObj); //now we binded this method so we can this method anywhere in the code
// withMethod()

// console.log("1")
// //call method!
// latestObj.getData.call(secondObj) //we called that mathod here
// console.log(2)
// //apply method!
// latestObj.getData.apply(secondObj) 


// Destructuring 

// const firstArr =  [1,43,3,4,3,3,"sachin", {name:"raaja"},33,true]
// const [a,b,c,...remainingVals] = firstArr;
// // array destructring means value will be assign to every values to the give values from the array.
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(remainingVals) //all remaining values should be passed to this variable means assign to this as an ARRAY
// null will consider as value but undefied is not consider as value!!
const secondArr = [ null,{name:"raaja"},33,true]
const [str = 'rajjj', obj, num, bool] = secondArr;

console.log( str)               
// console.log(typeof obj)               
// console.log(typeof num)               
// console.log(typeof bool)               

const allObj = { name :"sachin",isVeg:undefined, roles :{first:"engineer",second:"developer"},number : 245343, hobby : ["first","second","third","fourth"] }

const {number , isVeg = false, roles, hobby,club} = allObj;

console.log("name",number) // we have given  new name that "myName"
console.log("isVeg",isVeg)
console.log("roles",roles.first)
console.log("number",number)
console.log("hobby",hobby)
console.log("club", club)
//only undefined is consider as empty value 
// null will be consider as value

const newArr = [
    {thir:"dleie"},
    {a:"wleiel"},
    {b : {d:'ediod', e:{l:"eldls"}}},
    {game  : {mainGame : "cricket",secondGame : {insideGame: "football"}}}
]
const [{thir}] = newArr;
console.log("D",thir)



// massFunc()
// console.log(massFunc) //defined as function


for(var i=0; i<3;i++){
    setTimeout(()=>{
        console.log(i)
    },100)
}

