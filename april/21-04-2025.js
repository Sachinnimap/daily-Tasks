

// 21-04-2025

// TYPE
// type FirstNameType = string;

// let firstName : FirstNameType = 'this is firstName';

// console.log("firstName :-",firstName)

// type PersonObjType  = {
//         firstName: string,
//         lastName : string,
//         isdev? : boolean, //became optional
//         age : number  //= 20  // we cnt give default value! to TYPE!
// } 

// let firstPerson : PersonObjType ={
//     firstName : 'john',
//     lastName : 'doe',
//     isdev :false,
//     age  :23
// }

//giving options and  OR type operationg 
// use user can put more than one type value to a variable that called UNION! 
// type firstNameType = string  | boolean; 

// let firstName:firstNameType  = "string" ;


// type FirstProductTypes = {
//         productName : string,
//         productDesc : string,
//         productPrice :number,
//         productPlace  :string,
//         isReadyToDeliver  : boolean
// }

// type SecondProductTypes  = {
//         productDetails  : string,
//         productPlatform : string,
//         isVeg : boolean
// }


// let createFirstProduct : FirstProductTypes | SecondProductTypes = {
//     isVeg  :true,
//     productPlatform : 'Online',
//     productDetails : 'something'
// }


// type ProductPriceType  = 50 | 100 | 150;

// //productPrice can only be 50 100 150 not anything else we can assing;
// //Type Literals means we already assing some value to this 
// let  productPrice : ProductPriceType  = 150;

//so here we can assign NULL values to this!
// type ProducNameTypes  = string | null; 
// let productName : ProducNameTypes = 'sachin'

// productName = null;
// console.log("productName",productName)

//  function handleProductDetails(firstName : string | null |undefined) : string {

//     return 'handler is working!!'
//  }

//  console.log(handleProductDetails(undefined))


// type FirstObj =  {
//     objName: string
// }

// function handleFirstObj (name : string  | null  | undefined) : FirstObj | null{
//         return name ? {objName: name.toUpperCase()} : null
// }

// let getValue = handleFirstObj('something')?.objName;

// console.log("GetValue :-",getValue)


//so if we declared using "UNKNOWN" then we can assing any type of value!
//issue is we cannot assing  this value to any declared type variable
//cannot use and method or property on this declared variable!
// type firstNameType = unknown;
// let firstName :firstNameType = true 


// type FirstValueType  =  never;

// let firstValue : FirstValueType =  ;

// console.log("firstValue",firstValue)


// class Person{
//     private  _personId : number;
//        private readonly firstName : string;
//         lastName : string;
//         isVeg? : boolean;


//         constructor( _personId :number, firstName:string,lastName :string, isVeg? : boolean){
//             this._personId = _personId,
//             this.firstName  = firstName,
//             this.lastName  = lastName,
//             this.isVeg  = isVeg
//         }

//        get personId(){
//             return this._personId
//         }
//         set personId(id:number){
//              this._personId = id;
//         }

//         getFullName():string{
//             return this.firstName + " " + this.lastName + " " + "he is " +  `${this.isVeg ? 'vegeterian' :'non-vegeterian'}`
//         }
// }

// //write code in small parameter!
// //same but sortcut
// // class Person{
// //         constructor(
// //             private readonly _personId :number, 
// //             private firstName:string,
// //             public lastName :string,
// //             public isVeg? : boolean
// //         ){}

// //        get personId(){
// //             return this._personId
// //         }

// //         getFullName():string{
// //             return this.firstName + " " + this.lastName + " " + "he is " +  `${this.isVeg ? 'vegeterian' :'non-vegeterian'}`
// //         }
// // }

// let firstPerson  = new Person(23,'john','doe',true)
// let secondPerson = new Person(234,"rame","pepe",false);

// console.log("firstPerson:-",firstPerson.personId)
// // firstPerson.lastName = 'somtehing';
// console.log("first-FullName:-",firstPerson.getFullName())
// console.log("Second-FullName:-",secondPerson.getFullName())


// class Person {
//     [key :string] : string;
// }

// let firstPerson = new Person();
// firstPerson.first = 'first'
// firstPerson.second = 'second'
// firstPerson.third  = 'third'
// firstPerson.fourth = 'fourth'

// console.log("FirstPerson:-",firstPerson)


// class Ride {
//   private static _activeRides: number = 0;

//     startRide() {
//         Ride._activeRides++
//     }
//     stopRide() {
//         Ride._activeRides--
//     }
//    static activeRides(): number {
//         return Ride._activeRides;
//     }
// }

// let firstRide = new Ride();
// firstRide.startRide()

// let secondRide = new Ride();
// secondRide.startRide();

// console.log(Ride.activeRides())


// interface takephoto {
//     cameramode :string,
//     lens:string,
//     resolution :string,
//     year:number
// }
// class linknd implements takephoto{
//     cameramode: string;
//     lens: string;
//     resolution: string;
//     year: number;
//     constructor(
//        cameramode :string,
//        lens:string,
//        resolution :string,
//        year:number,
//       public username:string
//     ){
//     this.cameramode = cameramode;
//     this.lens = lens;
//     this.resolution =resolution ;
//     this.year = year
//     }
    
// }

// const user1 = new linknd('haskhk','hafh','jad',34545,'hFKH');
// console.log(user1);



// class Human{
//     constructor(public firstName:string, public lastName:string){}
// }

// class Person extends Human{
//     constructor(firstName:string, lastName:string, public isVeg:boolean){
//         super(firstName,lastName)
//     }
// }


// let firstPerson = new Person('sachin','ram',true)

// console.log(firstPerson.isVeg)



// abstract class  Person {
//         constructor(public firstName:string, public lastName: string){}

//        get getFullName():string{
//             return this.firstName +  ' ' + this.lastName;
//         }
// }

// class Teacher extends Person{
//         override get getFullName(): string {
//                 return "Prof: " + super.getFullName
//         }
// }

// let firstTeacher = new Teacher('john','doe');
// console.log("firstTeacher:-",firstTeacher.getFullName)



// GENERICS


// class Person <T> {
//     constructor (public firstName:T, public lastName:string){}
// }


// let firstPerson = new Person<number>(32,'doe');

// console.log("FirstPerson:-",firstPerson.firstName)

// function firstFunc<T>(firstName:T):T{
//     return  firstName
// }

// console.log(firstFunc("something").toUpperCase());

interface Person<T>{
    firstName:string,
    lastName: string,
    isWorking:T
}


let firstPerson: Person<number> = {
firstName:'sachin',
lastName :'ram',
isWorking : 23
}

console.log("FirstPerson:-",firstPerson);