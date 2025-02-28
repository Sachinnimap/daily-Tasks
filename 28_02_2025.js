
// // function getSecond(arr){
// //     let first = -Infinity;
// //     let second = -Infinity 

// //     for(let i = 0; i<=arr.length ;i++){
// //         // console.log(arr[i])
// //         if(arr[i] > first){
// //             second = first
// //             first = arr[i]
// //         }else if (arr[i]> second && arr[i] !== first){
// //             second = arr[i]
// //         }
// //     }
// //     return second
// // }

// // console.log(getSecond([3,5,2,5,2,4,3,8,4,3,8,3,7]))


// // function getAnagram(str1,str2){
// //         if(str1.length !== str2.length){
// //             return false;
// //         }
// //         let objVal = {}

// //         for(let char of str1){
// //             if(objVal[char]){
// //                 objVal[char] += 1
// //             }else{
// //                 objVal[char]  = 1
// //             }
// //         }

// //         for(let char  of str2){
// //             if(objVal[char]){
// //                 objVal[char] -= 1
// //             }else{
// //                 return false;
// //             }
// //         }

// //         return true;
// // }

// // console.log(getAnagram("listen2", "silent3"))

// //  function getMissingElement (arr){
// //     let sortVal = arr.sort()
// //     // console.log(sortVal)/
// //     let missVal = -Infinity
// //     let privousNum = undefined;
// //     for(let i = 0; i<sortVal.length; i++){
// //         if(privousNum !== undefined && privousNum !== sortVal[i]-1){
// //             return privousNum + 1
// //         }else{
// //             console.log(privousNum)
// //             privousNum = sortVal[i]
// //         }
// //     }

// //     return true;
// //  }

// //  console.log(getMissingElement([3,4,5,6,2,4,2,5,4,9]))

// // function getFabonacciSeries (num){
// //     let number = [0,1]
// //         for(let i=2; i<num; i++){
// //             number.push(number[i-1] + number[i - 2])
// //         }

// //         return number
// // }

// // console.log(getFabonacciSeries(10))




// // function squareRootNewton(n, precision = 0.00001) {
// //     let guess = n; // Initial guess

// //     while (Math.abs(guess * guess - n) > precision) { // Stop when error is small
// //         guess = (guess + n / guess) / 2; // Apply Newton’s formula
// //     }

// //     return guess;
// // }

// // console.log(squareRootNewton(24));

// // function getSqrtWithNewtonLaw (num){
// //     let latestGuess = num;
// //     while(Math.abs((latestGuess * latestGuess - num)) > 0.01){
// //          latestGuess = (latestGuess  + num/latestGuess)/2 
// //     }
// //     return latestGuess
// // }

// // console.log(getSqrtWithNewtonLaw(25))



// // function  getSQRT (num){
// //     let guess = num;
// //         console.log('run')
// //     while(Math.abs((guess * guess - num)) > 0.01){
// //             guess = (guess + num/guess)/2
// //     }
// //     return guess;
// // }

// // console.log(getSQRT(25))


// // let newArr = [80, 60, 10, 50, 30, 100, 0, 50]

// // function possibleSum(num){
// //     let newArr = [80, 60, 10, 50, 30, 100, 0,40, 50]
// //     let pairs = []
// //     for(let i=0; i<newArr.length;i++){
// //         for(let j = i+1; j<newArr.length; j++){
// //             if(newArr[i] + newArr[j] === num && j !== i){
// //                 pairs.push([newArr[i],newArr[j]])
// //             }
// //         }
// //     }
// //     return pairs;
// // }

// // console.log(possibleSum(100))

// // function getAnagram(str1,str2){
// //     let strObj = {}
// //     for(let i =0; i<str1.length; i++){
// //         if(strObj[str1[i]]){
// //             strObj[str1[i]] += 1
// //         }else{
// //             strObj[str1[i]] = 1
// //         }
// //     }
// //     for(let j=0; j<str2.length; j++){
// //         if(!strObj[str2[j]]){
// //             return false;
// //         }
// //         strObj[str2[j]]--
// //     }
// //     return true;
// // }
// // console.log(getAnagram("listeds22", "silent22"))


// // function getListAnagram(usrArr){
// //     let arr = usrArr;
// // let latestArr = []
// //     for(let i = 0; i<arr.length; i++){
// //         let newArr = []
// //         if(!latestArr.includes(arr[i])){
// //             newArr.push(arr[i])
// //         }
// //          for(let j =i+1; j<arr.length ; j++){
// //             if(getAnagram(arr[i],arr[j])){
// //                 newArr.push(arr[j])
// //                 arr.splice(j,1)
// //             }
// //          }
// //          latestArr.push(newArr)
// //     }
// //     return latestArr;
// // }
// // console.log(getListAnagram(["eat","tea","tan","ate","nat","bat"]))




// function getPrimNums(num){
//         var total = 0
//         let count = 0
//         let number = 2
//         while(count < num){
//             if(getPrimeNumber(number)){
//                  total += number * number
//                 count++
//             }
//             number++;
//         }
//         return total;
// }
// console.log(getPrimNums(4))


// function getPrimeNumber(num){

//     for(let i = 2; i<num; i++){
//             if(num % i == 0){
//                 return false
//             }
//     }
    
//     return true
    
//     }   
    
// //     // console.log(getPrimeNumber(15))

// //     function isPrime(num) {
// //         if (num < 2) return false;
// //         for (let i = 2; i * i <= num; i++) {
// //             if (num % i === 0) return false;
// //         }
// //         return true;
// //     }

// //     console.log(isPrime(17.6))



// console.log('  dlj ld sj  '.trim())
// let obj = {nem : 'disl',ekljd: 'eslkd',eidils:"elelowei",eils:'edljd'}

// Object.seal(obj)
// obj.nem = 'sahcin'
// console.log(obj)


function possibleSum(num){
    let newArr = [80,40, 60, 10, 50, 30, 100, 0,40, 50]
    let pairs = []
    for(let i=0; i<newArr.length;i++){

        for(let j = i+1; j<newArr.length; j++){
            if(newArr[i] + newArr[j] === num && j !== i){
                pairs.push([newArr[i],newArr[j]])
            }
        }
    }
    return pairs;
}

console.log(possibleSum(100))