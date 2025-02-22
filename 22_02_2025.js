
// arithmetic operations

// console.log(-3 + 4) // 1
// console.log(2**5) // 16
// console.log("33el" - 33) //0
 //NaN becouse this will once try to convert into number
 //  if not able then this will give error  - NaN not an number
//  console.log("33el" - 33)

// console.log((10-10)/0)// NaN
// console.log(10 - NaN)
// console.log(-10/0)
// console.log( 10 % 0) //NaN
// console.log((-10) ** 2)

//If null or undefined then only this give default
// console.log(null??'defaultValue')
// console.log(undefined?? "defaultUndefined")
// console.log(0??'undl')
// console.log("kj"??'deljd')
// console.log("")

// const greet = function sayHellow(){
//     return'function called';
// }

// console.log(greet())

// console.log(sayHellow())

//  async function handleAll (){
//         console.log("first")
//        let response =  await new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("second")
//         },1000)
//         resolve;
//         })
//         console.log(response)
//         console.log("third")
//  }

//  handleAll()
// {
//     firstObj :'doelslds'
// }
// let firstObj = 'firstNameWork'
//  const user = {
//     firstName  : "sachin",
//     lastName : "ram",
//     firstObj: 'iirlrld',
//     newObj : {
//         firstObj : "eolds",
//         secondObj : "oeldls",
//         thirdObj : ()=>{
//             console.log(this)
//         },
//         fourthObj : function forthObjFunc (){
//             console.log(this)
//         }
//     }
//  }
// user.newObj.thirdObj();
// user.newObj.fourthObj()


// let str = "aabbbcaabbaaa"

// function getOcc(str){
//      let latestStr = str.split("")
//     let strInArr = [];
//     let occVal = {};
//         for(let i=1; i<=latestStr.length ; i++){
//                 if( latestStr[i-1] == latestStr[i] ){
//                     strInArr.push(`${latestStr[i-1]}${latestStr[i]}`)
                        
//                 }

//         }
//         for(let j =0; j<strInArr.length;j++){
//             if(Object.keys(occVal).find((v)=> v == strInArr[j])){
//                      occVal[strInArr[j]] = occVal[strInArr[j]] + 1
//              }else{
//                      occVal[strInArr[j]] = 1
//                  }
//         }

//         console.log(strInArr)
//         console.log(occVal)
// }

// getOcc(str)

// function getOcc(str){
//     let strInArr = str.split("")
//     let occVal = {}
//         for(let i=0; i<strInArr.length ; i++){
//                 if(Object.keys(occVal).find((v)=> v == strInArr[i])){
//                     occVal[strInArr[i]] = occVal[strInArr[i]] + 1
//                 }else{
//                     occVal[strInArr[i]] = 1
//                 }
//         }
//         console.log(occVal)
// }

// getOcc(str)


//  function getFirstLast (arr,num){
//        let first
//        let last;
//     for(let i = 0; i<=arr.length; i++){
//             if(arr[i] == num){
//                 if(first == undefined || first>i){
//                     first = i
//                 }else{
//                     last = i
//                 }
//             }
//     }
//     console.log(`first Index of ${num}  is ` ,first)
//     console.log(`last Index of ${num} is ` ,last)
//  }  

//  getFirstLast([3,2,5,3,2,5,1,2,3,4,5,8,3],5)


// const newObj = {
//             firstName : "john",
//             secondName : "doe",
//             checkFunc  : function latest(){ 
//                 console.log("1")
//            return () => console.log(this.firstName)
            
//         }
// }

// newObj.checkFunc()

console.log(1%2)
function newFunc(n){
        for(let i = 0; i<5; i++){
            let newStr = ""
            let newNum = n;
                if(i % 2 == 0){
                    for(let p = 4; p>=0; p--){
                            newStr += `${newNum - p} `
                            // newNum = newNum-1;
                    }
                }else{
                    for(let k= 0; k<5-i; k++){
                        newStr += `${String.fromCharCode(65 + k)} `
                        newNum = newNum-1;
                }
                
               
            }
            console.log(newStr)
        }
}

newFunc(15)