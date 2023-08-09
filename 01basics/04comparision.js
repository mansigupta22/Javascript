// make sure to compare same datatype to have the predictable result

// console.log(2 > 1); // greater than
// console.log(2 >= 1); // greaterthan or equalto
// console.log(2 == 1); // equal to
// console.log(2 != 1); // not equal to

// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); // true bcz here is the value conversion issue so we didn't get the predictable result

/* the reason is that an equality check == and comparisions > < >= <= work differently */
/* Comaparisions convert null to a number, treating it as 0. That's why null >= 0 is true and null > 0 is false */


console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);


// Strict Check ===
console.log("2"===2);

/* we mostly avoid null and undefined cases so not to create confusion and also write clean code */