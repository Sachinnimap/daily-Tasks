
// _______________________ 11-04-2025______________________

// _______General/normal decoratore________

// function Component(methodHandledbyThis:Function){
//         console.log("Component is running!!!")

//         methodHandledbyThis.prototype.myVariableName = 'johnDoe';

//         methodHandledbyThis.prototype.myMethod = function (){
//                 console.log("My method is running sucessfully!!!")
//         }

// }

// @Component
// class Person{
//        constructor(public firstName:string, public lastName:string){}

//      get  handleFullName():string{
//                 return this.firstName + " " + this.lastName;
//        }

//        //set can be only one parameter!
//        set handleFullName(userFirstName:string){
//                 this.firstName = userFirstName;
//                 // this.lastName = userLastName;
//        }
// }


// let firstPerson = new Person('sachin','ram')

// console.log("FirstName:-",firstPerson)

// _______________________________________________________

// _____________Parameterised Decorator________________
// the decorator who take parameters so we can pass parameters to the decorators

// function Component(id:number){  //return function constructor solve the parameter issue!
// return  (constMethods:Function)=>{
//         console.log('Decoratore is running!')
//         console.log("component parameter Value :- ", id)

// }
// }

// @Component(123)
// class Student{
//         studentId: number = Date.now()
//         constructor(public studentName :string = 'rsls', public studentStream : string){}
// }

// let firstStudent = new Student(undefined,'eld')
// console.log("firststudent ", firstStudent)


// ________Decorator composition_______

// means multiple decorator assign to a class
//and decorator work bottom to top 

// //first decoratore
// function Component (constructor : Function){
//         console.log("first running!!!!!")
// }

// //second Decorator
// function AppDeco(constructor:Function){
//         console.log("Second Decorator is running!")
// }


// @Component // first decorator
// @AppDeco   // second decorator -- last decoratore always run first -  Bottom to Top
// class Animal{
//         constructor(
//                 public animalName:string,
//                 public isVegiterian :string,
//                 public foundInCountry : string,
//         ){}

//         get getAnimalData():string {

//                 return this.animalName + " is "  + this.isVegiterian + ' and found in forest of ' + this.foundInCountry;
//         }       
// }

// //decorator run only once when not every time we call!
// let firstAnimal = new Animal("Tiger",'carnivorous' , 'africa')
// let secondAnimal = new Animal("Deer",'harbiborous','india')

// // console.log(firstAnimal.getAnimalData)
// console.log(secondAnimal.getAnimalData)


// _______________Method Decorators_____________________


// function HandleMethodDecorator (target :any ,methodName:string, descriptor :PropertyDescriptor){
//         const original =  descriptor.value as Function;
//        descriptor.value = function(){
//                 console.log("BEFORE")
//                 original.call(this,"Blue Sky")
//                 console.log("AFTER")
//        }
// }

// class Person {
//         constructor(public firstName:string,public lastName:string){}  

//         @HandleMethodDecorator  
//         getUserFullName(message:string){
//                 console.log("Hellow",message)
//         }       
// }

// let firstPerson = new Person('john','doe');
//  firstPerson.getUserFullName("MyMessage!");
// // firstPerson.getFullName = "Myname"  //  To set value we use equals "=" to sign
// // console.log("FirstPerson -",firstPerson);


// _____ Method Decorators Retrying!!_____

// function AddDecorator(targete:any, methodName:string, descriptor:PropertyDescriptor){
//                 const original = descriptor.value as Function;
//                 descriptor.value = function(){
//                         console.log("in descriptor function")
//                         original.call(this)
//                 }
// }

// class Teacher{
//         constructor(public teacherId:number, public teacherName:string){}

//         @AddDecorator
//         getDetails(){
//                 console.log("getDetailisWorking!!!")
//         }
// }

// let firstTeacher = new Teacher(11,'john')

// firstTeacher.getDetails()


// _____ Another method Decorator________________ with _ return, props 


// function FirstDecorator(target:any, myMethod :string,descriptor:PropertyDescriptor){
//         const original = descriptor.value as Function;

//         // this below code is redefining descriptor.value function this will takeover - where we call that function

//         descriptor.value = function (...props:any[]) {  //one prop - message : string - for multiple use props rest operator
//                 //accessing result and returning becouse 
//                 //below function will not work ,  this will takeover that function
//                 //need return and any other things in this!
//                const result = original.call(this,...props)
//               console.log(result)
//                 return result;

