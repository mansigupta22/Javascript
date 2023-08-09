// two datatypes 1.Primitive(call by value), 2.Non-Primitive(reference type)
// difference is based on how they are stored in the memory
// call by reference and call by value(doesn't give the reference of the memory but instead it copies the data and gives you so whatever changes happen it happens in the copy)

// PRIMITIVE
// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const myName = "Mansi"
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let username;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 364897089247509n



// REFERENCE TYPE (Non Primitive)
// Array, Objects, Functions /* datatype of non-primitive is Functions and function return is Object Function */

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "Mansi",
    age: 21,
}

const myFunction = function () {
    console.log("Hello World");
}


console.log(typeof myName);
console.log(typeof score);
console.log(typeof scoreValue);
console.log(typeof isLoggedIn);
console.log(typeof outsideTemp); // Object
console.log(typeof username);
console.log(typeof id);
console.log(typeof anotherId);
console.log(typeof bigNumber);
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction); // returns function but it's Function Object


// https://262.ecma-international.org/5.1/#sec-11.4.3 //Documentation for typeof



// Javascript is a DYNAMICALLY Typed Language