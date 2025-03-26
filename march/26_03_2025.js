
//  console.log(0 || (1 && 2) || 3)// 2

//  console.log(null || (2 && 3) || 4); //3

 //small letter is bigger than any Capital letter!
// console.log("jeeep" > "neee") ; // false j is less than n that why here return false;
 //giving true becouse values are in string that matching their code!

//  console.log("5">"123")//true //becouse consider as both as string and comparing their code!


// let newArr =  ["rapmjesh","rapmesh","raomhul","raomkesh","raommu"];

// function getMatchStr (arr){
//         let matchStr = "";
//         let remainingCheck = newArr.length - 1;
//         for(let i=0; i < arr[0].length; i++){
//              let noOfMatch  = 0

//             for(let j=1; j < arr.length;j++){
//                 if(arr[0][i] == arr[j][i] ){
//                         noOfMatch += 1
//                 }
//             }

//             if(noOfMatch == remainingCheck){
//                 matchStr  += arr[0][i]
//             }else{
//                 break
//             }

//         }
//         return matchStr.length >= 2? matchStr : "Not match!" ;
// }

// console.log(getMatchStr(newArr))



// console.log("Global - this >",this)

// function firstFunc() {
//     console.log("Function - ",this);  // Logs 'global' in Node.js (CommonJS)

//     (() => {
//         console.log("this ARROW" , this);  // Inherits 'global'
//     })();
// }
// firstFunc();


// console.log("Global - this >", this);

// let object = {
//     name :"rajs",
// ourFunc : function firstFunc() {
//     console.log("Function - ", this.name);  

//     (() => {
//         console.log("this ARROW", this.name); 
//     })();
// }
// }

// object.ourFunc();

// function outerFunc(){
// let name  = "raaja"
// function firstFunc() {
//     console.log("Function - ", this.name);  

//     (() => {
//         console.log("this ARROW", this.name); 
//     })();

// }
// firstFunc()
// }

// outerFunc()


// var testArrowFunc = {
//     name:'abc',
//     foo:() =>{
//         console.log(this.name) 
//     }
// }

// var output = testArrowFunc.foo;
// output(); 
// testArrowFunc.foo();


// var testFunc = {
//     name: 'abc',
//     foo: function(){
//         console.log(this.name) 
//     }
// }


// testFunc.foo();

// let declaredToVar = testFunc.foo;

// declaredToVar(); 

// console.log(0.1 + 0.2 ) // false becouse this generate calculation and \/

// console.log("FIRST")
// setTimeout(() => {
//     console.log("SECOND")
// });


// // promise & queueMicrotask both treated as Micro task!
// queueMicrotask(()=>{
//     console.log("THIRD")
// })
// Promise.resolve("sachin").then((value)=> console.log("success!" ,value))


// function* generetorFunc(){
//     yield 1
//     yield 2
//     yield 3
//     yield 4
//     yield 5
// }

// const newGen = generetorFunc()

// console.log(newGen.next())
// console.log(newGen.return())
// console.log(newGen.throw())


// console.log("first")

// console.log("second")

// //asynchronous  means everything print after one by one 
// //.then if we used then this will create promise and give to web api!
// new Promise((resolve,reject)=>{
//         console.log("third!") // so this will work asynchronous!
// }) 

// console.log('fourth')




// async function async1(){
//     console.log("async1 start"); //2
//     await async2(); //stop here and go to promises
//     console.log("async1 end") //4
// }

// async function async2() {
//     console.log("async2")//3
// }

// console.log("script start") //1

// setTimeout(function(){
//     console.log("setTimeout")
// },0) //8

// async1();

// new Promise(function (resolve){
//     console.log("promise1"); //5
//     resolve();
// }).then(function (){
//     console.log("promise2") //7
// })

// console.log("script end"); //6



// new Promise(function (resolve,reject){
//     setTimeout(function (){
//         resolve("Promise")
//     },1000)
// }).then(function (result) {
//     console.log(result)
// }) 

// setTimeout(callback,2000);

// setTimeout(function(){
//     console.log("setTimeout()");

// },2000)

// function callback(){
//     console.log("Callback")
// }

// process.nextTick(function (){
//     console.log("process.nextTick()")
// })

// // process.nextTick()
// // Promise 
// // callback
// // setTimeout()


// const obj  = {
//     name: "Billy",
//     sing : function(){
//         this.age = "20";
//         console.log("a",this); //age = 20;
//          class anotherFunction {
//             constructor() {
//                 this.age = "30";
//                 console.log("b", this); // age = 30;
//             }
//         };
//         anotherFunction();
//     }
// }