//         }
// }


// class Principle {

//         constructor(public firstName: string ,public lastName: string){}

//         @FirstDecorator  //decorator also able to access "constructor value not need to explicitly paas values!"
//         getFullName(message:string):string{
//                 return 'Hi ' + this.firstName + " " + this.lastName + ", " + message 
//         }

// }

// let firstPrinciple = new Principle('john','doe');

// console.log(firstPrinciple.getFullName("somthing went wrong"))



// function ElectronicsDecorator(target:any,myMethod:string,discriptor:PropertyDescriptor){

//         //two or more methods added to One Decorator 
//         // here we added Getter and Setter both!
//         //using if else condition

//                 const originalSet = discriptor.set;

//                 const originalGet = discriptor.get;

//                 if(originalSet)
//                 discriptor.set = function () {
//                         originalSet?.call(this,'uuuu') 
//                 }
//                 else
//                 discriptor.get = function (){
//                       let result =   originalGet?.call(this);
//                       if(typeof result  === 'string')
//                         return result.toUpperCase();
//                         return result;
//                 }
// }


// function Capitalize (target:any , myMethod :string , discriptor : PropertyDescriptor){

//         const original = discriptor.get;

//         discriptor.get = function (){
//                 console.log("Called!")
//         const result =   original?.call(this)
//                 if(typeof result === 'string')
//                         return result.toUpperCase(); //if condition return

//                 return result; //default return

//         }
// }

// class Electronics {

//         constructor(public electronicName:string ,public electronicPrice:number, public isAvailable:boolean){}

//         @ElectronicsDecorator
//         // @Capitalize // not going to work fr set method//only of get who return string only
//         set setElectronicName(electronicNameByUser:string){
//                 this.electronicName = electronicNameByUser;
//         }

//         @Capitalize //capitalize only work for string -- we have given condition above for only string !
//         get getElectronicDetail():string{

//                 return `this is ${this.electronicName}  & lowest Price is ${this.electronicPrice} & currently is ${this.isAvailable?'available':'not availble'} in market`
//         }
// }

// let firstElectronic = new Electronics('laptop',1323,true)
// console.log("firstElectronic",firstElectronic);

// firstElectronic.setElectronicName = 'mobile'

// console.log('firstElectronit name -', firstElectronic)
// console.log("Get" ,firstElectronic.getElectronicDetail)



// _____ Property Decorators_________

// function Length(length: number) {
//         return  (target: any, propertyName: string) => {
//                 let value: string;
//                 const discripter: PropertyDescriptor = {
//                         get() {
//                                 return value;
//                         },
//                         set(newValue: string) {
//                                 if (newValue.length > length)
//                                         throw new Error(`${propertyName} length should be less than ${length}`)
//                                 value = newValue;
//                         },
                      
//                         enumerable:true,
//                         configurable:true
//                 }

//                 Object.defineProperty(target, propertyName, discripter);
                
//         }
// }
// class Student {
//         @Length(4)
//         paidFees: string
//         // need to write here becouse we using for "Property Decorator!"
//         constructor(public firstName: string, public lastName: string, paidFees: string) {
//                 this.paidFees = paidFees; //need this line also for "property Decorator"
//         }
// }

// let firstStudent = new Student("sachin", 'ram', "33")
// // let secondStudent = new Student("john", 'doe', "4343434")
// // console.log(firstStudent.paidFees = "334")
// console.log(firstStudent)
// console.log(firstStudent.paidFees)


//_________________Property Decorator!_____________


function CheckSalary(totalLength:number){
        return function (target:any, propertyName:string){
                let value:string;
                let discripter:PropertyDescriptor = {
                        get(){
                                return value;
                        },
                        set(newValue:string) {
                                if(newValue.length > totalLength){
                                        throw new Error(`${propertyName} should be less than ${totalLength} `)
                                }
                                value =  newValue       
                        },

                        
                }
                Object.defineProperty(target,propertyName,discripter);
        }
}


class Teacher{
        @CheckSalary(5)
        salary:string
        constructor(public firstName:string, public secondName:string , salary:string){
                this.salary = salary;
        }
}

let firstTeacher = new Teacher("john","doe","342");
console.log("First_teacher", firstTeacher)
console.log("salary",firstTeacher.salary)
