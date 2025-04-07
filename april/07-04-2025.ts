// let fistNum :number = 43;
// let firstStr :string = 'sachin';
// let firstBool :boolean = true;
// let  firstArr :number [] = [1,2,3,4] //  given number so thats why all values should be number!


// //TUPLES ------- same length as given in tuple condition!
// //this is tuple!!!
// let firstTuples : [number,string,boolean] = [2,'ramesh',true];

// // enum
// //start for 0 value from first - automatically
// //if we given first value 1 then all value change as per first 
// //same as anywhere if value changed that  will change all values after that!

// enum firstEnum { first ,second = 10, third,fourth}

// console.log("Tuple!", firstTuples)
// console.log("enum1",firstEnum.first)
// console.log('enum2',firstEnum.second)
// console.log('enum3',firstEnum.third)
// console.log("enum4",firstEnum.fourth)



// function firstFunc () :number{
//     return 30
// }

// let firstObj : {
//     name: string,
//     gender :string,
//     age:number,
//     isVeg : boolean
// } = {
//     name :'sachin',
//     gender : "male",
//     age : 24,
//     isVeg : false
// };

// console.log("OBJECT",firstObj)
// console.log("GetAGe",firstObj.age)


// let a: number = 100;
// let b:string = 'Coffee';
// let c:boolean[] = [true, false, false];
// // let d:{age:number} = {age: number};
// let e:number[] = [3];
// let f; //any
// let g:[] = [];

// let song: {
//     title: string,
//     releaseYear: number
//     } = { title: 'My song',releaseYear :30 };

//     let prices = ['wq',true, 200, 300];
// prices[0] = '$100';''

// _________________________________________________________________________________

//TYPE ALIASES >>>>>>>>>>>>

// type Employee = {
//     name: string,
//     email: string,
//     gender: string,
//     isVeg : boolean,
//     phone : number,
//     retire : (date: Date)=> number;
// } 

// let FirstEmployee : Employee = {
//     name:'sachin',
//     email :"sachin@gmail.com",
//     gender : "male",
//     isVeg : false,
//     phone : 93939383,
//     retire(date) {
//         console.log(date)
//         return 939393939393093
//     },  
// }

// console.log("FirstEmployee!",FirstEmployee.retire(new Date(Date.now())))

// ___________________________________________________________________________________________________________

// //UNION TYPES >>>>>>>>>>>>>
// function firstFunc(weight: number|string): number{

//     // weight.            // show methods only which are common in both number & string!

//     if(typeof weight === "number"){
//         // weight.  //show all methods of number becouse now this is number 
//     }else{
//         // weight. // all string methods method 
//     }

//     return 44
// }
// ______________________________________________________________________

// // LITERAL TYPES >>>>>>>>>>>>>>
//  type quantity = 50 | 70 | 100

//  let currentValue : quantity = 50;

//  console.log("currentValue:- " , currentValue)

// _________________________________________________________

// Nullable TYPES  >>>>>>>>>>>>>>
// function greet(name:string | null | undefined){
//     console.log(name?.toUpperCase()) // undefined!
// }

// greet(undefined)

// _____________________________________________

//OPTIONAL chaining!
//console.log(customer?.birthday?.getFullYear())

// ____________________________________________________


type User = {
    name: string,
    age: number,
    occupation?: string  //? become optional
}

// let users = [
//     {
//         name: 'John Smith',
//         age: 30,
//         occupation: 'Software engineer'
//     },
//     {
//         name: 'Kate Müller',
//         age: 28
//     } //becouse 'occupation' option not need to write here!
// ];

// let users: User[] = [
//     {
//         name: "John Smith",
//         age: 30,
//         occupation: 'Software engineer'
//     }, {
//         name: 'Kate Müller',
//         age: 28,
//         // occupation: null
//     }
// ]


//Birds fly. Fish swim. A Pet can be a Bird or Fish. Use type aliases to represent these

// type birds = {
//         fly : boolean
// }

// type fish = {
//     swim : boolean
// }

// type pet = birds | fish



//Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”, etc

// type days = 'monday' |  'tuesday'| 'wednesday'|'thursday'|'friday'|'saturday'|'sunday!'

// let dayName :days = "thursday"
// console.log("DAY",dayName)

//     type FirstUser = {
//         address : {
//             street : string
//         }
//     }

//     function getUser (userData :FirstUser) {
//         return  userData;
//     }

// let user = getUser();
// console.log(user && user?.address ? user.address.street : undefined);

// let x = foo !== null && foo !== undefined ? foo : bar();


// let value: string = 'a';
// console.log(value.toUpperCase());

// class Account {
//     readonly id : number; //readonly we cannot update that value
//     owner :string;
//    private balance : number;
//     address?:string; //optional because question mark added "?"

//     constructor(id:number,owner :string,balance :number){
//         this.id = id;
//         this.owner = owner;
//         this.balance = balance
//     }

//     deposit(amount :number):number{
//        if(amount <=0)
//         throw new Error("Invalid request!!")
//        else
//        this.balance += amount;
//         return this.balance;
//     }

//     withdraw(amount :number):number{
//         if(amount <= 0 || amount > this.balance)
//            throw new Error("Invalid withrow amount!!")
//         else
//             this.balance -= amount;
//             return this.balance
//     }
// }

// let firstAccount = new Account(1,'sachin',20)
// console.log(firstAccount.balance = 300) // becouse balance is private value so we can  access only inside account class!

// console.log(firstAccount.withdraw(20))

// console.log(firstAccount instanceof Account);
// console.log(firstAccount.balance = )



// SORTCUT to write above class?


class Account{
    constructor(private id:number, public owner:string, private balance:number){
       this.id = id;
       this.owner  = owner;
       this.balance = balance
    }
    deposit(amount :number):number{
               if(amount <=0)
                throw new Error("Invalid request!!")
               else
               this.balance += amount;
                return this.balance;
            }
        
            withdraw(amount :number):number{
                if(amount <= 0 || amount > this.balance)
                   throw new Error("Invalid withrow amount!!")
                else
                    this.balance -= amount;
                    return this.balance
            }
}


let firstAccount = new Account(1,'sachin',20)

console.log("FIRSTACOUNT",firstAccount)