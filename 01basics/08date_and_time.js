// Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toJSON());
console.log(typeof myDate); // Object

let myCreatedDate = new Date(2023, 0, 23) // months start from 0 bcz of array
console.log(myCreatedDate.toDateString());

let myCreatedDateOne = new Date(2023, 0, 20, 5, 3)
console.log(myCreatedDateOne.toLocaleString());

let myCreatedDateTwo = new Date("2023-01-23")// in string month start from 1
console.log(myCreatedDateTwo.toLocaleString());


let myTimeStamp = Date.now()
console.log(myTimeStamp); // useful in hackthon booking purposes
console.log(myCreatedDate.getTime());
console.log(Date.now());
console.log(Math.floor(Date.now()/1000)); // to convert into seconds we divide it by 1000 and to avoid decimal values we use Math.floor

let newDate = new Date()
console.log(newDate.getDay());
console.log(newDate.getDate());
console.log(newDate.getMonth() + 1);// to not confuse end user


// `${}`-> StringInterpolation
// `${newDate.getDay()} // example

newDate.toLocaleString('default', {
    weekday: "long",
}) //Object so we can define multiple things inside it