// obj.sing();

// let a = 5;
// let b = a++ 
// console.log("a",a)
// console.log("b",b)



// const s = {
//     hello : 'sri',
//     34:undefined,
//     1:"HELLO",
//     2:"SSS"
// };
// s[-4] = 'mee'; //if not in object then this will automatically add object inside that!
// s['assign'] = "world"; //also same happen here!

// console.log("S",s)//

//Object.freeze()  // freeze location and reference // of both
// in case if we assign object to other variable still that will not able to update the variable!

// let obj = {
//     name :"sachin",
//     age: 23,
//     add : ["a","b","c","d"]
// }

// let newObj =  obj;

    //freezing anyone that not effect differently both reference same and same location will freeze!
    // Object.freeze(newObj)

//     newObj.age = 34
// // not will change becouse both are referencing to same location and location & reference freezed!
// console.log("newObj",obj)
// console.log("newObj",newObj)


// try{
//     //try will run in any case if I get any issue or error then this will throw error  
//     // and move to catch block then goes to finally!!!
//     console.log("try run") //this will run!
//     throw new Error("something went wrong!") // from here code will not run and go to catch block!
// }catch{
//     console.log("Error")
// }finally{
// console.log('finalY')
// }



// function abc(){
//     console.log("1")
// };
// // abc() // 3

// function abc(){
//     console.log("2")
// }

// function abc(){
//     console.log("3")
// }

// let person = {
//     name :"sels",
//     name :"rwsjje" //this will overrite  privious  name with this new name!
// }

// console.log(person.name) //


// console.log(true + "4") // true4
// console.log(true + 1) // then this will convert this to number!

// let targetObj = {
//     name: "first!",
//     last : "second"
// }
// let latestObj = Object.assign({},targetObj);

// console.log(latestObj)

// // both are converted to string!
// //thats why 
// console.log([1,2] + [3,4])  
// //1,2 + 3,4
// // 1,23,4

// console.log({a:"rs",b:"jjp"} + {a:"rs",b:"jjp"})
//     //both convert to tries to object to string but it covert to "ObjectObject"
// thats why this is showing [ObjectObject][ObjectObject]
//means array convert to string 1,2, but object give [objectobject]


// let arr1 = [1,2,3];
// let arr2 = arr1;

// arr2.push(4); //anything changing in referece that will update both becouse of reference!

// console.log(arr1);
// console.log(arr2);


// let num = "j";
// console.log(Number.isInteger(num));

// if(num % 1 === 0){
//    console.log("interger")
// }else{
//    console.log("not integer")
// }



// array method also have concate method!
// console.log([2,4,5,3,4,2].concat([3,4,3,23,3,23,3,4,2]))

//STRING METHODS 

// let str = "firstName";
// repeat // repeat it self given time not inside string!
// console.log(str.repeat(4))
// let str = "fiersteNamie";
// console.log(str[0])

// // this will give charcode of the the string!
// console.log(str.charCodeAt(4)) 

// // get code from backside start from 1,2,3,4,5,,
// ///from front start from 0,1,2,3,4
// console.log(str.at(2))//r
// console.log(str.at(-2))// m

// //concate all method and create a common string!
// console.log(str.concat("raaaj","maasj","eeeress"))

// console.log(str.includes("f")); // true //if value presedn else false!

// if not available this will return false
// else if present then return index of that variable!
//Case senstive "n" will fasle "N" will true
// console.log(str.indexOf("n")) //-1

//if two same string are available then 
// this will return last position value's index!
// console.log(str.lastIndexOf(("i"))) //8 last time match

//repeat multiple times whole string not any specific string
// below code repeat itself three times!
// console.log(str.repeat(3)) //firstNamiefirstNamiefirstNamie


//this will replace only one value that matched
// console.log(str.replace("e","k")) //fikrsteNamie
//but this will update whole anywhere value matched with that!
// console.log(str.replaceAll("e","k")) //fikrstkNamik

// let str = "fiersteNamie";
// console.log(str.slice(-10,-8))

//negative will not not work here
// console.log(str.substring(-10,-3))


// slice will work for negative values for array and string
// negative start from -1 ...

// console.log([1,2,4,5,2,3,5].slice(1,-2))

//trim only start and last index only!
// console.log(" se l ec te d ".trim())

//also have trim start and trim end  for only delete spaces from specific area



