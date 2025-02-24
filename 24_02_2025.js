// function getMultiply (x,y){
//     return x * y
// }

// function getAddition(x,y){
//     return x + y
// }

// function handleMethod(method, numberArr){
//     let latestNum = numberArr[0]
//     for(let i=1; i<numberArr.length; i++){
//         let result = method(latestNum,numberArr[i])
//         latestNum = result;
//     }

//     return latestNum;
// }

// console.log(handleMethod(getAddition(),[3,5,3,2,3,2]))
// console.log(handleMethod(getMultiply,[3,5,3,2,3,2]))

// console.log("null convert to 0",    2 - null)
// console.log("undefined convert to NaN", 2 - undefined )

/* 
function incrementHandler(){

    let number = 0;

    function addMoreFunc(){
        number ++
        console.log(number)
    }
    return addMoreFunc
}

// below incrementHandler run and completed execution but still remember "variable" "number"
// this is called clouser;
const HigherFunc =  incrementHandler(); 
 HigherFunc();//1
 HigherFunc();//2
 HigherFunc();//3
 HigherFunc();//4
 HigherFunc();//5
 HigherFunc();//6 */

/* 
 function multiplier (first){

    return function multiWith (second){
            return first * second
    }
 }

 let multiplierResp = multiplier(5)
  console.log(multiplierResp(4)) */


//   function arithmeticMethods(){
//         let value = 0;
//         return {
//             increment: ()=> ++value,
//             decrement: ()=> --value,
//             getCount: ()=> value
//         }
//   }

//   let getArithmeticMethod = arithmeticMethods();
//   console.log(getArithmeticMethod.increment())
//   console.log(getArithmeticMethod.increment())
//   console.log(getArithmeticMethod.increment())
//   console.log(getArithmeticMethod.increment())
//   console.log(getArithmeticMethod.increment())
//   console.log(getArithmeticMethod.increment())
//   console.log(getArithmeticMethod.decrement())
//   console.log(getArithmeticMethod.getCount());

// let username = 'John doe'
// return firstFunc();

// function firstFunc(){
//     console.log(username)
// }
// function secondFunc(){
// }

// console.log(callSecondFunc)
// const callSecondFunc = secondFunc();


// const person = {
//     username : "sachin",
//     greet(){}
// }

//  function getFirstLast (arr,num){
//        let first
//        let last;
//     for(let i = 0; i<=arr.length; i++){
//             if(arr[i] == num){
//                 if(first == undefined || first>=i){
//                     first = i
//                     last =i
//                 }else{
//                     last = i
//                 }
//             }
//     }
//     console.log(`first Index of ${num}  is ` ,first)
//     console.log(`last Index of ${num} is ` ,last)
// }

// getFirstLast([4,4,5,6,7,2,9,4,6,4,3,4,5,5,6,3,4,2],9)


/* let testObj = {
    username:"sachin",
    //no need key becouse ..function name will assign as key
    //also function key is not required inside object...
     newoneFunc (){ 
        return "succes function is working"
    },
   
}

console.log(testObj.newoneFunc());
console.log(testObj)

 */


// let employeeObj = {
//     empName :'john',
//     surName : "doe",
//     role : "engineer",
//      getDetail(){
//         console.log(`Hello, I am ${this.empName} ${this.surName} and my role is ${this.role} `)
//      }
// }

// let teacherObj = {
//     empName: "sachin",
//     surName: "ram",
//     role : "software developer"
// }

// employeeObj.getDetail.call(employeeObj)

// aabbbcdeccbbaa

// function getFrequency(str){
//     let strInArr = str.split("")
//     let ourResult = {}
//     let remainingArr =  strInArr;
//     for(let i=0; i<strInArr.lengh; i++){
//         let matchVal = ""
//         for(let j=0;j<strInArr.lengh;j++){
//             if(strInArr[i] == strInArr[j]){
//                     matchVal += strInArr[j]
//             }else{
//                 remainingArr.splice(i)
//                 return
//             }
//         }
//     }
// }

// getFrequency("aaabbccssaaadddekaafkkwiwiii");




 // write a sum function such that by calling function both calls should
 //  give 6 as a result


//  function sum(firstNum,secondNumber){
//     if(secondNumber){
//         return firstNum + secondNumber
//     }else{
//         return (secondNum)=> firstNum + secondNum; 
//     }
//  }

//  console.log(sum(1, 5));
//  console.log(sum(1)(5));


// modify this code so that result will print 1 to 9 with the gap of 1 second

/*async function waitAndPrint(){
 for(let i=1;  i<10;  i++) {
 await new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log(i)
        resolve()
    }, 1000)
})}
}
 waitAndPrint()

 console.log(true + false - '1' + '2');

 */


function canDevide(arr){
    let allObj = {}
        for(let i =0; i<arr.length; i++){
            let checkObj = Object.keys(allObj).find((a)=> a == arr[i])
            
                if(!checkObj){
                    allObj[arr[i]] = 1
                }else{
                    allObj[arr[i]] = allObj[arr[i]] + 1
                }
        }
        let canBeDevide =  Object.values(allObj).find((val) => val > 2)
        if(canBeDevide){
            return false;
        }else{
            return true
        }
}   

console.log(canDevide([1,1,1,2,2,3,3,4,4,4]))