// Revision JS

//this is called tuple where we already defined their type and length of array!

let firstTuple: [string,number,boolean,string] = ['',33,true,'']

// Enum is store constant values 

//default value 0
//if we given  string then we have to give all the values becouse that cant generate next value 

// enum ProductItem{
//   productName,
//   productPrice,
//   productDescription
// }

// let firstProductName = ProductItem.productName;

// console.log(firstProductName)

// let person :{
//   readonly id:number,
//   firstName:string,
//   lastName:string ,
//   getFullName : {};
// }  = {id:12,firstName:'john',lastName:'doe',getFullName:function (){
//  return this.firstName + " " + this.lastName
// }}
// person.firstName = 'sachin';
// console.log("person :-",person)
// console.log("GetFullName:- ", person.getFullName())


// interface Person{
//   id:number,
//   firstName:string,
//   lastName:string
// }


// let firstPerson:Person = {id:2,firstName:'john',lastName:'doe'}


// type role = 'user'| "admin" | 'super Admin';

// type Task = {
//     firstTask : string,
//     secondtask :string,
//     thirdTask  : string

// }

// type Person  =  { // Type or interface
//     id:number,
//     firstName :string,
//     lastName :string,
//     myrole : role, // type role we used
//     hobbies : string[],
//     someTask : Task,
//     getFullName : ()=> string;
// }

// let firstPerson : Person = {
//                 id : 231,
//                 firstName:'john',
//                 lastName :"doe",
//                 getFullName : function (){
//                   return this.firstName + ' ' + this.lastName;
//                 },
//                 myrole : "super Admin",
//                 hobbies : ['cric','foot','hocky'],
//                 someTask:  {
//                   firstTask : 'filesjt',
//                   secondtask : 'seonodo',
//                   thirdTask : 'thirdTask'
//               }
//             }



//we can add new properties to Person!
// interface Person {
//    isWorking : boolean;
// }           

// console.log("firstPerson:-" ,  firstPerson)

//but if we give type then we cannot add value to it
//we cannot do this in type need extend
// type Person{
//   isWorking : boolean;
// }

//all properties of person & new properties add to human means extended!
// interface Human extends Person {
//     isTravel : boolean
// }

//now here we can access all properties of person and human both
// let firstHuman : Human = {
        // ...Person ...Human
// }

//also extend TYPE but can not redeclare Person again

// type Human  = Person &  {
//     isReallyTravel : boolean
// }

// we can access all variables  in TYPE different becouse cannot chang once a Type declared!
// let firstHuman: Human = {
//   firstName: 'sachin',
//   isReallyTravel: true
// }


// type Disc = {
//   [key :string]  : string
// }

// let firstDisk : Disc = {
//   firstName :'firstNameMe',
//   secondName: 'secondNameMe',
//   thirdName : 'thirdNamMe',
//   fourthName: 'fourthNameMe'
// }

// console.log(firstDisk.firstName)


// type Role =  "admin"  | "editor" | "superAdmin";

// type Permission  = {
//      [key in Role] :  boolean;
// } 

// // here all the values are spread of Roles 
// let firstPerson : Permission  = {
//  superAdmin : true,
//   admin : false,
//   editor: true
// }

// console.log(firstPerson.superAdmin)
// firstPerson.admin = true //changable!
// console.log(firstPerson.admin)


// type cat = { type :"cat", meow: ()=>void}
// type dog = {type : 'dog', bark :()=> void}


// Union Types 
//means give flexiblity to write two or more different type of value to variable!

// let unionTypeValue: string | number;

// unionTypeValue = 'string'  //324  //means only string or number can be asssign to this  variable!



// Promise.resolve()
//   .then(() => {
//     return Promise.resolve('A');
//   })
//   .then((val) => {
//     console.log(val);
//     return 'B';
//   })
//   .then(console.log);

// Promise.resolve()
//   .then(() => {
//     return Promise.resolve('A');
//   })
//   .then((val) => {
//     console.log(val);
//     return 'B';
//   })
//   .then(console.log);


// Promise.resolve()
//   .then(() => {
//     return new Promise((resolve,reject)=>{setTimeout(()=>{ resolve('A') },5000)}) ;
//   })
//   .then((val) => {
//     console.log(val); 
//     return 'B';      
//   })
//   .then(console.log);

