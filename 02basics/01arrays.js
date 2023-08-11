// array - in square brackets [], inside it are elements 
// array enables storing a collection of multiple items under a single variable name
// arrays are resizable and can contain a mix of different data types
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// () - parenthesis
// {} - braces/curley braces
// [] - brackets

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["antman", "ironman"]

const myArr2 = newArray(1, 2, 3, 4)

// console.log(myArr["one"]) //can't access array like that 

console.log(myArr[1]); //arrays are zero indexed

// Array Methods

// myArr.push(6)
// console.log(myArr);
// myArr.pop() // remove last value in array

// myArr.unshift(9) // insert the value at the zero index in array, not a good use mostly, bcz of this need to shift the whole array 

// myArr.shift() // it removes the zero index array

// console.log(myArr.includes(9)); //questionaire method to check whether the data is there or not the result is in boolean type

// console.log(myArr.indexOf(9)); // it gives us index of the data, if it isn't there it returns -1

// const nweArr = myArr.join() // bind the array and convert it into string

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// SLICE, SPLICE

console.log("A", myArr);

const myn1 = myArr.slice(1,3) //returns section of an array doen't include the upper range and also it doesn't maniuplate the original array it remains trhe same 

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3) // returns the whole range of array and manipulate the original array splice out that portion from the original array
console.log("C", myArr);
console.log(myn2);