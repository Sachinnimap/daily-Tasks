

// ___________________________10-04-2025_____________________________________




// interface Result<T>{
//         data : T | null,
//         error: string | null;
// }

// interface User{
//         firstName: string
// }

// interface Product {
//         productName : string
// }


// function fetchData<T>(url : string): Result<T>{

//          return {data : null, error:"something went wrong"}
// }

// //so here USER interface is given to fetch then that interface is added in RESULT interface
// //thats why we are able to see an properties of USER 
// //thats why we put "data: null" becouse we dont need data value!
// //so if we change PRODUCT then we can see product properties also!
// let resultData = fetchData<User>("firstUrl") 
// console.log(resultData.data?.firstName); //data is users object



// T  - in function means this generic function!
// that tell we can return any type of value to it

// function firstFunc<T>(value:T):T{
// return value
// }

//   firstFunc("firstValue")

// let firstValue = firstFunc("firstValue");

// console.log(firstValue);




// _________________________________________________________________________________
//extends we can give anything like - class, interface,string,number  bolean etc____ 
// function checkParamsFunc<T extends number|string >(firstParams:T):string{
//         return 'something went wrong'
// }
//  only string or number givent when we calling below function!
// checkParamsFunc(4393); 
// ________________________________________________________________________

// class Person{
//         constructor(public firstName:string, public isVeg:boolean){}
// }

// interface Student{
//         studentId : number
//         studentName :string
// }

// //extends Persong  -  class
// // extends Student -- interface
// function checkParamsFunc<T extends Student>(value :T):string{
//         return 'something went wrong'

// }
// checkParamsFunc({studentId:323 , studentName:"sachin"}); 


// _________________--

// interface Product {
//         name : string,
//         price : number
// }

// class Store<T> {
//       protected  _objects: T[] = []
//         add(item :T){
//                 this._objects.push(item);
//         }
        
//         // We informed property that this is key !
//         //so then only we accesss the propery type object in type script!
//         find(property:keyof T,value:unknown){
//                 return this._objects.find((data)=> data[property] === value); 
//         }
// }

// let firstStore  = new Store<Product>();
// firstStore.find("name",'something') // in key - place - name only should be name!

// class compressibleStore<T> extends Store<T>{
//         handleCompress(){

//         }
// }

// // let firstStore = new compressibleStore<Product>();
// // // firstStore.handleCompress

// class SearcheableClass<T extends {name:string}> extends Store<T>{
//         findData(name:string):T|undefined{
//              return   this._objects.find((value)=> value.name === name)
//         }
// }       

// class ProductStore extends  Store<Product>{
//         getObject (){
//                 this._objects.find((value)=> console.log("VALUE:-",value))
//         }
// }


//_______________________TYPE Mapping_________________________

interface Product{
    firstName : string,
    mobile : number,
    isDev :boolean
}
//ReadOnly-  user want values only in Readonly property!
//Optional and Readonly both can be apply at same time!
type ReadOnlyProduct = {
readonly [k in keyof Product]? : Product[k]
}

let firstProduct : ReadOnlyProduct = {isDev:true, mobile :393}

// firstProduct.firstName = 32;

//Optional - all data are for optional!

type OptionalProduct = {
    [k in keyof Product]? : Product[k]
}

// this for any interface can use to do Optoin or Readonly his data
//can be apply on any value!
type OptionalAndReadOnly<T> = {   //<T> became generic!
   readonly [k in keyof T]? : T[k] | null //option & readonly & nullable!
}




function Component(firstParams:string){

}



class ParentClass{
    firstName:string = 'john'
    lastName:string = 'doeee'
    constructor(  firstName:string,  lastName:string = 'raaaaaaa'){}; //
    getParentData ():string{
            return this.firstName + " " + this.lastName;
    }
}



let latestParentData =  new ParentClass('pppp');

console.log("latestParentData",latestParentData);