// let firstVariable =  new Promise((resolve,reject)=> {resolve('something')})
// console.log("firstVariable:-",firstVariable)

  // .then(() => {
  //   return {
  //     then: (resolve) => {
  //       console.log('thenable called');
  //       resolve('hi');
  //     },
  //     then : (resolve) =>{
  //       console.log("resolved!")
  //       // resolve('success')
  //     }
  //   };
  // })

  // .then((val) => {
  //   console.log('Got:', val);
  // });


  // Promise.resolve()
  // .then(() => {
  //   return {
  //     then: (resolve, reject) => {
  //       resolve({
  //         then: ((res) => {
  //           console.log(res)
  //           res('nested');
  //         })
  //       });
  //     }
  //   };
  // })
  // .then((val) => {
  //   console.log('Got:', val);
  // });


  // Promise.resolve('sync?').then((val) => {
  //   console.log('then:', val);
  // });
  // console.log('after then');


  // Promise.resolve('A')
  // .then((val) => {
  //   console.log(val); //A
  // })
  // .then((val) => {
  //   console.log('Next:', val); //undefined
  // });



  // Promise.resolve('X')
  // .then(() => {
  //   throw new Error('Oops');
  // })
  // .catch((err) => {
  //   console.log('Caught:', err.message); //Oops
  // });


  // Promise.reject('fail');

  // console.log("something")


  // Promise.resolve()
  // .then(() => {
  //   throw 'bad';
  // })
  // .then(() => {
  //   console.log('will not run');
  // })
  // .catch((err) => {
  //   console.log('Caught:', err); //bad
  // });


  // Promise.resolve('yes')
  // .finally((val) => {
  //   console.log('finally:', val); //undefined
  // })
  // .then((val) => {
  //   console.log('value:', val); //yes
  // });


  // async function test() {
  //   const x = await 42;
  //   console.log(x); // 42
  // }
  // test();

  // Promise.resolve('start')
  // .then(() => {
  //   return Promise.resolve('mid').then(() => {
  //     throw 'inner boom';
  //   });
  // })
  // .then(() => {
  //   console.log('never here');
  // })
  // .catch((err) => {
  //   console.log('Caught:', err);
  // });


  // new Promise((resolve) => {
  //   setTimeout(() => resolve('done'), 1000);
  // })
  //   .then(() => {
  //     throw '💀';
  //   });
  
  // setTimeout(() => {
  //   console.log('survived?');
  // }, 2000);


  // Promise.resolve('go')
  // .then(async () => {
  //   throw '⚠️ error';
  // })
  // .catch((e) => {
  //   console.log('Caught:', e);
  // });


  // new Promise((resolve, reject) => {
  //   resolve('first');
  //   console.log("something")
  //   setTimeout(()=>{
  //     console.log('setTimeout!')
  //   })
  //   console.log("after!")
  // })
  // .catch(console.error)
  // .then(console.log)


  // Promise.reject('oops')
  // .catch((e) => {
  //   console.log('recovering:', e);
  //   return 'recovered';
  // })
  // .then((val) => {
  //   console.log('after recovery:', val);
  // });


  // async function run() {
  //   asyncCall(); 
  //   console.log('done');
  // }
  
  // async function asyncCall() {
  //   await Promise.resolve();
  //   console.log('async finished');
  // }
  
  // run();


//   const controller = new AbortController();

// const fetchData = () => {
//   return new Promise((resolve, reject) => {
//     const id = setTimeout(() => resolve('done'), 1000);
//     controller.signal.addEventListener('abort', () => {
//       clearTimeout(id);
//       reject('aborted');
//     });
//   });
// };

// fetchData().catch(console.error);
// controller.abort();



// console.log('A');

// setTimeout(() => {
//   console.log('B');
// }, 0);

// Promise.resolve()
//   .then(() => {
//     console.log('C');
//   });

// console.log('D');


// const p = Promise.resolve('value');

// p.then((v) => console.log('1st then:', v))
// .then((v) => console.log('2nd then:', v));



// Promise.resolve()
//   .then(() => {
//     return Promise.resolve('A').then(() => {
//       return 'B';
//     });
//   })
//   .then((v) => {
//     console.log(v);
//   });


// Promise.reject('err')
//   .catch((e) => {
//     console.log('Caught:', e);
//     throw 'new err';
//   })
//   .catch((e) => {
//     console.log('Caught again:', e);
//   });



// async function test() {
//   return 'hello';
// }

// test()
//   .then((v) => {
//     console.log("v",v)
//     throw new Error('boom');
//   })
//   .catch((e) => {
//     console.log("e",e)
//     return 'safe';
//   })
//   .then((v) => {
//     console.log('Final:', v);
//   });


// Promise.resolve()
//   .then(() => {
//     return Promise.resolve('🧨');
//     // throw Promise.resolve('🧨');
//   })
//   .then((v)=> console.log("resolve",v))
//   .catch((e) => {
//     console.log('Caught:', e);
//   });


// async function test() {
//   await Promise.reject('fail');
//   console.log('still running?');
// }

// test().catch((e) => {
//   console.log('Caught:', e);
// });


// async function run() {
//   try {
//     Promise.reject('bad').catch((e) => {
//       console.log(1)
//       throw 'worse';
//     });
//   } catch (e) {
//     console.log('caught in try/catch');
//   }
// }
// run();




// for( var i =0; i < 3; i++) {
//    { 
//    let n = i
//   setTimeout(function () {
//         console.log();
    
//   }, 100 , n); 
//    }
// }

