
// setTimeout(() => {
//     flag = false;
// },1000) 
// while(flag){
//     console.log("Does it execute?")
//     break
// }
// let count = 1;
// while (count <= 5) {
//     console.log("Count:", count);
//     count++; // Increment count to avoid infinite loop
// }

// function splitString(str, space ){
//     let inArr = []
//     let temp = ""
//     for(let i = 0 ; i<str.length; i++){
//         // if(str[i] === space){
//             // if(temp !== ""){
//                 inArr.push(str[i]);
//                 // temp = ""
//             // }
//         // }else{
//         //     temp += str[i]
//         // }
//     // }
//     // if(temp  !== ""){
//         // inArr.push(temp)
//     // }
//     }
//     console.log(inArr)
// }

// splitString('soesoiedlhdds', "")

//  function upperFirst(data){
//    let newWord = data.split(" ").map((word) => word.charAt(0).toUpperCase() + word.substring(1));
//       return  newWord.join(" ")
      
//   }
//   console.log("smart".substring(3))

//   console.log(upperFirst('sachin you are not too smart'))

// function foo2()
// {
//     {
//         bar: "hello"
//     };
//   return foo2
// }
// console.log(foo2()()());

// let obj1 = {na3me: "reiyuyajjs"}
// let obj2 = {name : 'reajjs'}
// let arr1 = [3,4,5,3,6,7]
// let arr2 = [3,4,5,3,6,7]


// console.log(obj1 == String(obj2))
// console.log(arr1 == String(arr2))

//true 1 false 0

// console.log(0 || (1 && 2) || 3) 
//3

// let a = 10;
// let b = 500;
// let u = 57;
// let p=90;
// console.log(  (b && 100)  || 76); 

// let a = 10;
// let b = 500;
// let u = 3;
// let p=5;
// console.log(  u*u/2); 
// let result =   12*2/2 ;
// console.log(3/4)
// console.log(0.75 * 3)
// console.log(result);

// let a = 10;
// let b = 500;
// let u = 2;
// let p=5;
// console.log( u+  u*u/p + 3*5 - 4/2); //2.8
// let result =  2 +10 / 5 * 2;
// console.log(result); //6
// console.log('5' + -'2');
// console.log('5' + 10 - 5);

// console.log(('10' * '2') === (true + true + true + true + true)); // false
// console.log('3' + 2 * 2 - '1'); //33

// console.log(('3' - '2' + '5') * true); //-23 //15


// let x = true == 1;//1
// let y = '1' == 1;//1
// let z = '1' === 1; //0
// console.log(x + y + z);


// let a = '5';
// let b = 5;
// let c = false;
// console.log(a + b - c); //55

// console.log(10 == '10' && '10' - 1 === 9); // true

// console.log(true + false - '1' + '2');//02
// console.log('10' - 2 + '5'); //85

// console.log("1 && 2 = "+(1 && 2)) //1 && 2 = 2
// console.log( "A" - "B" + "2"); //NaN2
// console.log( "A" - "B" + "2");

// console.log("1" +  -"1" + "2"); //1-12
// let newVal = "1"  - "2" //1
// console.log( newVal)
// console.log(typeof NaN)

console.log(global)


// console.log(__dirname)
console.log(__filename)// give file name 

//default module already declared in that
 
console.log(module) //detail about modeule
console.log(global.setTimeout((()=>{
        console.log("settimeout in NODE")
})))

console.log(global.setInterval)
console.log(global.console.log())

function firstFunc(){

}

function secondFunc(){

}

module.exports.firstFunc = firstFunc;
module.exports = {firstFunc,secondFunc}

