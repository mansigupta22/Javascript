// OBJECTS - most imp topic in Javascript

// two ways to declare it, 1.literal 2.constructor

// singleton, forms in constructor but not in literal

// Object.create() , constructor method used to make singleton

//  Object Literals 
// const user = {} // these {} are empty object
const user1 = {
    name: "Mansi", // we can define keys and arrays both // here name is also an string we don't write it like that bcz it assumes it to be a string
    "full name": "Mansi Gupta", // we can't access it by dot method, only option we have is to use braces
    age: 18,
    location: "Delhi",
    isActive: true,
    activeDays: ["monday", "friday"]
}

// console.log(user1.age); // not a good way of using 
console.log(user1["full name"]);