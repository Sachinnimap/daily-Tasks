/* $ and _ can be used as variable */
    let _ = 'scahin'  
    console.log($)


/* starting with digit and with hiphen - cannot use in variable declaration */   
    // let 3dl = 'neewww' //Error
    // let dls-dld  =  'ddddddddd' //Error

/* Case metter */    
    let apple = 'newwww'

            /* task */
            let admin 
            let name 
            name = "john"
            admin = name
            console.log(admin)  
            
/* Hoisting */

function hoist(){
    a ='sachin'
    var  b = 'rajj'
}
hoist()

console.log(a)
console.log(b)

c = 10
console.log(c)

/*  becouse a is not defined with any declaration so
 this will not assign any memory in memory creation phase
 thats why console "a" not found a variable give error,
 BUT in execution becouse a is declared then memory allocat to this variable ; 
 */
 console.log(a) 
     a = 10; 
     console.log(a)
    console.log(b)
    let b = 'sachin'



function getCircumference(radius) {
    console.log(circumference) //undefined  
    circumference = 27*radius*2;
    const PI = 22/7;
  }
  
  getCircumference(2)


funcDec()   //becouse in memory creation this created undefined
function funcDec(){
    console.log('function declarations....')
}

funcExpressing()   //this is also create undefined but becouse of temperal dead zone this will show error
var funcExpressing = function (){
        console.log('Function expression.......')
}

expression();//Ouput: TypeError: expression is not a function

var expression = function hoisting() {
  console.log('Will this work?');
};

var double = 22;

double = function (num) {
  return (num*2);
}
double()

console.log(typeof double);


var double ; //var

function double(num) {
  return (num*2);
}
console.log(typeof double);


/* 
questionsAsked in camel casing.
QuestionsAsked in Pascal casing.
questions_asked in snake casing.
 */
