
//STATIC METHOD 

// class Ride{
//    private  static _activeRides:number = 0
    
//     start():void{
//             ++ Ride._activeRides;
//     }
//     stop():void{
//         -- Ride._activeRides;
//     }
        //  need to write static to access below method in Ride - Ride.activeRides
//    static get activeRides():number{ 
//         return Ride._activeRides;
//     }
// }

// let firstRide = new Ride();
// firstRide.start()
// let secondRide = new Ride()
// secondRide.start()

// console.log(Ride.activeRides)


// INHERITENCE
//means child can also access parent properties in class!

// class Person{
//     constructor(public firstName:string,public lastName:string){}

//    get getFullName():string{
//         return this.firstName  + ' ' + this.lastName;
//     }
// }

// class Student extends Person{
//     constructor(public studentId:number,  firstName:string,   lastName:string){
//         super(firstName,lastName)
//     }

//     getStudentDetails(){
//         return {"studentId":this.studentId, "firstName":this.firstName,"lastName":this.lastName}
//     }
// }

//METHOD OVERRIDING - means above person method we are overriding in Teacher - getFullName!
//always use "OVERRIDE" for override any method!
// class Teacher extends Person{

//    override get getFullName():string{
//             return "Professor"+ " " + super.getFullName;
//     }
// }

// let newStudent = new Student(100, 'sachin','ram');
// let newTeacher  = new Teacher('john','doe')

// console.log(newTeacher.getFullName)



//getFullName still accessible becouse of "Student" is child class of "Person!"
// console.log("getDetails", newStudent.getFullName())

// console.log("new Student" , newStudent)




// class Person{
//     constructor(public firstName:string,public lastName:string){}

//     get getFullName():string{
//         return this.firstName + " " + this.lastName;
//     }
// }

// class Teacher extends Person{
//         override get getFullName():string{
//             return "Professer" + " " +  super.getFullName;
//         }
// }

// class Principle extends Person{
//     override get getFullName():string{
//         return "Principle"+ " " + super.getFullName;
//     }
// }

// let newPrinciple =  new Principle('John','Doe')

// // console.log("NEW", newPrinciple.getFullName);


// // _______________________________________________________________________________________
// //this is called Polimorphism !!

// function  handlePersonData (person:Person[]) {
//         person.map((personData)=>{
//             console.log(personData.getFullName)
//         })
// }

// handlePersonData([
//    new Teacher("aa",'bb'),
//    new Principle("ree",'eroeo'),
//    new Person("rammm",'deoee'),
//    new Principle("pppp",'jlele'),
//    new Teacher("cc",'dd'),
//    new Principle('rre','lelelel'),
//    new Person("rammkelm",'dlekjeeoee'),
//    new Teacher("rsdl",'edo')
// ])
// // __________________________________________________________________________________

// //TODOf

// // abstract class Calendar{
// //     constructor(public name:string){}

// //     abstract addEvent(): void;
// //     abstract removeEvent(): void;
// // }

// // interface Calendar {
// //     name :string;
// //     addEvent(): void;
// //     removeEvent(): void;
// // }


// ______Generic Classes____________

//F - is consider as type of productPrice 
//so below when i created then i have given there types
// now we can product as per our requirement ! 

// class Product<F>{

//     constructor(public productName:string,public productprice:F,public productDesc:string,private isProductVeg:boolean){}
// }

// //becouse of generic class - we can give any type of value  to 'productPrice' - like - Number, String, Boolean,...!
// let latestProduct = new Product<string>('tomato',"99",'this is tomato',false)
// let secondProduct = new Product<number>('tomato',99,'this is tomato',false)
// let thirdProduct  = new Product('third',32,'ranjhaana',false) //
// // ____________________________________________________________________________________________

//Generic Function !!

// class FirstClass{

//     constructor(){}
//  static FirstFunc<T>(id:T){
//         console.log('ID - ' , typeof id)
// }
// }

// FirstClass.FirstFunc(1)

// _____________________________________________________________________


// ____________Generic Interfaces______________________

// interface Result<T>{
//     data : T | null,
//     error : string | null;
// }

// interface User {
//     username : string
// }

// interface Student {
//     studentName : string
//     rollNo : number
// }


// function fetch<T>(url:string):Result<T>{
//     return {data :null, error :'something went wrong'}
// }

// let resultData = fetch<User>("http//something.com")

// resultData.data?.username 



// // ____________________________________________________________________________________________________
  
   
// // GENERICS AGAIN

// class generic
// T -  can be anythig  for everytime when we create new variable

//  class Person<T> {
//     constructor(public firstName :T, public secondName :string){} /// that T only work for one value!
//  }

//  //so now we can create multiple types values with same Person classs thats generic

//  let latestPerson = new Person<number>(55, 'raam') // not 
// //  latestPerson.firstName.//  now i can access all methods of latestPerson as number
//  let secondPerson = new Person("rakdsl",'rejle'); // if not given that consider given value as there type -  here string;

// Generic Function

// class Person{

//    static handlePerson<T>(name:T){  //Second T is depended on First T
//         console.log("This is your person class!",name)
//     }
// }


// Person.handlePerson<string>('rsdhinde');


// _______Iterface Generic__________

// interface Person{
//     firstName: number
//     lastName :string
// }

interface Result<T>{
        data : T | null,
        error : null
}

