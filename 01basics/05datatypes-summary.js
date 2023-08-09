// two datatypes 1.Primitive(call by value), 2.Non-Primitive(reference type)
// difference is based on how they are stored in the memory
// call by reference and call by value(doesn't give the reference of the memory but instead it copies the data and gives you so whatever changes happen it happens in the copy)

// PRIMITIVE
// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const myName = "Mansi" // String
const score = 100 // number
const scoreValue = 100.3 //number

const isLoggedIn = false // boolean
const outsideTemp = null // Object
let username; // undefined

const id = Symbol('123') // symbol
const anotherId = Symbol('123') // symbol

console.log(id === anotherId); //false

const bigNumber = 364897089247509n // bigInt



// REFERENCE TYPE (Non Primitive)
// Array, Objects, Functions /* datatype of non-primitive is Functions and function return is Object Function */

const heros = ["shaktiman", "naagraj", "doga"]; // object

let myObj = {
    name: "Mansi",
    age: 21,
} // object

const myFunction = function () {
    console.log("Hello World");
} // function


console.log(typeof myName); //String
console.log(typeof score); //Number
console.log(typeof scoreValue); //Number
console.log(typeof isLoggedIn); //Boolean
console.log(typeof outsideTemp); // Object
console.log(typeof username); //Undefined
console.log(typeof id); //Symbol
console.log(typeof anotherId); //Symbol
console.log(typeof bigNumber); //BigInt
console.log(typeof heros); //Object
console.log(typeof myObj); //Object
console.log(typeof myFunction); // Function //returns function but it's Function Object


// https://262.ecma-international.org/5.1/#sec-11.4.3 //Documentation for typeof



// Javascript is a DYNAMICALLY Typed Language

/*javascript is dynamicly type language, the type of a variable is checked during run-time
Because data type will automatically assigned at the time of compilation or code execution.
whereas...
In statically typed language, the type of a variable is checked during compile-time */