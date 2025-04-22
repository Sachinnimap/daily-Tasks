
//22-04-2025

// function handleUser<T extends number|string>(name:T):T{

//     return name;
// }

// let firstVar: number = handleUser<number>(3);
// console.log("FirstName:-",firstVar)

// interface Person{
//     firstName :string,
//     lastName : string,
//     isWorking: boolean
// }

// we can also directly pass CLASS and INTERFACE to that instead of extending!
//so if there are more than one value in class or interface then we have to add that value
//also in arguments so always class add only value that much are needed!
    // function handleUser<T extends Person>(personObj:T):T{
    //     // console.log("T-name",name)
    //     return personObj;
    // }

    // let firstVar: Person = handleUser<Person>({firstName:'sachin',lastName:"deoe",isWorking:true});
    // console.log("FirstName:-",firstVar)





// interface Product{
//         name: string,
//         price :number,
// }

// //so now if we create any value then we can use this class as GENERIC
// class Store <T>{
//         objects : T[] = []
//         add(product:T):T{
//             this.objects.push(product)
//             return product;
//         }
// }


// class CompressibleStore<T> extends Store<T>{
//     compress(){}
// }


// let firstCompress = new CompressibleStore<Product>()
// firstCompress.add({name:"John",price:23})

// console.log("FirstCompress:-",firstCompress)

// //so we need this to acess the variable !
// class searchableStore<T extends Product> extends Store<T>{
//     find(name:string):Product | undefined {
//         let getProduct : Product|undefined = this.objects.find((product)=> product.name == name)
//         return getProduct;
//     }
// }


// class Human {
//     firstName:string ='';
//     lastName : string = '';
//     isWorking : boolean = true;
// }

// class Person<T>{
//         humanList: T[] = [];

//         //keyOf means keys of human we will get here!
//         find(propertyName:keyof T,value:string) :T|undefined{

//             let getPersonsList = this.humanList.find((human)=> human[propertyName] == value )

//             return getPersonsList;
//         }
// }

// //becouse we given Human type thats why in below code 
// //we can only access Humans values not any other value!
// //thats why we KeyOf so user cannot enter anything to this
// let createFirstPerson = new Person<Human>()
// createFirstPerson.find('firstName','sachin')


// interface Product {
//      productId : number;
//     productName:string;
//     productDetails : string;
//     productPrice: number;
// }

// //only use TYPE not Interface 
// // type ReadOnlyProduct  =  {
// //    readonly [K in keyof  Product] : Product[K]
// // }

// //SortCut  to create ReadOnly of Product!
// type ReadOnlyProduct = Readonly<Product> 

// //Optional!
// type OptionalProduct = {
//     [K in keyof Product]? : Product[K]
// }

// // type 

// let firstProduct:ReadOnlyProduct = {productId:12,productName:"john",productDetails:'something',productPrice:100}

// console.log("FirstProduct:-",firstProduct)

// // we cannot change the value becouse of read only!
// // firstProduct.productPrice = 300


// function echo<T>(arg:T) :T{
//      return arg;
//      }

// echo<number>(23)



// function printName<T extends {name:string}>(obj: T) {
//     console.log(obj.name);
// }    


// interface Person<T>{
//     personId:T;
//     personFirstName: string,
//     personLastName: string
// }

// let firstPerson : Person<Number> = {
//     personId:12,
//     personFirstName:'john',
//     personLastName:"doe"
// }


// function Component(constructor:Function){
//     console.log("Component is running!")
//     constructor.prototype.firstName = 'John'
//     constructor.prototype.lastName = "Doe"
//     constructor.prototype.handleName =()=>{ console.log("!_HandledName Called_!")}
// }

// @Component
//  class Teacher{
      
//  }
//  let firstTeacher = new Teacher();
//  firstTeacher.lastNam


//method to handle Component if we passed anything to this!

// function Component(id:number){
//     return (constructor :Function)=>{
//             console.log("Component is running!")
//             constructor.prototype.firsName = "John Doe!"
//     }
// }
// function Pipe(constructor:Function){
//     console.log("Pipe is running!")
// }


// @Component(23)
// @Pipe
// class Person{

// }

// let firstPerson = new Person();


// function Capitalize(result:any, methodName:string ,descriptor :PropertyDescriptor){
//     console.log("Capitalize is running!")
//     const original = descriptor.value; //it only work for normal function not for getter and settter
//     descriptor.value = function(firstName:string,lastName:string):string{
//         //now we overiding that method which we declared in Class
//         //overide becouse we used this decorator
//         console.log("Above is called from ",firstName) 
        
//         // for Calling that method which was override we use call method
//         //in above or below we can write any other things
//             // original(firstName,lastName)
//             original.call(this, firstName,lastName)

//         console.log("After - calling that method!")

//       return  `Called_ABOVE_ Hi, ${firstName} ${lastName} `

//     }
// }


// class Person{

//         @Capitalize
//         getFullName(firstName:string, lastName:string){
//             console.log(`Working-called!`,firstName)
//             // return  `Hi, ${firstName} ${lastName} `
//         }

// }

// let firstName = new Person();

// console.log(firstName.getFullName('john','doe'));

function Capitalize (result:any, methodName:string, descriptor: PropertyDescriptor){
    const original = descriptor.get //use get instead of value because it is a get Method

    descriptor.get = function(){
            let result = original?.call(this) //we called this method
            return  `OurResult:- ${result}`
    }
}


class Person{
constructor(public firstName:string,public lastName:string){}

@Capitalize
get getFullName():string{
    console.log("Class GetCalled!")
    return `Hi ${this.firstName} ${this.lastName}`
}
}

let firstPerson = new Person('pppe','eweww')

console.log(firstPerson.getFullName);

