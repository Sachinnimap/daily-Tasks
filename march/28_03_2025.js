

// function outer(b){ 
//   function inner(){
//     console.log(a, b); 
//   }
//   let a =10;
//   return inner;
// }

// var close = outer("Hi Closures");  
// close(); 
//10 Hi Closures // becouse be also part or outer function's environment!



// function outest(){
//   var c = 12; 
//   function outer(b){ 
//     function inner(){
//       console.log(a, b, c); 
//     }
//     let a =10;
//     return inner;
//   }
//   return outer;
// }


// var close = outest()("Hi Closures");
// close();


// function outest(){
//   var c = 12; 
//   function outer(b){ 
//     function inner(){
//       console.log(a, b, c); 
//     }
//     let a = 10;
//     return inner;
//   }
//   return outer;
// }

// let a =100;
// var close = outest()("Hi Closures"); 
// close();



// function outest(){
//   var c = 12; 
//   function outer(b){ 
//     function inner(){
//       console.log(a, b, c);
//     }
//     return inner;
//   }
//   return outer;
// }

// let a =100;
// // Passing argument here 
// var close = outest()("Hi Closures"); 
// close(); 



// function outest(){
//   var c = 12; 
//   function outer(b){ 
//     function inner(){
//       console.log(a, b, c);
//     }
//     return inner;
//   }
//   return outer;
// }

// var close = outest()("Hi Closures");
// close(); 


// function a(){
//   var x = 10;
//   return function b(){
//    console.log(x);
//   }
// }
// var y = a();
//

// function x(){
//   var a = 10;
//   function y(){
//     console.log(a);  //10
//   }
//   y();
// }
// x();

// function x(){
//   var a = 10;
//   function y(){
//     console.log(a);
//   }
//   return y;
// }
// var z = x();
// console.log(z);


// function x(){
//   var a = 10;
//   function y(){
//     console.log(a);
//   }
//   return y;
// }
// var z = x();
// console.log(z); //function 
// z();//10


// function x(){
//   var a = 10;
//   function y(){
//     console.log(a);
//   }
//   a = 100;
//   return y;
// }
// var z = x();
// console.log(z);
// z();


// var a = 10;
// function y(){
//   console.log(a);
// }
// a = 100;

// y()


// function z(){
//   var b = 20;
//   function x(){
//     var a = 10;
//     function y(){
//       console.log(a,b);
//     }
//     y(); 
//   }
//   x(); 
// }
// z();


// function a(){
//   console.log(b);
// }
// var b = 10;
// a();
//10


// function a(){
//   var b = 10;
//   c();
//   function c(){
     
//   }
// }
// a();
// console.log(b); //b is not defined!!
// function a(){
//   var b = 10;
//   c();
//   function c(){
     
//   }
// }
// a();
// console.log(b); 

// function a(){
//   var b = 10;
//   c();
//   function c(){
//       console.log(b);
//   }
// }

// a();//10
// console.log(b); // b is not defined!

// function a(){
//   c();
//   function c(){
//       console.log(b);
//   }
// }
// a(); //10 // if we put top then this will print "undefined!"
// var b = 10;
// console.log(b);//10

// function a(){
//   c();
//   function c(){
//       console.log(b);
//   }
// }
// a();//b is not defined!
// var a = 10;
// console.log(a);


// so if we declared block scope{} a variable and then  if if block run then only 
//variable will be declare else this will give error!

// if(false){
//   // Compound Statement
//   var a = 10;
//   console.log(a);
//   }

//   console.log("a",a)

// {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   console.log(a)
//   console.log(b)
//   console.log(c)
//   }


// {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   console.log("Inside Block a= ",a);//10
//   console.log("Inside Block b= ",b);//20
//   console.log("Inside Block c= ",c); //30
//   }
//   console.log("Outside Block a= ",a);
//   console.log("Outside Block b= ",b);// be
//   console.log("Outside Block c= ",c);


// var a = 12;
// {
// var a = 10;
// let b = 20;
// const c = 30;
// console.log("Inside Block a= ",a); // 10
// console.log("Inside Block b= ",b); // 20
// console.log("Inside Block c= ",c);//30
// }

//becouse var is cosidered global variable thats why we can acess that 
//becouse var can be declare as mulitple times then this will not going to create any issue!
// var a = 3
// var a = 4 // both are going to work! lastone will overrite previous 3 value with four!
// console.log("outside",a) //10 

var a = 12;
{
var a = 10;
let b = 20;
const c = 30;
console.log("Inside Block a= ",a); //a
console.log("Inside Block b= ",b);//20
console.log("Inside Block c= ",c);//30
}
console.log("Outside Block a= ",a);//