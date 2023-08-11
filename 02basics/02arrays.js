const marvelHeros = ["Ironman", "Antman", "Spiderman"]
const dcHeros = ["Superman", "batman"]

// marvelHeros.push(dcHeros) // here it takes the another array as it's element //not a good practice 
// console.log(marvelHeros)
// console.log(marvelHeros[3][1]) // it means the 3 element and inside that it's 1st element // not a good way of syntax


// const heros = marvelHeros.concat(dcHeros) // merge both the arrays 
// console.log(heros);
// console.log(heros[3]);

const allHeros = [...marvelHeros, ...dcHeros] // spread operator - seperate all element
// console.log(allHeros);

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [8,9,[3,5]]]
const realArr  = anotherArr.flat(Infinity) // flat combine all array into one
console.log(realArr);


console.log(Array.isArray("Mansi")); // here isArray is a questionaire asking is this an array 
console.log(Array.from("Mansi")); // here from form an array of the given string 

console.log(Array.from({name:"Mansi"})); // it gives an empty array bcz it can't convert it, whenever it doesn't understand it gives empty array //intresting case


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // returns a new array from set of elements