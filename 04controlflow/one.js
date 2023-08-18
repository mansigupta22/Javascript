// if

// if(condition){

// } // syntax

// const temperature = 41

// if( temperature === 41){
//     console.log("<50");
// }
// else{
//     console.log("temp >50");
// }
// console.log("execute");

// <, >, <=, >=, ==, !=, ===, !==

// const score = 500

// if(score > 100){
//     const power = "fly";
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`); // didn't execute bcs here power is out of scope in const and let but not in var, in var it'll execute it bcz it has a global scope

const balance = 1000

// if(balance > 500) console.log("test"); // it'll get executed bcz here it assumes the scope is same but this is very immature way to write code 


// if (balance < 500){
//     console.log("less than");
// }
// else if(balance < 750){
//     console.log("less than 750");
// }
// else if ( balance < 900){
//     console.log("less than 900");
// }
// else{
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if ( userLoggedIn && debitCard){
    console.log("allow to buy courses");
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged In");
}