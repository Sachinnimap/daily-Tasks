
// let newObj = {
//     username: 'sachin',
//     userEmail : "sachin@gmail.com",
//     role : "developer",
//     handleRole : function (defaultUsername,defaultrole,defaultEmail){
//         console.log(`Hi, I am ${this.username??defaultUsername} as ${this.role??defaultrole} and my email is ${this.userEmail??defaultEmail} `)
//     }
// }

// let secObj = {
//     username : null,
//     userEmail : null,
//     role: undefined,
    // role : "engineer"
// }

/* // newObj.handleRole.call(secObj,'sachin','elkd','myemail')



// newObj.handleRole.apply(secObj,['sachin','elkd','myemail'])
 newObj.handleRole();
//  but when we asign this function to variable now this will reference to the global object
// to solve this we use bind method....
let newVar =  newObj.handleRole; 
// newVar('jejeje','jejejejeje','jejejejejeje')
newVar();

// let firstObj  = newObj.handleRole.bind(secObj);

// firstObj('rjss','eeee','jjjjjj') */

// let firstObj = {role: 'sachindd'}
// const latestObj = {
//     username: "john",
//     password: "john123",
//     detail : {
//             role : "engineer",
//             location : 'idoeod',
//             handlerCheck: function () {
//                     console.log(`I'm ${this.username} and my role is ${this.role}`)
//             }
//     }
// }
// latestObj.detail.handlerCheck()


// let objVal = {
//         username : "raaje",
//         userEmail : "raajeEmail",
//         latestArr : ['eood','eodld','wsoel','mmsls','zwlwss','eselelsls'],
//         // this referece to handleFunc thats  why values are not accessible
//         handleFunc:  ()=> setTimeout(function(){ console.log(`I'm ${this.username} and mail is ${this.userEmail}`) },1000)
//         ,
//         hanldeArr : function(){
//             let allValue =latestArr.map((value,i)=>{
//                 this.latestArr[i] = {id:i+1, name:value}
//                 return {id:i+1, name:value}

//             })
//             console.log(allValue)
//         }
// }
// console.log(objVal.latestArr)
// objVal.handleFunc();
// objVal.hanldeArr()
// console.log(objVal.latestArr)


// let mainObj = {
//     username : "soels",
//     userEmail : 'soels@gmail.com',
//     childObj : {
//         customerName : "rahul",
//         customerAdd  :"trele",
//         fkpr{
//          arrFunc : ()=>{
//             console.log(`Customer Name : ${this.customerName} & UserName : ${this.username}`)
//          }
//         }
//     }
// }
// mainObj.childObj.arrFunc()

// function mysF (){

// {
//     let myName = 'sahin'
// }

// console.log(myName)
// }

// mysF()


// function Person(name, age) {
//     this.name = name;
//    this.age = age;
//    this.greet = function() {
//       console.log(`Hi, I'm ${this.name}`);
//     };
//   }
  
//   const alice = new Person("Alice", 25);
//   console.log(alice)
//   alice.greet();

//Constructor

// function Product({ name, price, isAvailableInStock, desc }){
//     this.name = name;
//     this.price = price;
//     this.isAvailableInStock = isAvailableInStock;
//     this.desc = desc;
// }
// class Product {
//     constructor({ name, price, isAvailableInStock, desc }) {
//         this.name = name;
//         this.price = price;
//         this.isAvailableInStock = isAvailableInStock;
//         this.desc = desc;
//     }
// }
// let productList = [];
    
// for(let i=1; i<=20; i++ ){
//     let newProduct = new Product({name:`product_${i}`,price:Math.round(Math.random()*1000),isAvailableInStock:i%2==0?true:false,desc:`${i} is to good to purchase`})
//     productList.push(newProduct);
// }

// console.log(productList);





// class Category{
//     constructor({categoryName,categoryAddress,productType}){
//         this.categoryName = categoryName,
//         this.categoryAddress = categoryAddress,
//         this.productType = productType
//     }
// }

// let createCategory = new Category({categoryName:"newCategory",categoryAddress:"thosejeek",productType:"oeldilesd"})

// console.log(createCategory)


// class Product{
//     #productId
//     constructor({prodId, prodName,prodPrice,prodDesc,prodIsVeg,prodCategory}){
//         this.#productId = prodId,
//         this.prodName = prodName,
//         this.prodPrice = prodPrice,
//         this.prodDesc = prodDesc,
//         this.prodIsVeg = prodIsVeg??false,
//         this.prodCategory = prodCategory
//     }
//          getProductDetails (){
//             console.log(this.#productId)
//         }
//         static async getMultiDaata(){
//             console.log(this.prodIsVeg)
//         }
// }
// // Product.getProductDetails() // if static only accessible by this keyword only
// Product.getMultiDaata();
// let createProd = new Product({prodId:2,prodName:"rice",prodDesc:"this is our produ",prodIsVeg:true,prodPrice:433, prodCategory:"ravi"})

// createProd.getProductDetails(); 


//     let ourObj = Object.create({
//         name:'sachin',
//         suurname: "ramdld",
//         role: "designd",
//          leld(){
//             console.log("1")
//          },
//         haled : ()=>{
//             console.log("2")
//         }
//     })
//   ourObj.leld();
//  ourObj.haled()

//  console.log(ourObj.name)
//  console.log({dlj:'dlkdj',dlek:'eljlkjd'})

// const obj =  {a:0,b:{c:5}}
// Object.freeze(obj)

// obj.b.c = 9; // only freeze own key not other obj "c" so c can be modify
// console.log(obj)

// const obj = {
//     newVal : "safind"
// }
// const obj2 = {
//     newVal : "safind",
//      sem2 : {name :"aaaa"}
// }
// let newObj = {...obj2};
// newObj.newVal = 'rjsjsj'
// obj2.sem2.name = 'first'

// console.log(Object.is(newObj,obj2)) //becouse of referece giving false 
// console.log(obj2,newObj)


// let latestObj = {
//     name: 'sachin'
// }
// let obj2 = {
//     eld : 'wwwwwww',
//     eild : "eeeeee",
//     awowo : "jjjjjj",
//     wle3ed : 'llllllll'
// }

// Object.assign(latestObj,obj2) //target , source

// console.log( Object.entries(obj2)) //return in array all the values/keys both

const fruits = [
    {name:"apples", quantity:300},
    {name:"bananas", quantity:500},
    {name:"oranges", quantity:200},
    {name:"kiwi", quantity:150}
  ];
  
  // Callback function to select low volumes 
  function myCallback({ quantity }) {
    return quantity > 200 ? "ok" : "low";
  }
  
  // Group by ok and low
  const result = Object.groupBy(fruits, myCallback);
  console.log(result)
  