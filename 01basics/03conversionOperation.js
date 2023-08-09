// let age = "23" // "23" => 23
// let age = "23abc" // =>NaN
// let age = null // 0
// let age = undefined // NaN
// let age = true // => 1 // false => 0
let age = "Mansi" // => NaN


/* const {score} = req.body */
console.log(typeof age);
console.log(typeof (age));

let valueInNumber = Number(age)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// let isLoggedIn = 1 //true
// let isLoggedIn = 0 //false
// let isLoggedIn = "" // false
let isLoggedIn = "Mansi" //true

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);