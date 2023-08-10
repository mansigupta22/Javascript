// ****************NUM******************//
const score = 20
console.log(score);

const balance = new Number(100) // specifically it defined as number
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); 
console.log(typeof balance);

const otherNumber = 87.804
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000000
console.log(hundreds.toLocaleString('en-IN'));

// max min values check in browser for dsa and competetive purposes


// ********************MATH******************//
console.log(Math)
console.log(Math.abs(-4)); // absolute value - turns -ve into +ve
console.log(Math.abs(4)); // absolute value +ve remains +ve
console.log(Math.round(4.8));
console.log(Math.ceil(4.2)); // choose the top number 
console.log(Math.floor(4.8)); // choose the lowest value

console.log(Math.min(4, 5, 8, 2));
console.log(Math.max(4, 5, 8, 2));

console.log(Math.random()); // it's values is always between 0 to 1

console.log(Math.random()*10); 
console.log(Math.random()+1);
console.log(Math.floor(Math.random()*10) + 1); // in this it can also give 0 value bcz if value is 0.01 so we add 1 to avoid that situation

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + 10) //we use max-min to define the range and we added 1 to avoid the 0 case scenario and we further added min to get atleat the min value